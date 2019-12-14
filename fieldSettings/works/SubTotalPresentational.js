import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../../components';
import { theme } from '../../theme';

const SubTotalPresentational = ({
  paid,
  paidPricePerWork,
  oilConsumptionPerWork,
  oilConsumptionPricePerWork,
  specialPricePerWork,
  total,
}) => {
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

      {specialPricePerWork !== 0 && (
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
  total: {
    borderTopWidth: 2,
  },
});

export default SubTotalPresentational;
