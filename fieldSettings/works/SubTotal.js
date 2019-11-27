import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Block, Text } from '../../components';
import { calcSowing, calcSpraying, calcFertilization } from '../../calcFunctions';
import { theme } from '../../theme';

const SubTotal = ({ work, field, workName }) => {
  const { area } = useSelector(state => state[field]);
  const { seedConsumption } = useSelector(state => state[field].sowingState);
  const { first: firstSpraying, second: secondSpraying } = useSelector(
    state => state[field].sprayingState
  );
  const { first: firstFertilization, second: secondFertilization } = useSelector(
    state => state[field].fertilizationState
  );
  const { oilConsumption, paid, paidPrice } = work;

  const prices = {
    sowing: calcSowing(area, seedConsumption),
    fertilization1: calcFertilization(area, firstFertilization),
    spraying1: calcSpraying(area, firstSpraying),
    fertilization2: calcFertilization(area, secondFertilization),
    spraying2: calcSpraying(area, secondSpraying),
  };

  const oilConsumptionPerWork = paid ? 0 : Math.round((area / 100) * oilConsumption);
  const oilConsumptionPricePerWork = oilConsumptionPerWork * 150;
  const paidPricePerWork = paid ? (area / 100) * paidPrice : 0;
  const specialPricePerWork = prices[workName];

  const total = paidPricePerWork + oilConsumptionPricePerWork + (specialPricePerWork || 0);

  return (
    <Block style={styles.container}>
      {paid ? (
        <Text gray light style={styles.item}>
          Za uslužno: {paidPricePerWork} dinara.
        </Text>
      ) : (
        <>
          <Text gray light style={styles.item}>
            Litara nafte: {oilConsumptionPerWork}.
          </Text>
          <Text gray light style={styles.item}>
            Za naftu: {oilConsumptionPricePerWork} dinara.
          </Text>
        </>
      )}

      {specialPricePerWork && (
        <Text gray light style={styles.item}>
          Za ostalo: {specialPricePerWork} dinara.
        </Text>
      )}

      <Text gray title style={styles.total}>
        Ukupno: {total} dinara.
      </Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: theme.sizes.base,
    alignItems: 'flex-end',
  },
  item: {},
  total: {
    borderTopWidth: 2,
  },
});

export default SubTotal;
