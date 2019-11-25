import React, { useState } from 'react';
import { TouchableHighlight, Block, Text, Modal, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const DayPicker = ({ numberOfDaysInMonth }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const days = Array(numberOfDaysInMonth)
    .fill(1)
    .map((e, i) => i + 1);

  return (
    <>
      <TouchableHighlight onPress={() => setIsModalVisible(true)} style={styles.container}>
        <Text>{new Date().getDate()}</Text>
      </TouchableHighlight>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        {days.map(day => (
          <TouchableHighlight onPress={() => setIsModalVisible(false)} key={day}>
            <Text>{day}</Text>
          </TouchableHighlight>
        ))}
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.sizes.base,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: theme.sizes.radius,
  },
});

export default DayPicker;
