import React from 'react';
import { Button } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Block, Picker, InputWithIncrementer } from '../../components';
import ExtraCount from './ExtraCount';
import {
  changeSeed,
  changeSeedConsumption,
  changeSeedConsumptionIncrementing,
} from '../../redux/actions/specialActions';
import { plantToIncrementerLabel } from '../../helperFunctions';
import { calcSowingBags } from '../../calcFunctions';

const Sowing = ({ sowingData, field, plant }) => {
  const navigation = useNavigation();
  const { seed, seedConsumption } = sowingData;
  const { area } = useSelector(state => state[field]);
  const seeds = useSelector(state =>
    Object.entries(state.products.seed)
      .filter(el => el[1][1] === plant)
      .map(el => el[0])
  );
  const { bags, extraArea } = calcSowingBags(area, seedConsumption, plant);

  return (
    <Block>
      <Picker
        items={seeds}
        label="Izbor semena"
        action={changeSeed}
        active={seed}
        actionArgumentObject={{
          field,
        }}
      />
      {seed !== '' && (
        <Button
          title="O proizvodu"
          onPress={() =>
            navigation.navigate('ProductInfoScreen', {
              group: 'seed',
              product: seed,
            })
          }
        />
      )}
      <InputWithIncrementer
        label={plantToIncrementerLabel(plant)}
        action={changeSeedConsumption}
        actionIncrementing={changeSeedConsumptionIncrementing}
        actionArgumentObject={{
          field,
          value: String(seedConsumption),
        }}
      />
      <ExtraCount count={bags} extraArea={extraArea} packaging="vreća" />
    </Block>
  );
};

export default Sowing;
