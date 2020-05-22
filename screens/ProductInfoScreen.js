import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../components';

const ProductInfoScreen = ({ route }) => {
  const { product, group } = route.params;
  return (
    <Block style={styles.container}>
      <Text>{group}</Text>
      <Text>{product}</Text>
    </Block>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({ container: {} });
