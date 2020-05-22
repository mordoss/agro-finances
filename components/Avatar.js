import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Block from './Block';
import Text from './Text';
import { theme } from '../theme';

const { colors, sizes } = theme;

const Avatar = ({ name, position, email, img }) => {
  return (
    <Block row card center flex={false} style={styles.container}>
      <Image source={img} style={{ width: 50, height: 50, borderRadius: 50 }} />
      <Block style={styles.textContainer}>
        <Text title gray bold style={styles.text}>
          {name}
        </Text>
        <Text body gray style={styles.text}>
          {position}
        </Text>
        <Text caption gray style={styles.text}>
          {email}
        </Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: sizes.base / 2,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    padding: sizes.base,
  },
  textContainer: {
    marginLeft: sizes.base,
  },
  button: {
    margin: sizes.base,
  },
});

export default Avatar;
