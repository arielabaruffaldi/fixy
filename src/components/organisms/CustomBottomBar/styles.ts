/* eslint-disable react-native/sort-styles */
import { Dimensions, StyleSheet } from 'react-native';

import { AppTheme } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';
import { normalize } from '@/src/utils/normalizeText';

const width = Dimensions.get('window').width;

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    // container: {
    //   backgroundColor: theme.colors.tabBarBackground,
    //   borderRadius: 20,
    //   height: 120,
    //   paddingHorizontal: spacing.md,
    //   paddingVertical: spacing.md,
    //   position: 'absolute',
    //   bottom: spacing.md,
    //   left: spacing.md,
    //   right: spacing.md,
    //   marginHorizontal: spacing.md,
    //   marginBottom: spacing.md,
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'space-around',
    // },
    container: {
      flexDirection: 'row',
      height: normalize(94),
      backgroundColor: theme.colors.card,
      paddingHorizontal: normalize(10),
      borderTopLeftRadius: normalize(30),
      borderTopRightRadius: normalize(30),
      shadowColor: theme.colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      //   bottom: 30,
      //   left: 20,
      //   right: 20,
      //   position: 'absolute',
    },
    tab: {
      flex: 1,
      //   paddingTop: normalize(15),
    },
    tabView: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: spacing.md,
      borderRadius: normalize(4),
    },
    floatingTabContainer: {
      padding: normalize(20),
      position: 'absolute',
      top: -36,
      alignSelf: 'center',
      left: width / 2 - normalize(72) / 2,
      right: 0,
      height: normalize(72),
      width: normalize(72),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.card,
      borderBottomWidth: 0.5,
      borderLeftWidth: 0.5,
      borderColor: theme.colors.textDisabled,
      transform: [{ rotate: '315deg' }],
      borderRadius: normalize(72 / 2),
    },
    tabIconContainer: {
      marginTop: normalize(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabIcon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    floatingTab: {
      backgroundColor: theme.colors.primary,
      height: normalize(64),
      width: normalize(64),
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      transform: [{ rotate: '45deg' }],
      shadowColor: theme.colors.textDisabled,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 2,
    },
  });
