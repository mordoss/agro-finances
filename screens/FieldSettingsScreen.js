/* eslint-disable global-require */
import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';
import { Tabs, Block } from '../components';
import BasicContainer from '../fieldSettings/basic/BasicContainer';
import WorksContainer from '../fieldSettings/works/WorksContainer';
import Statistics from '../fieldSettings/statistics/StatisticsConnected';
import { theme } from '../theme';

const tabs = [
  { label: 'Njiva', image: require('../assets/icons/farm.png') },
  { label: 'Radovi', image: require('../assets/icons/tractor.png') },
  { label: 'Statistika', image: require('../assets/icons/graphic.png') }
];

const FieldSettingsScreen = () => {
  const activeField = useSelector(state => state.activeField);
  const plant = useSelector(state => state.fields[activeField].plant);
  const [active, changeActive] = useState('Njiva');

  return (
    <Block color={theme.colors.backgorund}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView>
          {active === 'Njiva' && <BasicContainer field={activeField} />}
          {active === 'Radovi' && <WorksContainer field={activeField} />}
          {active === 'Statistika' && <Statistics field={activeField} />}
        </ScrollView>
      </KeyboardAvoidingView>
      <Tabs
        tabs={tabs}
        active={active}
        changeActive={changeActive}
        disabled={plant === ''}
      />
    </Block>
  );
};

/* FieldSettingsScreen.navigationOptions = screenProps => {
  return {
    headerRight: () => (
      <HeaderIcon
        imageSource={require('../assets/icons/price.png')}
        position="Right"
        label="Cene"
        navigate={screenProps.navigation.navigate}
        location="PricesScreen"
      />
    ),
  };
}; */

export default FieldSettingsScreen;
