import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';
import { Tabs, Block } from '../components';
import BasicContainer from '../fieldSettings/basic/BasicContainer';
import WorksContainer from '../fieldSettings/works/WorksContainer';
import Test from '../fieldSettings/statistics/Test';
import { theme } from '../theme';

const FieldSettingsScreen = () => {
  const activeField = useSelector(state => `field${state.activeField}`);
  const tabs = ['Njiva', 'Radovi', 'Statistika'];
  const [active, changeActive] = useState('Radovi');

  return (
    <Block color={theme.colors.gray2}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={theme.sizes.base * 5}
      >
        <ScrollView>
          <Tabs tabs={tabs} active={active} changeActive={changeActive} />
          {active === 'Njiva' && <BasicContainer field={activeField} />}
          {active === 'Radovi' && <WorksContainer field={activeField} />}
          {active === 'Statistika' && <Test field={activeField} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </Block>
  );
};

export default FieldSettingsScreen;
