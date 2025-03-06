import { act, renderHook } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import AuthenticationService from '../../api/authentication/AuthenticationService';
import { SignInPayload } from '../../types/authentication';

import { useSignIn } from './useSignIn';

// jest.mock('../../api/AuthenticationService');
jest.mock('../../api/authentication/AuthenticationService');

describe('useSignIn', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should sign in successfully', async () => {
    const mockResponse = { data: { token: 'fake-token' } };
    (AuthenticationService.signIn as jest.Mock).mockResolvedValueOnce(
      mockResponse
    );

    const { result } = renderHook(() => useSignIn(), { wrapper });

    const signInData: SignInPayload = {
      username: 'testuser',
      password: 'password123',
      groupname: 'testgroup',
    };

    await act(async () => {
      await result.current.mutateAsync(signInData);
    });

    expect(AuthenticationService.signIn).toHaveBeenCalledWith(signInData);
    expect(result.current.data).toEqual(mockResponse.data);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.isError).toBe(false);
  });
});
