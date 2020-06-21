import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Text } from '../components';
import { productGroupStringToImage } from '../helperFunctions';
import { theme } from '../theme';

const { sizes, colors } = theme;

const ProductInfoScreen = ({ route }) => {
  const { product, group } = route.params;
  return (
    <Block style={styles.container} center>
      <Text bold title gray>
        {product}
      </Text>
      <Image source={productGroupStringToImage(group)} style={styles.image} />
      <Block card style={styles.info}>
        <Text gray>
          Informacije o proizvodu sa fotagrafijom, karakteristikima i preporukom proizvođača za
          korišćenje.
        </Text>
      </Block>
    </Block>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizes.base * 2,
    backgroundColor: colors.backgorund,
  },
  image: { marginVertical: sizes.base * 2, borderRadius: sizes.radius },
  info: {
    marginHorizontal: sizes.base * 2,
    backgroundColor: colors.white,
  },
});
