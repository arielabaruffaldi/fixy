/* eslint-disable react-native/sort-styles */
import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { typography } from '../../../theme/typography';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    base: {
      color: theme.colors.text,
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.md,
    },
    center: {
      textAlign: 'center',
    },
    large: {
      fontSize: typography.fontSize.lg,
    },
    left: {
      textAlign: 'left',
    },
    light: {
      fontFamily: typography.fontWeight.light,
    },
    medium: {
      fontFamily: typography.fontWeight.medium,
    },
    regular: {
      fontFamily: typography.fontWeight.regular,
    },
    bold: {
      fontFamily: typography.fontWeight.bold,
    },
    right: {
      textAlign: 'right',
    },
    small: {
      fontSize: typography.fontSize.sm,
    },
    xsmall: {
      fontSize: typography.fontSize.xs,
    },
  });
