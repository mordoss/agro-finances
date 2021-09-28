import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import { Badge, Block, Text } from '../components';
import { theme } from '../theme';

const ProfileScreen = () => {
  const { email, photoURL, displayName: name } = useSelector(
    state => state.auth
  );

  return (
    <Block>
      <Badge size={sizes.base * 10} style={styles.badge}>
        <Image source={{ uri: photoURL }} style={styles.image} />
      </Badge>
      <Text>{email}</Text>
      <Text>{name}</Text>
    </Block>
  );
};

export default ProfileScreen;

const { width } = Dimensions.get('window');
const { sizes } = theme;
const styles = StyleSheet.create({
  badge: {
    overflow: 'hidden',
    marginLeft: width / 2 - sizes.base * 5
  },
  image: {
    width: sizes.base * 10,
    height: sizes.base * 10
  }
});
