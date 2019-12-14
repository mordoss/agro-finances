import React, { useState } from 'react';
import { TouchableHighlight, Modal, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { Block, Text } from '../../components';
import { changeDateDay } from '../../redux/actions/cammonWorkActions';
import { theme } from '../../theme';

const DayPicker = ({ actionArgumentObject, numberOfDays, day }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const allDays = Array(numberOfDays)
    .fill(1)
    .map((e, i) => i + 1);

  const handleSelect = item => {
    dispatch(changeDateDay(actionArgumentObject, item));
    setIsModalVisible(false);
  };

  return (
    <Block style={styles.container}>
      <TouchableHighlight onPress={() => setIsModalVisible(true)}>
        <Text>{day || new Date().getDate()}</Text>
      </TouchableHighlight>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        transparent
      >
        <Block style={styles.modalContainer}>
          {allDays.map(d => (
            <TouchableHighlight onPress={() => handleSelect(d)} key={d} style={styles.modalItem}>
              <Text>{d}</Text>
            </TouchableHighlight>
          ))}
        </Block>
      </Modal>
    </Block>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: theme.sizes.base * 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.sizes.base,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: theme.sizes.radius,
  },
  modalContainer: {
    position: 'absolute',
    alignItems: 'stretch',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.white,
    width: width - theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base,
    marginVertical: height / 4,
    padding: theme.sizes.base,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  modalItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: theme.sizes.radius,
    marginHorizontal: theme.sizes.base / 2,
    marginVertical: theme.sizes.base / 2,
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
  },
});

export default DayPicker;
