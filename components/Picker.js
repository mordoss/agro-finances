import React, { useState } from 'react';
import { Modal, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
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
        <Text gray center style>
          {active || label}
        </Text>
      </TouchableHighlight>

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
          <TouchableHighlight onPress={() => setIsModalVisible(false)} style={styles.cancel}>
            <Text gray center>
              Otkaži
            </Text>
          </TouchableHighlight>
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
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.white,
    width: width * 0.5,
    marginHorizontal: width / 4,
    marginVertical: height / 4,
    padding: theme.sizes.base,
    elevation: 5,
  },
  modalItem: {
    marginVertical: theme.sizes.base,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 3,
    backgroundColor: theme.colors.backgorund,
  },
  button: {
    width: theme.sizes.base * 6,
    borderRadius: 5,
    padding: theme.sizes.base / 4,
    elevation: 3,
    backgroundColor: theme.colors.backgorund,
  },
  cancel: {
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base,
    borderColor: theme.colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingVertical: theme.sizes.base / 4,
  },
  selected: {
    marginLeft: theme.sizes.base,
  },
});

export default PickerCustom;
