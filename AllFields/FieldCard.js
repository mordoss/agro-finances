import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Badge, Block, Text } from '../components';
import { plantStringToImage } from '../helperFunctions';
import { theme } from '../theme';

const FieldCard = ({ field, handleChangeField }) => {
  const [plantName, fieldArea, fieldNumber] = field;
  return (
    <TouchableOpacity onPress={() => handleChangeField(fieldNumber)}>
      <Block card style={styles.fieldCard} color={theme.colors.white}>
        <Badge size={60} color={plantName ? theme.colors.accent : theme.colors.gray}>
          <Image source={plantStringToImage(plantName)} />
        </Badge>
        <Text height={20} center medium>
          {plantName || 'Dodaj'}
        </Text>
        <Text height={20} center medium>
          {plantName ? `${fieldArea} ara` : 'Njivu'}
        </Text>
      </Block>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  fieldCard: {
    width: (width - theme.sizes.base * 3) / 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default FieldCard;
