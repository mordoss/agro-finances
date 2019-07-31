import React, { useState } from 'react';
import { Modal, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';

import Text from './Text';
import Block from './Block';

import { theme } from '../theme';

const PickerCustom = props => {
  const { items, label, active } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <Block row center style={{ marginTop: theme.sizes.base }}>
      <TouchableHighlight onPress={() => setIsActive(true)} style={styles.pick}>
        <Text gray>{label}</Text>
      </TouchableHighlight>
      <Text style={styles.selected} bold h1 gray>
        {active}
      </Text>

      <Modal
        visible={isActive}
        animationType="slide"
        transparent
        onRequestClose={() => console.log('canceled!')}
      >
        <Block style={styles.modalInnerContainer}>
          {items.map(item => (
            <TouchableHighlight key={item} style={styles.item} onPress={() => setIsActive(false)}>
              <Text h3 black>
                {item}
              </Text>
            </TouchableHighlight>
          ))}
        </Block>
      </Modal>
    </Block>
  );
};

const styles = StyleSheet.create({
  modalInnerContainer: {
    position: 'absolute',
    alignItems: 'stretch',
    borderRadius: 13,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.white,
    width: Dimensions.get('window').width * 0.5,
    marginHorizontal: Dimensions.get('window').width / 4,
    marginVertical: Dimensions.get('window').height / 4,
    padding: theme.sizes.base,
  },
  item: {
    marginVertical: theme.sizes.base,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: 13,
    alignItems: 'center',
  },
  pick: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 13,
    padding: theme.sizes.base / 2,
  },
  selected: {
    marginLeft: theme.sizes.base,
  },
});

export default PickerCustom;
