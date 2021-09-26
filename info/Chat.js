import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { Block, Text } from '../components';
import { theme } from '../theme';

const { colors, sizes } = theme;

const Chat = () => {
  const [onFocus, setOnFocus] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  return (
    <Block card center style={styles.container}>
      <Text gray h2 bold>
        Čet
      </Text>
      {isSent && (
        <>
          <Block
            flex={false}
            style={[styles.chatMessage, styles.chatMessageLeft]}
          >
            <Text white>{message}</Text>
          </Block>
          <Block
            flex={false}
            style={[styles.chatMessage, styles.chatMessageRight]}
          >
            <Text white>
              Čet nije u funkciji u ovoj verziji aplikacije, biće dostupan u
              sledećem apdejtu.
            </Text>
          </Block>
        </>
      )}
      <Block row space="between">
        <Block>
          <TextInput
            onChangeText={eventValue => setMessage(eventValue)}
            onFocus={() => setOnFocus(true)}
            onEndEditing={() => setOnFocus(false)}
            style={[
              styles.input,
              {
                borderColor: onFocus ? colors.primary : colors.gray,
                borderWidth: onFocus ? 2 : StyleSheet.hairlineWidth
              }
            ]}
            autoComplete="off"
            autoCorrect={false}
            multiline
          />
        </Block>
        <TouchableHighlight
          style={styles.button}
          onPress={() => setIsSent(true)}
        >
          <Text white center>
            Pošalji
          </Text>
        </TouchableHighlight>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: sizes.base / 2,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    padding: sizes.base
  },
  chatMessage: {
    borderBottomLeftRadius: sizes.radius,
    borderBottomRightRadius: sizes.radius,
    elevation: 20,
    marginVertical: sizes.base / 2,
    padding: sizes.base
  },
  chatMessageLeft: {
    alignSelf: 'flex-start',
    borderTopRightRadius: sizes.radius,
    backgroundColor: colors.primary
  },
  chatMessageRight: {
    alignSelf: 'flex-end',

    borderTopLeftRadius: sizes.radius,
    backgroundColor: colors.blue
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.black,
    borderRadius: sizes.radius,
    backgroundColor: colors.white,
    marginTop: sizes.base / 2,
    paddingHorizontal: sizes.base,
    paddingVertical: sizes.base / 2,
    height: sizes.base * 4,
    width: Dimensions.get('window').width - sizes.base * 10
  },
  button: {
    borderRadius: sizes.radius,
    padding: sizes.base,
    elevation: 3,
    backgroundColor: colors.primary,
    marginTop: sizes.base / 2,
    height: sizes.base * 4,
    justifyContent: 'center'
  }
});

export default Chat;
