/* eslint-disable global-require */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

import { useSelector } from 'react-redux';
import { HeaderIcon, Text } from '../components';
import AllFieldsScreen from '../screens/AllFieldsScreen';
import FieldSettingsScreen from '../screens/FieldSettingsScreen';
import PricesScreen from '../screens/PricesScreen';
import InfoScreen from '../screens/InfoScreen';
import ProductInfoScreen from '../screens/ProductInfoScreen';
import Login from '../screens/AuthScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { theme } from '../theme';

const Stack = createStackNavigator();

function App() {
  const { auth } = useSelector(state => state);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#FFFFFF',
          headerBackground: () => (
            <LinearGradient
              colors={[theme.colors.primary, theme.colors.secondary]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
          )
        }}
      >
        {auth.isSigned ? (
          <>
            <Stack.Screen
              name="AllFieldsScreen"
              component={AllFieldsScreen}
              options={({ navigation }) => ({
                headerTitle: () => null,
                headerRight: () => (
                  <HeaderIcon
                    imageSource={require('../assets/icons/settings.svg.png')}
                    position="Right"
                    label="Podesavanja"
                    navigate={navigation.navigate}
                    location="SettingsScreen"
                  />
                )
              })}
            />
            <Stack.Screen
              name="FieldSettingsScreen"
              component={FieldSettingsScreen}
              options={() => ({
                headerTitle: () => null,
                headerRight: () => (
                  <HeaderIcon
                    imageSource={require('../assets/icons/settings.svg.png')}
                    position="Right"
                    label="Podešavanja"
                    location="SettingsScreen"
                  />
                )
              })}
            />

            <Stack.Screen
              name="SettingsScreen"
              component={SettingsScreen}
              options={() => ({
                headerTitle: () => <Text white>Podešavanja</Text>
              })}
            />
            <Stack.Screen
              name="InfoScreen"
              component={InfoScreen}
              options={() => ({
                headerTitle: () => null
              })}
            />
            <Stack.Screen
              name="PricesScreen"
              component={PricesScreen}
              options={() => ({
                headerTitle: () => null
              })}
            />
            <Stack.Screen
              name="ProductInfoScreen"
              component={ProductInfoScreen}
              options={() => ({
                headerTitle: () => null
              })}
            />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={() => ({
              headerTitle: () => (
                <Text h1 white>
                  Prijava
                </Text>
              )
            })}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
