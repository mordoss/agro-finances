import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Badge, Block, Text } from '../../components';
import { changePlant } from '../../redux/actions/basicStateActions';
import { plantStringToImage } from '../../utils/helperFunctions';
import resetStore from '../../utils/resetStore';
import { theme } from '../../theme';

const { colors, sizes } = theme;

const PlantCard = ({ plant, isActive, field }) => {
  const dispatch = useDispatch();

  const handleChangePlant = () => {
    dispatch(changePlant(field, plant.name));
    resetStore(field, plant.name, dispatch);
  };

  return (
    <TouchableOpacity onPress={handleChangePlant}>
      <Block card style={styles.container} color={colors.white}>
        {isActive && (
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            style={styles.gradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          />
        )}
        <Badge size={60} color={colors.accent}>
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
  container: {
    width: (width - sizes.base * 6) / 2,
    alignItems: 'center',
    marginTop: sizes.base
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: sizes.radius
  }
});

export default PlantCard;
