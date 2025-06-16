
import ConfigurableSubscriptionPlans from '@/components/ConfigurableSubscriptionPlans';
import { ceremonyProPlans } from '@/config/subscriptionPlans';

const SubscriptionPlans = () => {
  return (
    <ConfigurableSubscriptionPlans 
      plans={ceremonyProPlans}
      title="Choose Your Plan"
      subtitle="Unlock premium features and take your ceremonies to the next level"
    />
  );
};

export default SubscriptionPlans;
