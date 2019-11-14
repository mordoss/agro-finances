import React, { useState } from 'react';
import { Modal, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const PickerCustom = ({ items, label, active, field, action, turn, propertyName, workState }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const handleSelect = item => {
    dispatch(action(field, item, propertyName, turn, workState));
    setIsActive(false);
  };

  return (
    <Block row center>
      <TouchableHighlight onPress={() => setIsActive(true)} style={styles.label}>
        <Text gray>{label}</Text>
      </TouchableHighlight>
      <Text style={styles.selected} medium h3 gray>
        {active}
      </Text>

      <Modal visible={isActive} animationType="slide" transparent>
        <Block style={styles.modalContainer}>
          {items.map(item => (
            <TouchableHighlight
              key={item}
              style={styles.modalItem}
              onPress={() => handleSelect(item)}
            >
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
  modalContainer: {
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
  modalItem: {
    marginVertical: theme.sizes.base,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: 13,
    alignItems: 'center',
  },
  label: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 13,
    padding: theme.sizes.base / 4,
  },
  selected: {
    marginLeft: theme.sizes.base,
  },
});

export default PickerCustom;
