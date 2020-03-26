import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text } from '../components';
import { theme } from '../theme';

const HeaderIcon = ({ position, imageSource, navigate }) => {
  const location = position === 'Right' ? 'InfoScreen' : 'CalendarScreen';
  const text = position === 'Left' ? 'Planer' : 'Info';

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
      <Text bold h2 style={{ marginLeft: theme.sizes.base }} white>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderIcon;
