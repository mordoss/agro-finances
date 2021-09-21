import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { Block, Text } from '../../components';
import PlantCard from './PlantCard';
import plants from '../../assets/plants';
import { theme } from '../../theme';

const { colors, sizes } = theme;

const PlantsConnected = ({ field }) => {
  const active = useSelector(state => state.fields[field].plant);

  const renderPlant = plant => {
    const isActive = active === plant.name;
    return (
      <PlantCard
        plant={plant}
        isActive={isActive}
        key={plant.id}
        field={field}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Block style={styles.labelContainer}>
        <Text gray>Kultura za setvu:</Text>
      </Block>
      <Block row wrap space="between">
        {plants.map(plant => renderPlant(plant))}
      </Block>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    marginTop: sizes.base
  },
  labelContainer: {
    backgroundColor: colors.white,
    width: width - sizes.base * 4,
    borderRadius: sizes.radius,
    paddingVertical: sizes.base / 2,
    elevation: 5,
    alignItems: 'center'
  }
});

export default PlantsConnected;
