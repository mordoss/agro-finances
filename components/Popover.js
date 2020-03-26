import React from 'react';
import { TouchableOpacity } from 'react-native';
import Popover from 'react-native-popover-view';
import Text from './Text';
import { theme } from '../theme';

const CustomPopover = ({ isOpen, setIsOpen }) => {
  return (
    <Popover
      isVisible={isOpen}
      onRequestClose={() => setIsOpen(false)}
      animationConfig={{ duration: 250 }}
      placement="top"
      mode={Popover.MODE.JS_MODAL}
      popoverStyle={{ padding: theme.sizes.base, borderRadius: theme.sizes.radius }}
      backgroundStyle={{
        backgroundColor: 'rgba(0,0,0,.35)',
      }}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={() => setIsOpen(false)}>
        <Text gray bold h3>
          Izaberite kulturu za setvu
        </Text>
      </TouchableOpacity>
    </Popover>
  );
};

export default CustomPopover;
