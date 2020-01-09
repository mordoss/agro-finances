import React from 'react';
import { Switch, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import useAnimatedExpand from '../../hooks/useAnimatedExpand';
import { changeYield, changeProductPrice } from '../../redux/actions/basicStateActions';
import { Block, Text, Input } from '../../components';
import Chart from './BarChart';
import { theme } from '../../theme';

const Profit = ({ invested }) => {
  const field = useSelector(state => `field${state.activeField}`);
  const { area, yieldPerHa, productPrice } = useSelector(state => state[field]);
  const { expanded, changeLayout } = useAnimatedExpand();

  const income = (area / 100) * productPrice * yieldPerHa;
  const profit = income - invested;

  return (
    <Block card color={theme.colors.white} style={styles.container}>
      <Text gray title bold center style={styles.title}>
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
        <Text gray bold style={{ marginTop: theme.sizes.base / 2 }}>
          Potencijalni prihod: {income} din.
        </Text>
      </Block>
      <Chart expanded={expanded} income={income || 0} invested={invested || 0} />
      <Block row space="around" style={styles.total}>
        <Block row style={styles.chartSwitch}>
          <Switch value={expanded} onValueChange={changeLayout} />
          <Text gray>Grafik </Text>
        </Block>
        <Text gray h3 right bold>
          Zarada: {profit} din.
        </Text>
      </Block>
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
    paddingBottom: theme.sizes.base,
  },
  content: {
    marginVertical: theme.sizes.base,
  },
  total: {
    borderTopColor: theme.colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: theme.sizes.base,
  },
  chartSwitch: {
    alignItems: 'center',
  },
});

export default Profit;
