import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Badge, Block, Text } from '../components';
import { plantStringToImage } from '../helperFunctions';
import { theme } from '../theme';

const { colors, sizes } = theme;

const FieldCard = ({ field, handleChangeField }) => {
  const [plantName, fieldArea, fieldNumber] = field;
  return (
    <TouchableOpacity onPress={() => handleChangeField(fieldNumber)}>
      <Block card style={styles.fieldCard} color={colors.white}>
        <Badge size={60} color={plantName ? colors.accent : colors.gray}>
          <Image source={plantStringToImage(plantName)} />
        </Badge>

        {plantName !== '' ? (
          <>
            <Text title center gray>
              {plantName || 'Dodaj Njivu'}
            </Text>
            <Text title center gray>
              {fieldArea} ara
            </Text>
          </>
        ) : (
          <Text title bold center gray style={styles.addField}>
            Dodaj njivu
          </Text>
        )}
      </Block>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  fieldCard: {
    width: (width - sizes.base * 6) / 2,
    height: (width - sizes.base * 6) / 2,
    alignItems: 'center',
    marginTop: sizes.base,
  },
  addField: {
    marginTop: sizes.base / 2,
  },
});

export default FieldCard;
