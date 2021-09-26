/* eslint-disable global-require */
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Tabs, Block } from '../components';
import FieldsConnected from '../allFields/FieldsConnected';
import Statistics from '../allFields/StatisticsConnected';
import { theme } from '../theme';
import Calendar from '../allFields/Calendar';

const AllFieldsScreen = ({ navigation }) => {
  const tabs = [
    { label: 'Sve Njive', image: require('../assets/icons/farm.png') },
    {
      label: 'Ukupna Statistika',
      image: require('../assets/icons/graphic.png')
    },
    {
      label: 'Kalendar',
      image: require('../assets/icons/calendar.svg.png')
    }
  ];
  const [active, changeActive] = useState('Sve Njive');

  return (
    <Block color={theme.colors.backgorund}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {active === 'Sve Njive' && <FieldsConnected navigation={navigation} />}
        {active === 'Ukupna Statistika' && <Statistics />}
        {active === 'Kalendar' && <Calendar />}
      </ScrollView>
      <Tabs tabs={tabs} active={active} changeActive={changeActive} />
    </Block>
  );
};

export default AllFieldsScreen;
