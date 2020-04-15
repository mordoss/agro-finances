import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Picker, Text } from '../../components';
import ExtraCount from './ExtraCount';
import { changeSprayerOrFertilizer } from '../../redux/actions/specialActions';
import { calcSprayerBottles } from '../../calcFunctions';
import { theme } from '../../theme';

const SprayingSegment = ({ field, sprayingData, actionArgumentObject, place, sprayer }) => {
  const area = useSelector(state => state[field].area);
  const sprayerSelected = sprayingData[`sprayer${place}`];
  const { bottles, extraArea } = calcSprayerBottles(area, sprayerSelected, true);

  return (
    <Block style={{ marginVertical: theme.sizes.base }}>
      <Picker
        items={[sprayer.iupac]}
        label="Izbor herbicida"
        active={sprayerSelected}
        action={changeSprayerOrFertilizer}
        actionArgumentObject={{
          ...actionArgumentObject,
          workState: 'sprayingState',
          propertyName: `sprayer${place}`,
        }}
      />
      {sprayer !== '' && <ExtraCount count={bottles} extraArea={extraArea} packaging="flaša" />}
    </Block>
  );
};

export default SprayingSegment;
