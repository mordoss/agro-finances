import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Block, Text } from '../../components';
import PlantCard from './PlantCard';
import plants from '../../assets/plants';
import { theme } from '../../theme';

const PlantsConnected = props => {
  const { field } = props;
  const active = useSelector(state => state[field].plant);

  const renderPlant = plant => {
    const isActive = active === plant.name;
    return <PlantCard plant={plant} isActive={isActive} key={plant.id} field={field} />;
  };

  return (
    <ScrollView style={styles.container}>
      <Text gray style={styles.text}>
        Kultura za setvu:
      </Text>
      <Block row wrap space="between">
        {plants.map(plant => renderPlant(plant))}
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: theme.sizes.base,
  },
  text: {
    marginBottom: theme.sizes.base,
  },
});

export default PlantsConnected;
