import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Badge, Block, Text } from '../../components';
import { changePlant } from '../../redux/actions/basicStateActions';
import { plantStringToImage } from '../../helperFunctions';
import { theme } from '../../theme';

const PlantCard = ({ plant, isActive, field }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(changePlant(field, plant.name))}>
      <Block card style={styles.plantCard} color={theme.colors.white}>
        {isActive && (
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.secondary]}
            style={styles.gradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          />
        )}
        <Badge size={60} color={theme.colors.accent}>
          <Image source={plantStringToImage(plant.name)} />
        </Badge>
        <Text title white={isActive} gray={!isActive} bold={!!isActive}>
          {plant.name}
        </Text>
      </Block>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  plantCard: {
    width: (width - theme.sizes.base * 6) / 2,
    alignItems: 'center',
    marginTop: theme.sizes.base,
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
