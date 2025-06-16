
import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  subscribed: boolean;
  subscriptionTier: string | null;
  subscriptionEnd: string | null;
  loading: boolean;
  signOut: () => Promise<void>;
  checkSubscription: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  subscribed: false,
  subscriptionTier: null,
  subscriptionEnd: null,
  loading: true,
  signOut: async () => {},
  checkSubscription: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [subscriptionTier, setSubscriptionTier] = useState<string | null>(null);
  const [subscriptionEnd, setSubscriptionEnd] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkSubscription = async () => {
    if (!session) return;
    
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      setSubscribed(data.subscribed || false);
      setSubscriptionTier(data.subscription_tier || null);
      setSubscriptionEnd(data.subscription_end || null);
    } catch (error) {
      console.error('Error checking subscription:', error);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut({ scope: 'global' });
      // Clear subscription state
      setSubscribed(false);
      setSubscriptionTier(null);
      setSubscriptionEnd(null);
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
        
        // Check subscription when user signs in
        if (event === 'SIGNED_IN' && session) {
          setTimeout(() => {
            checkSubscription();
          }, 0);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (session) {
        setTimeout(() => {
          checkSubscription();
        }, 0);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      session,
      subscribed,
      subscriptionTier,
      subscriptionEnd,
      loading,
      signOut,
      checkSubscription,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
