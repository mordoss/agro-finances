import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text } from '../components';
import { theme } from '../theme';

const HeaderIcon = ({ position, imageSource, navigate }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(position === 'Right' ? 'InfoScreen' : 'CalendarScreen')}
      style={{
        [`margin${position}`]: theme.sizes.base * 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}
    >
      <Image source={imageSource} />
      <Text bold style={{ marginLeft: theme.sizes.base }} white>
        {position === 'Left' ? 'Planer' : 'Info'}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderIcon;
