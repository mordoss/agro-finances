import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Badge, Block, Text } from '../../components';
import { changePlant } from '../../redux/actions/basicStateActions';
import { theme } from '../../theme';

const PlantCard = props => {
  const { plant, isActive } = props;
  const { field } = props;
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(changePlant(field, plant.name))}>
      <Block shadow card style={styles.plantCard}>
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
        <Text medium height={20} white={isActive} gray={!isActive}>
          {plant.name}
        </Text>
      </Block>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  plantCard: {
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
