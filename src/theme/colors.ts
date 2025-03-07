import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

export const lightColors = {
  ...DefaultTheme.colors,
  primary: '#1E90FF',
  primaryText: '#252932',
  secondaryText: '#898b90',

  background: '#f1f2f4',
  text: '#333333',
  card: '#FFFFFF',
  border: '#E0E0E0',
  notification: '#FFFFFF',
  buttonBackground: '#1E90FF',
  buttonText: '#FFFFFF',
  textDisabled: '#080809',
  tabBarBackground: '#FFFFFF',
  white: '#FFFFFF',

  shadowColor: '#000000',
};

export const darkColors = {
  ...DarkTheme.colors,
  primary: '#1E90FF',
  primaryText: '#FFFFFF',
  secondaryText: '#BBBBBB',

  background: '#121212',
  text: '#FFFFFF',
  card: '#1E1E1E',
  border: '#333333',
  notification: '#FFFFFF',
  buttonBackground: '#1E90FF',
  buttonText: '#FFFFFF',
  textDisabled: '#080809',
  white: '#FFFFFF',
  shadowColor: '#000000',
};

export type AppTheme = Theme & {
  colors: typeof lightColors;
};
export const lightTheme: AppTheme = { ...DefaultTheme, colors: lightColors };
export const darkTheme: AppTheme = { ...DarkTheme, colors: darkColors };
