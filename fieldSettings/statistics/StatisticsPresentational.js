import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../../components';

const StatisticsPresentational = ({
  oilDoneConsumption,
  oilDonePrice,
  paidDonePrice,
  doneTotal,
  oilPlaningConsumption,
  oilPlaningPrice,
  paidPlaningPrice,
  planingTotal,
}) => {
  return (
    <Block row>
      <Block>
        <Text>Uradjeno</Text>
        <Text>Litara nafte: {oilDoneConsumption}</Text>
        <Text>Nafta: {oilDonePrice} </Text>
        <Text>Uslužno: {paidDonePrice}</Text>
        <Text>Ukupno: {doneTotal}</Text>
      </Block>
      <Block>
        <Text>Planirano</Text>
        <Text>Litara nafte: {oilPlaningConsumption}</Text>
        <Text>Nafta: {oilPlaningPrice} </Text>
        <Text>Uslužno: {paidPlaningPrice}</Text>
        <Text>Ukupno: {planingTotal}</Text>
      </Block>
    </Block>
  );
};

export default StatisticsPresentational;
