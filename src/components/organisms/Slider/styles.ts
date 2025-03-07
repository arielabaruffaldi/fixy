/* eslint-disable react-native/sort-styles */
import { Dimensions, StyleSheet } from 'react-native';

import { AppTheme } from '@/src/theme/colors';
import { radius } from '@/src/theme/radius';
import { spacing } from '@/src/theme/spacing';
import { normalize } from '@/src/utils/normalizeText';

const width = Dimensions.get('window').width;

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    imageContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: normalize(20),
      width: width,
    },
    image: {
      width: 300,
      height: 300,
      borderRadius: radius.xl,
      overflow: 'hidden',
    },
    gradient: {
      position: 'absolute',
      width: 300,
      height: 300,
      borderRadius: radius.xl,
      justifyContent: 'flex-end',
      padding: normalize(spacing.md),
    },
    titleContainer: {
      justifyContent: 'flex-end',
    },
  });
