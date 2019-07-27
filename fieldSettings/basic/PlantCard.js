import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Badge, Card, Text } from '../../components';

import { theme } from '../../theme';

const { width } = Dimensions.get('window');

const PlantCard = props => {
  const { plant, changeActive, isActive } = props;
  return (
    <TouchableOpacity onPress={() => changeActive(plant.name)}>
      <Card shadow style={styles.plant}>
        {isActive && (
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.secondary]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        )}
        <Badge size={60} color={theme.colors.accent}>
          <Image source={plant.image} />
        </Badge>
        <Text medium height={20} gray>
          {plant.name}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  plant: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 5 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 5 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 4 - theme.sizes.base) / 2,
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: theme.sizes.radius,
  },
});

export default PlantCard;
