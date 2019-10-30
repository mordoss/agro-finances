import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import FieldSettings from '../screens/FieldSettings';
import AllFields from '../screens/AllFields';
import { theme } from '../theme';

const screens = createStackNavigator(
  {
    FieldSettings,
    AllFields,
  },
  {
    initialRouteName: 'AllFields',
    defaultNavigationOptions: {
      headerBackground: (
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.secondary]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ),
      headerTintColor: '#FFFFFF',
    },
  }
);

export default createAppContainer(screens);
