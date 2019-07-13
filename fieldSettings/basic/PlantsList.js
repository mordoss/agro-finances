import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

import { Block, Badge, Card, Text } from '../../components';

import { theme } from '../../theme';
import plants from '../../assets/plants';

const { width } = Dimensions.get('window');

const PlantsList = () => {
  const [active, changeActive] = useState('');

  const renderPlants = plant => {
    const isActive = active === plant;

    return (
      <TouchableOpacity key={plant.id} onPress={() => changeActive(plant)}>
        <Card shadow style={[styles.plant, isActive ? styles.active : null]}>
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

  return (
    <ScrollView>
      <Text gray style={{ marginHorizontal: theme.sizes.base * 3 }}>
        Kultura za setvu:
      </Text>
      <Block flex={false} row wrap space="around" style={styles.plants}>
        {plants.map(plant => renderPlants(plant))}
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  plants: {
    paddingHorizontal: theme.sizes.base * 2,
    marginVertical: theme.sizes.base,
  },
  plant: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 5 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 5 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 4 - theme.sizes.base) / 2,
    alignItems: 'center',
  },
  active: {
    backgroundColor: theme.colors.secondary,
  },
});

export default PlantsList;
