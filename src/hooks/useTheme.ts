import { useTheme as useNavigationTheme } from '@react-navigation/native';

import { AppTheme } from '@/src/theme/colors';

export const useTheme = () => {
  return useNavigationTheme() as AppTheme;
};
