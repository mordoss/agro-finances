/* eslint-disable global-require */
import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { Tabs, Block } from '../components';
import FieldsConnected from '../AllFields/FieldsConnected';
import Statistics from '../AllFields/StatisticsConnected';
import HeaderIcon from '../AllFields/HeaderIcon';
import { theme } from '../theme';

const AllFieldsScreen = ({ navigation }) => {
  const tabs = [
    { label: 'Sve Njive', image: require('../assets/icons/farm.png') },
    { label: 'Ukupna Statistika', image: require('../assets/icons/graphic.png') },
  ];
  const [active, changeActive] = useState('Sve Njive');

  return (
    <Block color={theme.colors.backgorund}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={theme.sizes.base * 6}
      >
        <ScrollView>
          {active === 'Sve Njive' && <FieldsConnected navigation={navigation} />}
          {active === 'Ukupna Statistika' && <Statistics />}
        </ScrollView>
      </KeyboardAvoidingView>
      <Tabs tabs={tabs} active={active} changeActive={changeActive} />
    </Block>
  );
};

AllFieldsScreen.navigationOptions = screenProps => {
  return {
    headerLeft: () => (
      <HeaderIcon
        imageSource={require('../assets/icons/calendar.svg.png')}
        position="Left"
        navigate={screenProps.navigation.navigate}
      />
    ),
    headerRight: () => (
      <HeaderIcon
        imageSource={require('../assets/icons/info.png')}
        position="Right"
        navigate={screenProps.navigation.navigate}
      />
    ),
  };
};

export default AllFieldsScreen;
