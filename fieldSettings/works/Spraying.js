import React from 'react';
import { changeSprayerOrFertilizer, changeMixed } from '../../redux/actions/specialActions';
import { Block, Picker, Input, Text, Switch } from '../../components';

const Spraying = props => {
  const { sprayingData, field, turn } = props;
  return (
    <Block>
      <Picker
        items={['Glifosav', 'Monsun', 'Nikosav']}
        label="Izbor herbicida"
        active={sprayingData.sprayer1}
        propertyName="sprayer1"
        work="sprayingState"
        turn={turn}
        action={changeSprayerOrFertilizer}
        field={field}
      />
      <Switch
        label="Mešam sa još jednim herbicidom"
        value={sprayingData.mixed}
        field={field}
        turn={turn}
        propertyName="sprayingState"
        action={changeMixed}
      />
      {sprayingData.mixed && (
        <>
          <Picker
            items={['Glifosav', 'Monsun', 'Nikosav']}
            label="Izbor herbicida"
            active={sprayingData.sprayer2}
            propertyName="sprayer2"
            work="sprayingState"
            turn={turn}
            action={changeSprayerOrFertilizer}
            field={field}
          />
          <Input bags label="Potrebno Vam je: " />
          <Text gray>Ostaje Vam za ___ ara.</Text>
        </>
      )}
    </Block>
  );
};

export default Spraying;
