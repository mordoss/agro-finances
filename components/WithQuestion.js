import React, { useState } from 'react';
import { StyleSheet, Modal, View, Pressable } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const { sizes, colors } = theme;

const WithQuestion = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Block row center>
      {children}
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Text>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </Modal>
      )}
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <AntDesign
          name="questioncircleo"
          size={sizes.base * 2}
          color={colors.primary}
          style={styles.icon}
        />
      </TouchableOpacity>
    </Block>
  );
};

export default WithQuestion;

const styles = StyleSheet.create({
  icon: {
    marginLeft: sizes.base
  },
  modalView: {
    margin: 20,
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',

    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {},
  buttonClose: {
    backgroundColor: '#F194FF'
  }
});
