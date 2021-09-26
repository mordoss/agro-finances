import React from 'react';
import { StyleSheet } from 'react-native';

import { Block } from '../components';
import SettingsCard from '../settings/SettingsCard';
import { colors, sizes } from '../theme/theme';

const screens = [
  {
    screenName: 'InfoScreen',
    text: 'Dodatne informacije'
  },
  {
    screenName: 'PricesScreen',
    text: 'Cene'
  },
  {
    screenName: 'signout',
    text: 'Odjavi se'
  }
];

const SettingsScreen = () => {
  return (
    <Block color={colors.backgorund} style={styles.container}>
      {screens.map((screen, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <SettingsCard screen={screen} key={i} />
      ))}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: sizes.base
  }
});

export default SettingsScreen;
