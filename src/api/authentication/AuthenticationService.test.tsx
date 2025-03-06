import { SignInPayload } from '../../types/authentication';
import axios from '../axiosInstance';

import AuthenticationService from './AuthenticationService';

jest.mock('../axiosInstance', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    post: jest.fn(),
  })),
}));

describe('AuthenticationService', () => {
  const mockPayload: SignInPayload = {
    username: 'testuser',
    password: 'testpass',
    groupname: 'testgroup',
  };

  const mockResponse = {
    data: { token: 'mock-token-123' },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('signIn', () => {
    it('should call the API with the correct parameters', async () => {
      const mockAxiosInstance = axios as jest.Mock;
      const mockPost = jest.fn().mockResolvedValue(mockResponse);
      mockAxiosInstance.mockReturnValue({ post: mockPost });

      await AuthenticationService.signIn(mockPayload);

      expect(mockPost).toHaveBeenCalledWith(
        'api/v1/portal/pages/home-without-session/get-token',
        {
          username: mockPayload.username,
          password: mockPayload.password,
          groupname: mockPayload.groupname,
        }
      );
    });

    it('should return the token when authentication is successful', async () => {
      const mockAxiosInstance = axios as jest.Mock;
      const mockPost = jest.fn().mockResolvedValue(mockResponse);
      mockAxiosInstance.mockReturnValue({ post: mockPost });

      const response = await AuthenticationService.signIn(mockPayload);

      expect(response).toEqual(mockResponse);
      expect(response.data.token).toBe('mock-token-123');
    });

    it('should handle API errors correctly', async () => {
      const mockError = new Error('Authentication error');
      const mockAxiosInstance = axios as jest.Mock;
      const mockPost = jest.fn().mockRejectedValue(mockError);
      mockAxiosInstance.mockReturnValue({ post: mockPost });

      await expect(AuthenticationService.signIn(mockPayload)).rejects.toThrow(
        'Authentication error'
      );
    });
  });
});
