import { Stack } from 'expo-router';
import { View } from 'react-native';

import {
  isAuthenticatedSelector,
  useAuthenticationStore,
} from '@/src/stores/authentication';

const MainIndex = () => {
  const isAuthenticated = useAuthenticationStore(isAuthenticatedSelector);
  console.log({ isAuthenticated });
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
    </View>
  );
};

export default MainIndex;
