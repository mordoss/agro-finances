import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import AllFieldsScreen from '../screens/AllFieldsScreen';
import FieldSettingsScreen from '../screens/FieldSettingsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { theme } from '../theme';

const screens = createStackNavigator(
  {
    FieldSettingsScreen,
    AllFieldsScreen,
    CalendarScreen,
    SettingsScreen,
  },
  {
    initialRouteName: 'FieldSettingsScreen',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
      },
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
