import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Text from './Text';
import { theme } from '../theme';

const { sizes } = theme;

const HeaderIcon = ({ position, imageSource, navigate, label, location }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(location)}
      style={{
        [`margin${position}`]: sizes.base * 2,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image source={imageSource} />
      <Text
        bold
        h2
        white
        style={{
          marginLeft: sizes.base,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderIcon;
