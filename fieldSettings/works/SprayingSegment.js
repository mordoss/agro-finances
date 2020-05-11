import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Picker } from '../../components';
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
        items={sprayer.sprayers}
        label="Izbor herbicida"
        active={sprayerSelected}
        action={changeSprayerOrFertilizer}
        actionArgumentObject={{
          ...actionArgumentObject,
          workState: 'sprayingState',
          propertyName: `sprayer${place}`,
        }}
      />
      <ExtraCount count={bottles} extraArea={extraArea} packaging="flaša" />
    </Block>
  );
};

export default SprayingSegment;
