import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const Tabs = ({ tabs, changeActive, active }) => {
  const renderTab = tab => {
    const isActive = active === tab;
    return (
      <TouchableOpacity
        key={tab}
        onPress={() => changeActive(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} gray={!isActive} primary={isActive} medium={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Block row space="between" style={styles.container}>
      {tabs.map(tab => renderTab(tab))}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginBottom: theme.sizes.base,
    paddingTop: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    borderColor: theme.colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.white,
    elevation: 5,
  },
  tab: {
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderColor: theme.colors.primary,
    borderBottomWidth: 3,
    fontWeight: 'bold',
  },
});

export default Tabs;
