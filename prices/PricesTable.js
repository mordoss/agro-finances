import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Input } from '../components';
import { theme } from '../theme';

const PricesTable = ({ expanded, field, label }) => {
  const plant = useSelector(state => state[field].plant);
  const products = useSelector(state => Object.entries(state.prices[plant][label]));

  return (
    <View style={{ height: expanded ? null : 0, overflow: 'hidden' }}>
      {products.map(product => (
        <Input label={product[0]} value={`${product[1]}`} style={styles.input} />
      ))}
    </View>
  );
};

export default PricesTable;

const styles = StyleSheet.create({
  input: {
    marginVertical: theme.sizes.base,
  },
});
