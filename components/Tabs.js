import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const Tabs = ({ tabs, changeActive, disabled, active }) => {
  const renderTab = tab => {
    const isActive = active === tab;
    return (
      <TouchableOpacity
        key={tab}
        onPress={() => {
          if (!disabled) {
            changeActive(tab);
          }
        }}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} gray={!isActive} primary={isActive} gray2={disabled && !isActive} bold>
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
    paddingTop: theme.sizes.base,
    paddingHorizontal: theme.sizes.base * 2,
    backgroundColor: theme.colors.white,
    elevation: 5,
    marginHorizontal: -theme.sizes.base,
  },
  tab: {
    paddingBottom: theme.sizes.base,
    flex: 1,
    alignItems: 'center',
  },
  active: {
    borderColor: theme.colors.primary,
    borderBottomWidth: 3,
    fontWeight: 'bold',
  },
});

export default Tabs;
