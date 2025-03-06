import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
    },
    disabled: {
      opacity: 0.5,
    },
    icon: {
      marginRight: spacing.xs,
    },
    large: {
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
    },
    medium: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
    // eslint-disable-next-line react-native/no-color-literals
    secondary: {
      backgroundColor: 'transparent',
      borderColor: theme.colors.primary,
      borderWidth: 1,
    },
    small: {
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
    },
    text: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.md,
      textAlign: 'center',
    },
    textDisabled: {
      color: theme.colors.border,
    },
    textPrimary: {
      color: theme.colors.notification,
    },
    textSecondary: {
      color: theme.colors.primary,
    },
  });
