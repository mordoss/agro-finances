import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { Block, Text } from '../components';
import { theme } from '../theme';

const PricesCard = ({ label, expanded, setExpanded }) => (
  <Block card style={styles.container} color={theme.colors.white}>
    <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.touchable}>
      <Text>{label}</Text>
      {expanded ? (
        <Ionicons name="md-arrow-dropup" size={theme.sizes.base * 2} />
      ) : (
        <Ionicons name="md-arrow-dropdown" size={theme.sizes.base * 2} />
      )}
    </TouchableOpacity>
    {expanded && (
      <Block>
        <Text>lala</Text>
      </Block>
    )}
  </Block>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.sizes.base * 2,
    flex: 0,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default PricesCard;
