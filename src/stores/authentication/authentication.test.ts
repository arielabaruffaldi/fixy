import { act, renderHook } from '@testing-library/react-native';

import {
  useAuthenticationStore,
  isAuthenticatedSelector,
  setIsAuthenticatedHandler,
} from './index';

describe('Authentication Store', () => {
  beforeEach(() => {
    const store = useAuthenticationStore.getState();
    store.setIsAuthenticated(false);
  });

  describe('Initial State', () => {
    it('should initialize with isAuthenticated as false', () => {
      const { result } = renderHook(() => useAuthenticationStore());
      expect(result.current.isAuthenticated).toBe(false);
    });
  });

  describe('Handlers', () => {
    it('should update authentication state correctly', () => {
      const { result } = renderHook(() => useAuthenticationStore());

      act(() => {
        result.current.setIsAuthenticated(true);
      });

      expect(result.current.isAuthenticated).toBe(true);

      act(() => {
        result.current.setIsAuthenticated(false);
      });

      expect(result.current.isAuthenticated).toBe(false);
    });

    it('setIsAuthenticatedHandler should return the setter function', () => {
      const { result } = renderHook(() => useAuthenticationStore());
      const handler = setIsAuthenticatedHandler(result.current);

      expect(typeof handler).toBe('function');

      act(() => {
        handler(true);
      });

      expect(result.current.isAuthenticated).toBe(true);
    });
  });

  describe('Selectors', () => {
    it('isAuthenticatedSelector should return the current authentication state', () => {
      const { result } = renderHook(() => useAuthenticationStore());

      expect(isAuthenticatedSelector(result.current)).toBe(false);

      act(() => {
        result.current.setIsAuthenticated(true);
      });

      expect(isAuthenticatedSelector(result.current)).toBe(true);
    });
  });

  describe('Store Integration', () => {
    it('should maintain state consistency across multiple updates', () => {
      const { result } = renderHook(() => useAuthenticationStore());

      act(() => {
        result.current.setIsAuthenticated(true);
      });
      expect(result.current.isAuthenticated).toBe(true);

      act(() => {
        result.current.setIsAuthenticated(false);
      });
      expect(result.current.isAuthenticated).toBe(false);

      act(() => {
        result.current.setIsAuthenticated(true);
      });
      expect(result.current.isAuthenticated).toBe(true);
    });

    it('should update state correctly when using handlers', () => {
      const { result } = renderHook(() => useAuthenticationStore());
      const setAuthenticated = setIsAuthenticatedHandler(result.current);

      act(() => {
        setAuthenticated(true);
      });
      expect(result.current.isAuthenticated).toBe(true);

      act(() => {
        setAuthenticated(false);
      });
      expect(result.current.isAuthenticated).toBe(false);
    });
  });
});
