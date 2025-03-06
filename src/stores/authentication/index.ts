import { create } from 'zustand';

interface AuthenticationStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useAuthenticationStore = create<AuthenticationStore>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
}));

//handlers
export const setIsAuthenticatedHandler = (state: AuthenticationStore) =>
  state.setIsAuthenticated;

//selectors
export const isAuthenticatedSelector = (state: AuthenticationStore) =>
  state.isAuthenticated;
