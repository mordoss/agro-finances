import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { changeYield, changeProductPrice } from '../../redux/actions/basicStateActions';
import { Block, Text, Input } from '../../components';
import { theme } from '../../theme';

const Profit = ({ invested }) => {
  const field = useSelector(state => `field${state.activeField}`);
  const { area, yieldPerHa, productPrice } = useSelector(state => state[field]);

  const income = (area / 100) * productPrice * yieldPerHa;
  const profit = income - invested;

  return (
    <Block card color={theme.colors.white} style={styles.container}>
      <Text gray title medium center style={styles.title}>
        Zarada
      </Text>
      <Block style={styles.content}>
        <Input
          value={String(yieldPerHa)}
          action={changeYield}
          actionArgumentObject={{ field }}
          unit="kg"
          label="Očekivan prinos po ha: "
        />
        <Input
          value={String(productPrice)}
          action={changeProductPrice}
          actionArgumentObject={{ field }}
          unit="dinara"
          label="Cena kilograma: "
        />
        <Text>Potencijalni prihod: {income} din.</Text>
      </Block>
      <Text gray h3 right style={styles.total}>
        Zarada: {profit} din.
      </Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.sizes.base,
    marginTop: theme.sizes.base,
  },
  title: {
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  content: {
    marginVertical: theme.sizes.base,
  },
  total: {
    borderTopColor: theme.colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default Profit;
