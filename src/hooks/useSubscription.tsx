
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export interface SubscriptionPlan {
  name: string;
  price: string;
  priceId: string;
  features: string[];
  popular?: boolean;
}

export const useSubscription = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const { session, subscribed, subscriptionTier, checkSubscription } = useAuth();
  const { toast } = useToast();

  const handleSubscribe = async (priceId: string, planName: string) => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe to a plan.",
        variant: "destructive",
      });
      return;
    }

    setLoading(priceId);

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      window.open(data.url, '_blank');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create checkout session",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  const handleManageSubscription = async () => {
    if (!session) return;

    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      window.open(data.url, '_blank');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to open customer portal",
        variant: "destructive",
      });
    }
  };

  return {
    loading,
    subscribed,
    subscriptionTier,
    handleSubscribe,
    handleManageSubscription,
    checkSubscription,
  };
};
