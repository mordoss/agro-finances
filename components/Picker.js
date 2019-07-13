import React, { useState } from 'react';
import { Modal, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';

import Text from './Text';
import Block from './Block';

import { theme } from '../theme';

const PickerCustom = props => {
  const { items, label } = props;
  const [selected, setSelected] = useState('');
  const [active, setActive] = useState(false);

  const handleSelect = item => {
    setActive(!active);
    setSelected(item);
  };

  return (
    <Block row center style={{ marginTop: theme.sizes.base }}>
      <TouchableHighlight onPress={() => setActive(!active)} style={styles.pick}>
        <Text gray>{label}</Text>
      </TouchableHighlight>
      <Text style={styles.selected} bold h1 gray>
        {selected}
      </Text>

      <Modal
        visible={active}
        animationType="slide"
        transparent
        onRequestClose={() => console.log('canceled!')}
      >
        <Block style={styles.modalInnerContainer}>
          {items.map(item => (
            <TouchableHighlight key={item} onPress={() => handleSelect(item)} style={styles.item}>
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
