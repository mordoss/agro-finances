import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Picker, Text } from '../../components';
import ExtraCount from './ExtraCount';
import { changeSprayerOrFertilizer } from '../../redux/actions/specialActions';
import { calcSprayerBottles } from '../../calcFunctions';
import { theme } from '../../theme';

const SprayingSegment = ({ field, sprayingData, actionArgumentObject, place, iupacs }) => {
  const area = useSelector(state => state[field].area);
  const sprayer = sprayingData[`sprayer${place}`];
  const { bottles, extraArea } = calcSprayerBottles(area, sprayer);

  return (
    <Block style={{ marginVertical: theme.sizes.base }}>
      <Text>{iupacs.name}</Text>
      <Text>{iupacs.purpose}</Text>
      <Picker
        items={iupacs.sprayers}
        label="Izbor herbicida"
        active={sprayer}
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
