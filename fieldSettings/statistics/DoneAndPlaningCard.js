import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../../components';
import { theme } from '../../theme';

const DoneAndPlaningCard = ({ label, oilConsumption, paidPrice, seedPrice }) => {
  return (
    <Block card color={theme.colors.white} style={styles.container}>
      <Text>{label}</Text>
      <Text>Litara nafte: {oilConsumption}</Text>
      <Text>Nafta: {oilConsumption * 150} </Text>
      <Text>Uslužno: {paidPrice}</Text>
      <Text>Seme: {seedPrice}</Text>
      <Text>Ukupno: {oilConsumption * 150 + paidPrice}</Text>
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
