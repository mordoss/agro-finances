/* eslint-disable global-require */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderIcon } from '../components';
import AllFieldsScreen from '../screens/AllFieldsScreen';
import FieldSettingsScreen from '../screens/FieldSettingsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import PricesScreen from '../screens/PricesScreen';
import InfoScreen from '../screens/InfoScreen';
import ProductInfoScreen from '../screens/ProductInfoScreen';
import { theme } from '../theme';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AllFieldsScreen"
        screenOptions={{
          headerTintColor: '#FFFFFF',
          headerBackground: () => (
            <LinearGradient
              colors={[theme.colors.primary, theme.colors.secondary]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
          ),
        }}
      >
        <Stack.Screen
          name="AllFieldsScreen"
          component={AllFieldsScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <HeaderIcon
                imageSource={require('../assets/icons/calendar.svg.png')}
                position="Left"
                label="Planer"
                navigate={navigation.navigate}
                location="CalendarScreen"
              />
            ),
            headerRight: () => (
              <HeaderIcon
                imageSource={require('../assets/icons/info.png')}
                position="Right"
                label="Info"
                navigate={navigation.navigate}
                location="InfoScreen"
              />
            ),
          })}
        />
        <Stack.Screen
          name="FieldSettingsScreen"
          component={FieldSettingsScreen}
          options={({ navigation }) => ({
            headerTitle: () => null,
            headerRight: () => (
              <HeaderIcon
                imageSource={require('../assets/icons/price.png')}
                position="Right"
                label="Cene"
                navigate={navigation.navigate}
                location="PricesScreen"
              />
            ),
          })}
        />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
        <Stack.Screen
          name="PricesScreen"
          component={PricesScreen}
          options={() => ({
            headerTitle: () => null,
          })}
        />
        <Stack.Screen
          name="ProductInfoScreen"
          component={ProductInfoScreen}
          options={() => ({
            headerTitle: () => null,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
