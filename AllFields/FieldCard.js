import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Badge, Block, Text } from '../components';
import { plantStringToImage } from '../helperFunctions';
import { theme } from '../theme';

const FieldCard = ({ field, handleChangeField }) => {
  const [plantName, fieldArea, fieldNumber] = field;
  return (
    <Block card style={styles.fieldCard} color={theme.colors.white}>
      <TouchableOpacity
        style={{ alignItems: 'center' }}
        onPress={() => handleChangeField(fieldNumber)}
      >
        <Badge size={60} color={plantName ? theme.colors.accent : theme.colors.gray}>
          <Image source={plantStringToImage(plantName)} />
        </Badge>
        <Text height={20} center>
          {plantName}
        </Text>
        <Text height={20} center>
          {plantName ? `${fieldArea} ara` : 'Dodaj Njivu'}
        </Text>
      </TouchableOpacity>
    </Block>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  fieldCard: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 4 - theme.sizes.base) / 2,
  },
});

export default FieldCard;
