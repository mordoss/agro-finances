import React, { useState } from 'react';
import { Modal, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const { colors, sizes } = theme;

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
              <Text h3 gray center>
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
    borderRadius: sizes.radius,
    backgroundColor: colors.white,
    width: width * 0.5,
    marginHorizontal: width / 4,
    marginVertical: height / 4,
    padding: sizes.base,
    elevation: 5,
  },
  modalItem: {
    marginVertical: sizes.base,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 3,
    backgroundColor: colors.backgorund,
  },
  button: {
    borderRadius: 5,
    padding: sizes.base / 2,
    elevation: 3,
    backgroundColor: colors.backgorund,
  },
  cancel: {
    marginVertical: sizes.base,
    marginHorizontal: sizes.base,
    borderColor: colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingVertical: sizes.base / 4,
  },
  selected: {
    marginLeft: sizes.base,
  },
});

export default PickerCustom;
