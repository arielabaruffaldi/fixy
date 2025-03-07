import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

import { lightTheme, darkTheme, AppTheme } from '@/src/theme/colors';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  theme: ThemeMode;
  themeObject: AppTheme;
  toggleTheme: () => void;
  initTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  themeObject: lightTheme,
  toggleTheme: async () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      const newThemeObject = newTheme === 'dark' ? darkTheme : lightTheme;
      AsyncStorage.setItem('theme', newTheme);
      return { theme: newTheme, themeObject: newThemeObject };
    });
  },
  initTheme: async () => {
    const savedTheme = await AsyncStorage.getItem('theme');
    if (savedTheme) {
      set({
        theme: savedTheme as ThemeMode,
        themeObject: savedTheme === 'dark' ? darkTheme : lightTheme,
      });
    }
  },
}));
