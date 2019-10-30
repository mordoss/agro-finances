import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';
import { Block, Text } from '../components';
import BasicContainer from '../fieldSettings/basic/BasicContainer';
import WorksContainer from '../fieldSettings/works/WorksContainer';
import Test from '../fieldSettings/statistics/Test'; // statistics to be done
import { theme } from '../theme';

const FieldSettings = () => {
  const activeField = useSelector(state => `field${state.activeField}`);
  const [active, changeActive] = useState('Njiva');
  const tabs = ['Njiva', 'Radovi', 'Statistika'];

  const renderTab = tab => {
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => changeActive(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} primary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1 }}
      keyboardVerticalOffset={theme.sizes.base * 5}
    >
      <ScrollView>
        <Block row space="between" style={styles.tabs}>
          {tabs.map(tab => renderTab(tab))}
        </Block>
        {active === 'Njiva' && <BasicContainer field={activeField} />}
        {active === 'Radovi' && <WorksContainer field={activeField} />}
        {active === 'Statistika' && <Test field={activeField} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 3,
  },
  tab: {
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderColor: theme.colors.primary,
    borderBottomWidth: 3,
  },
});
export default FieldSettings;
