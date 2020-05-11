import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Picker, InputWithIncrementer } from '../../components';
import ExtraCount from './ExtraCount';
import {
  changeSeed,
  changeSeedConsumption,
  changeSeedConsumptionIncrementing,
} from '../../redux/actions/specialActions';
import { calcSowingBags } from '../../calcFunctions';

const Sowing = ({ sowingData, field }) => {
  const { seed, seedConsumption } = sowingData;
  const area = useSelector(state => state[field].area);

  const { bags, extraArea } = calcSowingBags(area, seedConsumption);

  return (
    <Block>
      <Picker
        items={['Seme jeftinije', 'Seme srednje', 'Seme skuplje']}
        label="Izbor semena"
        action={changeSeed}
        active={seed}
        actionArgumentObject={{
          field,
        }}
      />
      <InputWithIncrementer
        label="Gustina: "
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
