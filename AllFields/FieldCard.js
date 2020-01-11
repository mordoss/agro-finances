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
        <Text title center gray>
          {plantName || 'Dodaj Njivu'}
        </Text>
        <Text title center gray>
          {fieldArea} ara
        </Text>
      </Block>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  fieldCard: {
    width: (width - theme.sizes.base * 6) / 2,
    alignItems: 'center',
    marginTop: theme.sizes.base,
  },
});

export default FieldCard;
