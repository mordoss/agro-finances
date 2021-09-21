import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Input } from '../components';
import { changePrice } from '../redux/actions/basicStateActions';

import { theme } from '../theme';

const PricesTable = ({ expanded, field, property }) => {
  const plant = useSelector(state => state.fields[field].plant);
  const products = useSelector(state =>
    Object.entries(state.products[property]).filter(
      el => el[1][1] && el[1][1].includes(plant)
    )
  );

  return (
    <View style={{ height: expanded ? null : 0, overflow: 'hidden' }}>
      {products.map(product => (
        <Input
          key={product[0]}
          action={changePrice}
          actionArgumentObject={{ property, product: product[0] }}
          label={product[0]}
          value={`${product[1][0]}`}
          style={styles.input}
        />
      ))}
    </View>
  );
};

export default PricesTable;

const styles = StyleSheet.create({
  input: {
    marginVertical: theme.sizes.base / 2
  }
});
