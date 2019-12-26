import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../../components';
import { theme } from '../../theme';

const DoneAndPlaningCard = ({ label, data }) => {
  const { oilConsumption, oilPrice, paid, seed, fertilizer, sprayer, total } = data;
  return (
    <Block card color={theme.colors.white} style={styles.container}>
      <Text gray title medium center style={styles.title}>
        {label}
      </Text>
      <Text>Litara nafte: {Math.round(oilConsumption)}</Text>
      <Text>Nafta: {Math.round(oilPrice)} </Text>
      <Text>Uslužno: {paid}</Text>
      <Text>Seme: {seed}</Text>
      <Text>Prihrana: {fertilizer}</Text>
      <Text>Zaštita: {sprayer}</Text>
      <Text>Ukupno: {Math.round(total)}</Text>
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
});

export default DoneAndPlaningCard;
