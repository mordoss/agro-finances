import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../../components';
import { theme } from '../../theme';

const SubTotalPresentational = ({
  label,
  paid,
  paidPrice,
  oilConsumption,
  oilConsumptionPrice,
  specialPrice,
  total,
}) => {
  return (
    <Block style={styles.container}>
      {paid ? (
        <Text gray light style={styles.item}>
          Za uslužno: {paidPrice} dinara.
        </Text>
      ) : (
        <>
          <Text gray light style={styles.item}>
            Litara nafte: {oilConsumption}.
          </Text>
          <Text gray light style={styles.item}>
            Za naftu: {oilConsumptionPrice} dinara.
          </Text>
        </>
      )}

      {label && (
        <Text gray light style={styles.item}>
          Za {label}: {specialPrice} dinara.
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
    borderTopColor: theme.colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default SubTotalPresentational;
