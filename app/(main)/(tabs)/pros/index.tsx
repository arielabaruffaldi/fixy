import { router } from 'expo-router';

import { Button } from '@/src/components/atoms/Button/Button';
import Text from '@/src/components/atoms/Text/Text';
import Layout from '@/src/components/organisms/Layout/Layout';

const Pros = () => {
  return (
    <Layout>
      <Text size="large" weight="bold" align="center">
        Pros
      </Text>
      <Button onPress={() => router.push('/pros/1')}>
        <Text color="buttonText">Pros</Text>
      </Button>
    </Layout>
  );
};

export default Pros;
