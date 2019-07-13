import React from 'react';
import { StyleSheet } from 'react-native';

import Block from './Block';
import { theme } from '../theme';

const Card = props => {
  const { color, style, children } = props;
  const cardStyles = [styles.card, style];

  return (
    <Block card color={color || theme.colors.white} {...props} style={cardStyles}>
      {children}
    </Block>
  );
};

export default Card;

export const styles = StyleSheet.create({
  card: {
    padding: theme.sizes.base,
    marginBottom: theme.sizes.base,
  },
});
