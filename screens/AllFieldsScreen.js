/* eslint-disable global-require */
import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { Tabs, Block } from '../components';
import FieldsConnected from '../allFields/FieldsConnected';
import Statistics from '../allFields/StatisticsConnected';
import { theme } from '../theme';
import { LogoutButton } from './Login';

const AllFieldsScreen = ({ navigation }) => {
  const tabs = [
    { label: 'Sve Njive', image: require('../assets/icons/farm.png') },
    {
      label: 'Ukupna Statistika',
      image: require('../assets/icons/graphic.png')
    }
  ];
  const [active, changeActive] = useState('Sve Njive');

  return (
    <Block color={theme.colors.backgorund}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView>
          {active === 'Sve Njive' && (
            <FieldsConnected navigation={navigation} />
          )}
          {active === 'Ukupna Statistika' && <Statistics />}
        </ScrollView>
        <LogoutButton />
      </KeyboardAvoidingView>
      <Tabs tabs={tabs} active={active} changeActive={changeActive} />
    </Block>
  );
};

export default AllFieldsScreen;
