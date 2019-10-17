import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Block, Text } from '../../components';
import PlantCard from './PlantCard';
import { theme } from '../../theme';
import plants from '../../assets/plants';

const PlantsList = props => {
  const { field } = props;
  const active = useSelector(state => state.field0.plant);

  const renderPlant = plant => {
    const isActive = active === plant.name;
    return <PlantCard plant={plant} isActive={isActive} key={plant.id} field={field} />;
  };

  return (
    <ScrollView>
      <Text gray style={{ marginHorizontal: theme.sizes.base * 3 }}>
        Kultura za setvu:
      </Text>
      <Block flex={false} row wrap space="around" style={styles.plants}>
        {plants.map(plant => renderPlant(plant))}
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
