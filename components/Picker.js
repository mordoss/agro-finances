import React, { useState } from 'react';
import { Modal, TouchableHighlight, Dimensions, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const PickerCustom = ({ items, label, active, actionArgumentObject, action }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSelect = item => {
    dispatch(action(actionArgumentObject, item));
    setIsModalVisible(false);
  };

  return (
    <Block row center>
      <TouchableHighlight onPress={() => setIsModalVisible(true)} style={styles.button}>
        <Text gray>{label}</Text>
      </TouchableHighlight>
      <Text style={styles.selected} medium h3 gray>
        {active}
      </Text>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <Block style={styles.modalContainer}>
          {items.map(item => (
            <TouchableHighlight
              key={item}
              style={styles.modalItem}
              onPress={() => handleSelect(item)}
            >
              <Text h3 gray>
                {item}
              </Text>
            </TouchableHighlight>
          ))}
          <Button onPress={() => setIsModalVisible(false)} title="Close" />
        </Block>
      </Modal>
    </Block>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    alignItems: 'stretch',
    borderRadius: 13,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.white,
    width: width * 0.5,
    marginHorizontal: width / 4,
    marginVertical: height / 4,
    padding: theme.sizes.base,
  },
  modalItem: {
    marginVertical: theme.sizes.base,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: 13,
    alignItems: 'center',
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 13,
    padding: theme.sizes.base / 4,
  },
  selected: {
    marginLeft: theme.sizes.base,
  },
});

export default PickerCustom;
