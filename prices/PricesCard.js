import React from 'react';
import { StyleSheet, TouchableOpacity, UIManager, LayoutAnimation } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { Block, Text } from '../components';
import PricesTable from './PricesTable';
import { theme } from '../theme';

const PricesCard = ({ label, expanded, setExpanded, field }) => {
  const handleExpand = () => {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <Block card flex={false} style={styles.container} color={theme.colors.white}>
      <TouchableOpacity onPress={handleExpand} style={styles.touchable}>
        <Text>{label}</Text>
        {expanded ? (
          <Ionicons name="md-arrow-dropup" size={theme.sizes.base * 2} />
        ) : (
          <Ionicons name="md-arrow-dropdown" size={theme.sizes.base * 2} />
        )}
      </TouchableOpacity>
      <PricesTable expanded={expanded} label={label} field={field} />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.sizes.base * 2,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default PricesCard;
