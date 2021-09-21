import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const { colors, sizes } = theme;

const Button = ({ product, group, label }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProductInfoScreen', {
      group,
      product
    });
  };

  return (
    <Block row center>
      <TouchableHighlight
        onPress={() => handlePress(product)}
        style={styles.button}
      >
        <Text white center>
          {label}
        </Text>
      </TouchableHighlight>
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: sizes.base / 2,
    elevation: 3,
    backgroundColor: colors.blue,
    marginTop: sizes.base
  }
});

export default Button;
