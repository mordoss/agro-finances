import React from 'react';
import { StyleSheet } from 'react-native';
import Block from './Block';
import { theme } from '../theme';

const Badge = props => {
  const { children, style, size, color } = props;

  const badgeStyles = StyleSheet.flatten([
    styles.badge,
    size && {
      height: size,
      width: size,
      borderRadius: size,
    },
    style,
  ]);

  return (
    <Block flex={false} middle center color={color} {...props} style={badgeStyles}>
      {children}
    </Block>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.border,
  },
});
