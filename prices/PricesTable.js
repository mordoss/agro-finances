import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Input } from '../components';
import { changePrice } from '../redux/actions/basicStateActions';

import { theme } from '../theme';

const PricesTable = ({ expanded, field, property }) => {
  const plant = useSelector(state => state[field].plant);
  const prices = useSelector(state => Object.entries(state.prices[property]));

  return (
    <View style={{ height: expanded ? null : 0, overflow: 'hidden' }}>
      {prices.map(product => (
        <Input
          key={product[0]}
          action={changePrice}
          actionArgumentObject={{ property, product: product[0] }}
          label={product[0]}
          value={`${product[1]}`}
          style={styles.input}
        />
      ))}
    </View>
  );
};

export default PricesTable;

const styles = StyleSheet.create({
  input: {
    marginVertical: theme.sizes.base / 2,
  },
});
