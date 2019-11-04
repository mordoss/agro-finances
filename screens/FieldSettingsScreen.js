import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';
import { Tabs } from '../components';
import BasicContainer from '../fieldSettings/basic/BasicContainer';
import WorksContainer from '../fieldSettings/works/WorksContainer';
import Test from '../fieldSettings/statistics/Test';
import { theme } from '../theme';

const FieldSettingsScreen = () => {
  const activeField = useSelector(state => `field${state.activeField}`);
  const tabs = ['Njiva', 'Radovi', 'Statistika'];
  const [active, changeActive] = useState('Njiva');

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, marginHorizontal: theme.sizes.base * 3 }}
      keyboardVerticalOffset={theme.sizes.base * 5}
    >
      <ScrollView>
        <Tabs tabs={tabs} active={active} changeActive={changeActive} />
        {active === 'Njiva' && <BasicContainer field={activeField} />}
        {active === 'Radovi' && <WorksContainer field={activeField} />}
        {active === 'Statistika' && <Test field={activeField} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FieldSettingsScreen;
