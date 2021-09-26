import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Badge, Block, Text } from '../components';
import { plantStringToImage } from '../utils/helperFunctions';
import { theme } from '../theme';

const { colors, sizes } = theme;

const FieldCard = ({ field, handleChangeField }) => {
  const [plantName, fieldArea, fieldNumber] = field;
  const isAddField = typeof fieldArea !== 'number';
  return (
    <TouchableOpacity onPress={() => handleChangeField(fieldNumber)}>
      <Block card style={styles.fieldCard} color={colors.white}>
        <Badge size={60} color={isAddField ? colors.gray : colors.accent}>
          <Image source={plantStringToImage(plantName)} />
        </Badge>
        <Text title center gray>
          {plantName}
        </Text>
        <Text title center gray>
          {isAddField ? 'Dodaj njivu' : `${fieldArea} ara`}
        </Text>
      </Block>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  fieldCard: {
    width: (width - sizes.base * 6) / 2,
    maxHeight: (width - sizes.base * 6) / 2,
    alignItems: 'center',
    marginTop: sizes.base,
    marginHorizontal: sizes.base
  },
  addField: {
    marginTop: sizes.base / 2
  }
});

export default FieldCard;
