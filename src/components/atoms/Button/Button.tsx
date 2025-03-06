import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import Text from '../Text/Text';

import { createStyles } from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  leftIcon,
  style,
  ...props
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  console.log({ theme });

  const containerStyles = [
    styles.container,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    variant === 'primary' ? styles.textPrimary : styles.textSecondary,
    disabled && styles.textDisabled,
  ];

  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          color={
            variant === 'primary' ? theme.colors.text : theme.colors.primary
          }
        />
      );
    }

    return (
      <>
        {leftIcon && <Text style={styles.icon}>{leftIcon}</Text>}
        <Text style={textStyles}>{children}</Text>
      </>
    );
  };

  return (
    <TouchableOpacity
      style={containerStyles}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};
