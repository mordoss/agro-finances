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
      <Text size={16} gray={!active === tab} primary={active === tab} medium={active === tab}>
        {tab}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Block row space="between" style={styles.container}>
      {tabs.map(tab => renderTab(tab))}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 3,
    borderColor: theme.colors.gray,
    borderBottomWidth: 1,
    flex: 0,
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
