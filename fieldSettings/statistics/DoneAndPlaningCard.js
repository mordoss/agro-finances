import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../../components';
import { theme } from '../../theme';

const DoneAndPlaningCard = ({ label, data }) => {
  const { oilConsumption, paid, seed, fertilizer, sprayer } = data;
  return (
    <Block card color={theme.colors.white} style={styles.container}>
      <Text>{label}</Text>
      <Text>Litara nafte: {Math.round(oilConsumption)}</Text>
      <Text>Nafta: {oilConsumption * 150} </Text>
      <Text>Uslužno: {paid}</Text>
      <Text>Seme: {seed}</Text>
      <Text>Prihrana: {fertilizer}</Text>
      <Text>Zaštita: {sprayer}</Text>
      <Text>Ukupno: {oilConsumption * 150 + paid}</Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.sizes.base,
    marginTop: theme.sizes.base,
  },
});

export default DoneAndPlaningCard;
