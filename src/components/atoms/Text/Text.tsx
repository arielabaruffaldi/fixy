import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
  Text as RNText,
  StyleProp,
  TextStyle,
  TextProps as RNTextProps,
} from 'react-native';

import { AppTheme } from '@/src/theme/colors';

import { typography } from '../../../theme/typography';

import { createStyles } from './styles';

type FontType = 'primary';

type FontWeight = 'light' | 'regular' | 'medium' | 'bold';

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  size?: 'small' | 'medium' | 'large' | 'xsmall';
  weight?: FontWeight;
  color?: keyof AppTheme['colors'];
  align?: 'left' | 'center' | 'right';
  font?: FontType;
}

const Text: React.FC<TextProps> = ({
  children,
  style,
  size = 'medium',
  weight = 'regular',
  color,
  align = 'left',
  ...props
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const getFontFamily = (weight: FontWeight) => {
    return typography.fontWeight[weight];
  };

  const textStyle = [
    styles.base,
    styles[size],
    styles[weight],
    styles[align],
    { color: theme.colors[(color as keyof typeof theme.colors) || 'text'] },
    { fontFamily: getFontFamily(weight) },
    style,
  ];

  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
