import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text } from '../components';
import { theme } from '../theme';

const HeaderIcon = ({ position, imageSource, navigate, label }) => {
  const location = position === 'Right' ? 'InfoScreen' : 'CalendarScreen';

  return (
    <TouchableOpacity
      onPress={() => navigate(location)}
      style={{
        [`margin${position}`]: theme.sizes.base * 2,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image source={imageSource} />
      <Text
        bold
        h2
        style={{
          marginLeft: theme.sizes.base,
        }}
        white={position === 'Left'}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderIcon;
