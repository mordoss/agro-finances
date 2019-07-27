import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Block, Text } from '../../components';
import PlantCard from './PlantCard';

import { theme } from '../../theme';
import plants from '../../assets/plants';

import { changePlant } from '../../redux/actions/basicActions';

const PlantsList = () => {
  const active = useSelector(state => state.plant);
  const dispatch = useDispatch();

  const renderPlants = plant => {
    const isActive = active === plant.name;
    return (
      <PlantCard
        plant={plant}
        changeActive={e => dispatch(changePlant(e))}
        isActive={isActive}
        key={plant.id}
      />
    );
  };

  return (
    <ScrollView>
      <Text gray style={{ marginHorizontal: theme.sizes.base * 3 }}>
        Kultura za setvu: {active.name}
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
});

export default PlantsList;
