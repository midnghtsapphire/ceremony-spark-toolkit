
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    priceId: 'price_1RLdqrP8T6VGDCG5basic', // You'll need to create these in Stripe
    features: [
      'Basic ceremony scripts',
      'Standard templates',
      'Email support',
      'Up to 5 ceremonies per month'
    ]
  },
  {
    name: 'Premium',
    price: '$59',
    priceId: 'price_1Raj4TP8T6VGDCG5erlZ8vtG',
    features: [
      'All Basic features',
      'Advanced AI customization',
      'Priority support',
      'Unlimited ceremonies',
      'Custom templates'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    priceId: 'price_1Raj5MP8T6VGDCG5DMGzdlG2',
    features: [
      'All Premium features',
      'White-label options',
      'API access',
      'Dedicated support',
      'Custom integrations'
    ]
  }
];

const SubscriptionPlans = () => {
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

      // Open Stripe checkout in a new tab
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

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600">
            Unlock premium features and take your ceremonies to the next level
          </p>
          {subscribed && (
            <div className="mt-4 flex justify-center gap-4">
              <Badge variant="secondary" className="text-green-700 bg-green-100">
                Current Plan: {subscriptionTier}
              </Badge>
              <Button variant="outline" onClick={handleManageSubscription}>
                Manage Subscription
              </Button>
              <Button variant="outline" onClick={checkSubscription}>
                Refresh Status
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">
                  Most Popular
                </Badge>
              )}
              {subscriptionTier === plan.name && (
                <Badge className="absolute -top-2 right-4 bg-green-500">
                  Current Plan
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  onClick={() => handleSubscribe(plan.priceId, plan.name)}
                  disabled={loading === plan.priceId || (subscribed && subscriptionTier === plan.name)}
                  variant={subscriptionTier === plan.name ? "secondary" : "default"}
                >
                  {loading === plan.priceId
                    ? 'Loading...'
                    : subscriptionTier === plan.name
                    ? 'Current Plan'
                    : 'Subscribe'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
