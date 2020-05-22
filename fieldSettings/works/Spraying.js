import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Switch } from '../../components';
import SprayingSegment from './SprayingSegment';
import { changeSprayerActive } from '../../redux/actions/specialActions';
import { spraying } from '../../assets/works';

import { theme } from '../../theme';

const Spraying = ({ sprayingData, field, turn, plant }) => {
  const { sprayer1Active, sprayer2Active, sprayer3Active } = sprayingData;
  const { sprayers } = spraying[plant][turn];
  const activeSprayersArray = [sprayer1Active, sprayer2Active, sprayer3Active];

  return (
    <>
      {sprayers.map((sprayer, index) => (
        <Block key={sprayer.iupac} style={styles.segment}>
          <Switch
            withAnimation
            label={sprayer.iupac}
            action={changeSprayerActive}
            actionArgumentObject={{
              field,
              turn,
              value: activeSprayersArray[index],
              place: index + 1,
            }}
          />
          <Block style={{ height: activeSprayersArray[index] ? null : 0, overflow: 'hidden' }}>
            <SprayingSegment
              sprayingData={sprayingData}
              actionArgumentObject={{ field, turn }}
              place={index + 1}
              field={field}
              plant={plant}
              iupac={sprayer.iupac}
            />
          </Block>
        </Block>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  segment: {
    borderTopColor: theme.colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: theme.sizes.base,
    paddingBottom: theme.sizes.base,
  },
});

export default Spraying;
