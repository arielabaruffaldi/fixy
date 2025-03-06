import { useTheme } from '@react-navigation/native';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LoadingScreen from '@/src/components/molecules/LoadingScreen/LoadingScreen';
import { encryptText } from '@/src/config/crypto';
import { useSignIn } from '@/src/service/authentication/useSignIn';
import {
  setIsAuthenticatedHandler,
  useAuthenticationStore,
} from '@/src/stores/authentication';

const Login = () => {
  const { mutate: signIn, isLoading } = useSignIn();
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setIsAuthenticated = useAuthenticationStore(setIsAuthenticatedHandler);

  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      color: theme.colors.text,
      height: 40,
      margin: 12,
      padding: 10,
    },
  });

  const handleSignIn = async () => {
    try {
      const encryptedUsername = encryptText(username);
      const encryptedPassword = encryptText(password);
      if (!encryptedPassword) {
        Alert.alert('Error', 'Failed to encrypt password');
        return;
      }

      signIn(
        {
          username: encryptedUsername,
          password: encryptedPassword,
          groupname: encryptText('rpe2g'),
        },
        {
          onSuccess: () => {
            router.push('/');
            setIsAuthenticated(true);
          },
          onError: (err: unknown) => {
            const errorMessage =
              err instanceof Error ? err.message : 'Login failed';
            Alert.alert('API Error', errorMessage);
          },
        }
      );
    } catch {
      Alert.alert('Error', 'An error occurred during sign in');
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoComplete="username"
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoComplete="password"
        />
        <Button title="Login" onPress={handleSignIn} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
