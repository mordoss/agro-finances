import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Button, Picker } from '../../components';
import ExtraCount from './ExtraCount';
import { changeSprayerOrFertilizer } from '../../redux/actions/specialActions';
import { calcSprayerBottles } from '../../calcFunctions';
import { theme } from '../../theme';

const SprayingSegment = ({
  field,
  sprayingData,
  actionArgumentObject,
  place,
  iupac
}) => {
  const area = useSelector(state => state.fields[field].area);
  const sprayerSelected = sprayingData[`sprayer${place}`];
  const consumption = useSelector(state =>
    sprayerSelected ? state.products.sprayer[sprayerSelected][2] : null
  );

  const { bottles, extraArea } = calcSprayerBottles(
    area,
    sprayerSelected,
    true,
    consumption
  );
  const sprayers = useSelector(state =>
    Object.entries(state.products.sprayer)
      .filter(el => el[1][3] === iupac)
      .map(el => el[0])
  );
  return (
    <Block style={{ marginVertical: theme.sizes.base }}>
      <Picker
        items={sprayers}
        label="Izbor herbicida"
        active={sprayerSelected}
        action={changeSprayerOrFertilizer}
        actionArgumentObject={{
          ...actionArgumentObject,
          workState: 'sprayingState',
          propertyName: `sprayer${place}`
        }}
      />
      {sprayerSelected !== '' && (
        <Button
          product={sprayerSelected}
          group="sprayer"
          label="Više u proizvodu"
        />
      )}

      <ExtraCount count={bottles} extraArea={extraArea} packaging="flaša" />
    </Block>
  );
};

export default SprayingSegment;
