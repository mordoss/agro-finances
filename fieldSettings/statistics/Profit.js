import React from 'react';
import { Switch, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import useAnimatedExpand from '../../hooks/useAnimatedExpand';
import {
  changeYield,
  changeProductPrice
} from '../../redux/actions/basicStateActions';
import { Block, Text, Input } from '../../components';
import Chart from './BarChart';
import { theme } from '../../theme';

const { colors, sizes } = theme;

const Profit = ({ invested }) => {
  const field = useSelector(state => state.activeField);
  const { area, yieldPerHa, productPrice } = useSelector(
    state => state.fields[field]
  );
  const { expanded, changeLayout } = useAnimatedExpand();

  const income = (area / 100) * productPrice * yieldPerHa;
  const profit = income - invested;

  return (
    <Block card color={colors.white} style={styles.container}>
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
        <Text gray bold style={{ marginTop: sizes.base / 2 }}>
          Potencijalni prihod: {Math.round(income)} din.
        </Text>
      </Block>
      <Chart
        expanded={expanded}
        income={income || 0}
        invested={invested || 0}
      />
      <Block row space="around" style={styles.total}>
        <Block row style={styles.chartSwitch}>
          <Switch value={expanded} onValueChange={changeLayout} />
          <Text gray>Grafik </Text>
        </Block>
        <Text gray h3 right bold>
          Zarada: {Math.round(profit)} din.
        </Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sizes.base,
    marginTop: sizes.base
  },
  title: {
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: sizes.base
  },
  content: {
    marginVertical: sizes.base
  },
  total: {
    borderTopColor: colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: sizes.base
  },
  chartSwitch: {
    alignItems: 'center'
  }
});

export default Profit;
