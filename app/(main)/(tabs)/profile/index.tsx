import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

import { Button } from '@/src/components/atoms/Button/Button';
import Text from '@/src/components/atoms/Text/Text';
import Layout from '@/src/components/organisms/Layout/Layout';
import {
  setIsAuthenticatedHandler,
  useAuthenticationStore,
} from '@/src/stores/authentication';

const Profile = () => {
  const { removeItem } = useAsyncStorage('@auth_token');
  const setIsAuthenticated = useAuthenticationStore(setIsAuthenticatedHandler);

  const handleLogout = () => {
    router.push('/login');
    removeItem();
    setIsAuthenticated(false);
  };

  return (
    <Layout>
      <Text size="large" weight="bold" align="center">
        Profile
      </Text>
      <Button onPress={handleLogout}>
        <Text color="buttonText">Logout</Text>
      </Button>
    </Layout>
  );
};

export default Profile;
