import { router } from 'expo-router';

import { Button } from '@/src/components/atoms/Button/Button';
import Text from '@/src/components/atoms/Text/Text';
import Layout from '@/src/components/organisms/Layout/Layout';

const Citations = () => {
  return (
    <Layout>
      <Text size="large" weight="bold" align="center">
        Citations
      </Text>
      <Button onPress={() => router.push('/citations/1')}>
        <Text color="buttonText">Citation</Text>
      </Button>
    </Layout>
  );
};

export default Citations;
