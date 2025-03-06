import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

export const lightColors = {
  ...DefaultTheme.colors,
  primary: '#1E90FF',
  background: '#FFFFFF',
  text: '#333333',
  card: '#F8F8F8',
  border: '#E0E0E0',
  notification: '#FFFFFF',
  primaryText: '#333333',
  secondaryText: '#666666',
  buttonBackground: '#1E90FF',
  buttonText: '#FFFFFF',
};

export const darkColors = {
  ...DarkTheme.colors,
  primary: '#1E90FF',
  background: '#121212',
  text: '#FFFFFF',
  card: '#1E1E1E',
  border: '#333333',
  notification: '#FFFFFF',
  primaryText: '#FFFFFF',
  secondaryText: '#BBBBBB',
  buttonBackground: '#1E90FF',
  buttonText: '#FFFFFF',
};

export type AppTheme = Theme & {
  colors: typeof lightColors;
};

export const lightTheme: AppTheme = { ...DefaultTheme, colors: lightColors };
export const darkTheme: AppTheme = { ...DarkTheme, colors: darkColors };
