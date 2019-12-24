import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';
import { Tabs, Block } from '../components';
import BasicContainer from '../fieldSettings/basic/BasicContainer';
import WorksContainer from '../fieldSettings/works/WorksContainer';
import Statistics from '../fieldSettings/statistics/Statistics';
import { theme } from '../theme';

const FieldSettingsScreen = () => {
  const activeField = useSelector(state => `field${state.activeField}`);
  const plant = useSelector(state => state[activeField].plant);
  const tabs = ['Njiva', 'Radovi', 'Statistika'];
  const [active, changeActive] = useState('Njiva');

  return (
    <Block color={theme.colors.backgorund}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={theme.sizes.base * 6}
      >
        <ScrollView>
          <Tabs tabs={tabs} active={active} changeActive={changeActive} disabled={plant === ''} />
          {active === 'Njiva' && <BasicContainer field={activeField} />}
          {active === 'Radovi' && <WorksContainer field={activeField} />}
          {active === 'Statistika' && <Statistics field={activeField} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </Block>
  );
};

export default FieldSettingsScreen;
