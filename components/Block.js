import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../theme';

const { colors, sizes } = theme;

const Block = props => {
  const {
    flex,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    color,
    space,
    wrap,
    style,
    children
  } = props;

  const blockStyles = [
    styles.block,
    flex && { flex },
    flex === false && { flex: 0 }, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    card && styles.card,
    space && { justifyContent: `space-${space}` },
    wrap && { flexWrap: 'wrap' },
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style // rewrite predefined styles
  ];

  return <View style={blockStyles}>{children}</View>;
};

export default Block;

export const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  card: {
    borderRadius: sizes.radius,
    padding: sizes.base,
    marginBottom: sizes.base,
    elevation: 10
  },
  center: {
    alignItems: 'center'
  },
  middle: {
    justifyContent: 'center'
  },
  left: {
    justifyContent: 'flex-start'
  },
  right: {
    justifyContent: 'flex-end'
  },
  top: {
    justifyContent: 'flex-start'
  },
  bottom: {
    justifyContent: 'flex-end'
  },

  accent: { backgroundColor: colors.accent },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.secondary },
  tertiary: { backgroundColor: colors.tertiary },
  black: { backgroundColor: colors.black },
  white: { backgroundColor: colors.white },
  gray: { backgroundColor: colors.gray },
  gray2: { backgroundColor: colors.gray2 }
});
