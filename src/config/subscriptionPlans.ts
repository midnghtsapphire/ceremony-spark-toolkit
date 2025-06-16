
import { SubscriptionPlan } from '@/hooks/useSubscription';

export const ceremonyProPlans: SubscriptionPlan[] = [
  {
    name: 'Basic',
    price: '$29',
    priceId: 'price_1Raj2wP8T6VGDCG5sDbSl8MM',
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
