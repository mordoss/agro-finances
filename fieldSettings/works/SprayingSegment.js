import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Picker } from '../../components';
import ExtraCount from './ExtraCount';
import { changeSprayerOrFertilizer } from '../../redux/actions/specialActions';
import { calcSprayerBottles } from '../../calcFunctions';
import { theme } from '../../theme';

const SprayingSegment = ({ field, sprayingData, actionArgumentObject, place }) => {
  const area = useSelector(state => state[field].area);
  const { bottles, extraArea } = calcSprayerBottles(area, sprayingData[`sprayer${place}`]);

  return (
    <Block style={{ marginVertical: theme.sizes.base }}>
      <Picker
        items={['Glifosav', 'Monsun', 'Nikosav']}
        label="Izbor herbicida"
        active={sprayingData[`sprayer${place}`]}
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
