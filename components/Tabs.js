/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import Text from './Text';
import Block from './Block';
import Popover from './Popover';
import { theme } from '../theme';

const { colors, sizes } = theme;

const Tabs = ({ tabs, changeActive, disabled, active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderTab = tab => {
    const { label, image } = tab;
    const isActive = active === label;
    return (
      <TouchableOpacity
        key={label}
        onPress={() => {
          disabled ? setIsOpen(true) : changeActive(label);
        }}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Image source={image} />
        <Text size={16} color={isActive ? colors.primary : colors.gray} bold>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Popover isOpen={isOpen} setIsOpen={setIsOpen} />
      <Block row space="between" style={styles.container}>
        {tabs.map(tab => renderTab(tab))}
      </Block>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: sizes.base / 2,
    paddingHorizontal: sizes.base * 2,
    backgroundColor: colors.white,
    elevation: 5,
    marginHorizontal: -sizes.base * 2
  },
  tab: {
    paddingBottom: sizes.base / 2,
    flex: 1,
    alignItems: 'center'
  },
  active: {
    borderColor: colors.primary,
    borderBottomWidth: 3,
    fontWeight: 'bold'
  }
});

export default Tabs;
