// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

import FieldSettings from '../fieldSettings/FieldSettings';

import { theme } from '../theme';

const screens = createStackNavigator(
  {
    FieldSettings,
  },
  {
    defaultNavigationOptions: {
      headerBackground: (
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.secondary]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ),
    },
  }
);

export default createAppContainer(screens);
