import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text as RNText, StyleProp, TextStyle } from 'react-native';

import { typography } from '../../../theme/typography';

import { createStyles } from './styles';

import { AppTheme } from '@/src/theme/colors';

type FontType = 'primary';

type FontWeight = 'light' | 'regular' | 'medium' | 'bold';

interface TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  size?: 'small' | 'medium' | 'large';
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
  font = 'primary',
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const getFontFamily = (fontType: FontType) => {
    return typography.fontFamily[fontType];
  };

  console.log({ color });

  const textStyle = [
    styles.base,
    styles[size],
    styles[weight],
    styles[align],
    { color: theme.colors[(color as keyof typeof theme.colors) || 'text'] },
    { fontFamily: getFontFamily(font) },
    style,
  ];

  return <RNText style={textStyle}>{children}</RNText>;
};

export default Text;
