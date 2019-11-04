import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const Tabs = ({ tabs, changeActive, active }) => {
  const renderTab = tab => (
    <TouchableOpacity
      key={tab}
      onPress={() => changeActive(tab)}
      style={[styles.tab, active === tab ? styles.active : null]}
    >
      <Text size={16} gray={!active === tab} primary={active === tab}>
        {tab}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Block row space="between" style={styles.tabs}>
      {tabs.map(tab => renderTab(tab))}
    </Block>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderColor: theme.colors.primary,
    borderBottomWidth: 3,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: theme.sizes.base,
    flex: 0,
  },
});

export default Tabs;
