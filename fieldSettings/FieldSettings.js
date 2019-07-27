import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

import { Block, Text } from '../components';

import BasicContainer from './basic/BasicContainer';
import Works from './works/Works';
import Test from './statistics/Test';

import { theme } from '../theme';

const FieldSettings = () => {
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
        <Text size={16} medium gray={!isActive} secondary={isActive}>
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
        {active === 'Njiva' && <BasicContainer />}
        {active === 'Radovi' && <Works />}
        {active === 'Statistika' && <Test />}
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
    borderColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
});
export default FieldSettings;
