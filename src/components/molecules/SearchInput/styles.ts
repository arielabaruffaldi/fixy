import { StyleSheet } from 'react-native';

import { AppTheme, radius, typography } from '@/src/theme/theme';
import { normalize } from '@/src/utils/normalizeText';

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.colors.card,
      borderRadius: radius.xl,
      elevation: 5,
      flexDirection: 'row',
      height: normalize(50),
      paddingHorizontal: 12,
      // shadowColor: theme.colors.shadowColor,
      // shadowOffset: {
      //   width: 0,
      //   height: 1,
      // },
      // shadowOpacity: 0.1,
      // shadowRadius: 3,
    },
    iconContainer: {
      marginLeft: 8,
    },
    input: {
      color: theme.colors.secondaryText,
      flex: 1,
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.md,
      paddingLeft: normalize(10),
    },
  });
