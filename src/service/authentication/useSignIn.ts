import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useMutation } from 'react-query';

import AuthenticationService from '../../api/authentication/AuthenticationService';
import { SignInPayload } from '../../types/authentication';

const useSignIn = () => {
  const { setItem } = useAsyncStorage('@auth_token');
  const signInService = async (data: SignInPayload) => {
    const response = await AuthenticationService.signIn(data);

    if (response.data.access_token) {
      await setItem(response.data.access_token);
    }

    return response.data;
  };

  return useMutation(signInService);
};

export { useSignIn };
