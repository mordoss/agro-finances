import React, { useState } from 'react';
import { StyleSheet, Switch, LayoutAnimation, UIManager } from 'react-native';
import { Block, Text } from '../../components';
import Chart from './Chart';
import { theme } from '../../theme';

const StatisticsCard = ({ label, data }) => {
  const [expanded, setExpanded] = useState(false);
  const { oilConsumption, oilPrice, paid, seed, fertilizer, sprayer, total } = data;
  const changeLayout = () => {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <Block card color={theme.colors.white} style={styles.container}>
      <Text gray title medium center style={styles.title}>
        {label}
      </Text>
      <Block row space="around" style={styles.columns}>
        <Block flex={false}>
          <Text>Litara nafte: {Math.round(oilConsumption)}</Text>
          <Text>Uslužno: {paid}</Text>
          <Text>Prihrana: {fertilizer}</Text>
        </Block>
        <Block flex={false}>
          <Text>Nafta: {Math.round(oilPrice)} </Text>
          <Text>Seme: {seed}</Text>
          <Text>Zaštita: {sprayer}</Text>
        </Block>
      </Block>
      <Block row space="around" style={styles.total}>
        <Switch value={expanded} onValueChange={changeLayout} />
        <Text gray h3 right>
          Ukupno: {Math.round(total)}
        </Text>
      </Block>
      <Chart expanded={expanded} />
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
  columns: {
    marginVertical: theme.sizes.base,
  },
  total: {
    borderTopColor: theme.colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default StatisticsCard;
