import React from 'react';
import { Switch, StyleSheet } from 'react-native';
import useAnimatedExpand from '../../hooks/useAnimatedExpand';
import { Block, Text } from '../../components';
// import Chart from './PieChart';
import { theme } from '../../theme';

const { colors, sizes } = theme;

const StatisticsCard = ({ label, data }) => {
  const {
    oilConsumption,
    oilPrice,
    paid,
    seed,
    fertilizer,
    sprayer,
    rented,
    total
  } = data;
  const { expanded, changeLayout } = useAnimatedExpand();

  return (
    <Block card color={colors.white} style={styles.container}>
      <Text gray title bold center style={styles.title}>
        {label}
      </Text>
      <Block row space="between" style={styles.columns}>
        <Block flex={false}>
          <Text gray>Litara nafte: {Math.round(oilConsumption)}</Text>
          <Text gray>Uslužno: {paid}</Text>
          <Text gray>Prihrana: {fertilizer}</Text>
          {rented > 0 && <Text gray>Zakup: {rented}</Text>}
        </Block>
        <Block flex={false}>
          <Text gray>Nafta: {Math.round(oilPrice)} </Text>
          <Text gray>Seme: {seed}</Text>
          <Text gray>Zaštita: {sprayer}</Text>
        </Block>
      </Block>
      {/*  <Chart
        expanded={expanded}
        seed={seed}
        paid={paid}
        sprayer={sprayer}
        oil={oilPrice}
        fertilizer={fertilizer}
        rented={rented}
      /> */}
      <Block row space="around" style={styles.total}>
        <Block row style={styles.chartSwitch}>
          <Switch value={expanded} onValueChange={changeLayout} />
          <Text gray>Grafik </Text>
        </Block>
        <Text gray h3 right>
          Ukupno: {Math.round(total)}
        </Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sizes.base,
    marginTop: sizes.base,
    paddingHorizontal: sizes.base * 2
  },
  title: {
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: sizes.base
  },
  columns: {
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

export default StatisticsCard;
