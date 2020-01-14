import React, { useState } from 'react';
import { TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';
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
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Text>{day || 'dan'}</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        transparent
      >
        <Block style={styles.modalContainer}>
          {allDays.map(d => (
            <TouchableOpacity onPress={() => handleSelect(d)} key={d} style={styles.modalItem}>
              <Text>{d}</Text>
            </TouchableOpacity>
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
    marginRight: theme.sizes.base,
    elevation: 3,
    backgroundColor: theme.colors.backgorund,
    borderRadius: theme.sizes.radius,
  },
  modalContainer: {
    position: 'absolute',
    alignItems: 'stretch',
    borderColor: theme.colors.gray,
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.white,
    width: width - theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base,
    marginVertical: height / 4,
    padding: theme.sizes.base,
    flexDirection: 'row',
    flexWrap: 'wrap',
    elevation: 5,
  },
  modalItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.sizes.radius,
    marginHorizontal: theme.sizes.base / 2,
    marginVertical: theme.sizes.base / 2,
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
    elevation: 5,
    backgroundColor: theme.colors.backgorund,
  },
});

export default DayPicker;
