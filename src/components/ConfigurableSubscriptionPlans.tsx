
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription, SubscriptionPlan } from '@/hooks/useSubscription';

interface ConfigurableSubscriptionPlansProps {
  plans: SubscriptionPlan[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ConfigurableSubscriptionPlans = ({ 
  plans, 
  title = "Choose Your Plan",
  subtitle = "Unlock premium features and take your experience to the next level",
  className = "py-16 bg-gray-50"
}: ConfigurableSubscriptionPlansProps) => {
  const { subscribed, subscriptionTier } = useAuth();
  const { loading, handleSubscribe, handleManageSubscription, checkSubscription } = useSubscription();

  return (
    <div className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
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

export default ConfigurableSubscriptionPlans;
