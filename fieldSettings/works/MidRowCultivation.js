import React from 'react';
import { StyleSheet } from 'react-native';
import { Switch, Block } from '../../components';
import FertilizationSegment from './FertilizationSegment';
import { changeWithFertilization } from '../../redux/actions/specialActions';
import { theme } from '../../theme';

const MidRowCultivation = ({ midRowCultivationData, field, turn, plant }) => {
  const { withFertilization } = midRowCultivationData;

  return (
    <>
      <Block style={styles.switch}>
        <Switch
          label="Sa prihranom"
          action={changeWithFertilization}
          actionArgumentObject={{ value: withFertilization, field, turn }}
          withAnimation
        />
      </Block>
      <Block style={{ height: withFertilization ? null : 0, overflow: 'hidden' }}>
        <FertilizationSegment
          field={field}
          fertilizationData={midRowCultivationData}
          actionArgumentObject={{ field, turn }}
          place=""
          midRow
          plant={plant}
        />
      </Block>
    </>
  );
};

const styles = StyleSheet.create({
  switch: {
    marginVertical: theme.sizes.base,
    borderTopColor: theme.colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: theme.sizes.base,
    paddingBottom: theme.sizes.base,
  },
});

export default MidRowCultivation;
