import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Switch } from 'react-native';

import { Button } from '@/src/components/atoms/Button/Button';
import Text from '@/src/components/atoms/Text/Text';
import Layout from '@/src/components/organisms/Layout/Layout';
import { useTheme } from '@/src/hooks/useTheme';
import {
  setIsAuthenticatedHandler,
  useAuthenticationStore,
} from '@/src/stores/authentication';
import { useThemeStore } from '@/src/stores/theme/theme.store';

const Settings = () => {
  const { theme: themeSelected, toggleTheme } = useThemeStore();
  const theme = useTheme();
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
        Settings
      </Text>
      <Text style={{ color: theme.colors.text }}>
        Modo: {themeSelected === 'dark' ? 'Oscuro' : 'Claro'}
      </Text>
      <Switch value={themeSelected === 'dark'} onValueChange={toggleTheme} />
      <Button onPress={handleLogout}>
        <Text color="buttonText">Logout</Text>
      </Button>
    </Layout>
  );
};

export default Settings;
