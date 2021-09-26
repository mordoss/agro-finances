import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  UIManager,
  LayoutAnimation,
  Animated
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { Block, Text } from '../components';
import PricesTable from './PricesTable';
import { theme } from '../theme';
import { colors } from '../theme/theme';

const PricesCard = ({ label, expanded, setExpanded, field, property }) => {
  const handleExpand = () => {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const logoStyles = [styles.logoStyle];
  if (expanded) {
    const animation = new Animated.Value(expanded ? 0 : 1);
    Animated.timing(animation, {
      toValue: expanded ? 1 : 0,
      duration: 200,
      useNativeDriver: true
    }).start();

    const rotateInterpolate = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });
    const animatedStyles = { transform: [{ rotate: rotateInterpolate }] };
    logoStyles.push(animatedStyles);
  }

  return (
    <Block
      card
      flex={false}
      style={styles.container}
      color={theme.colors.white}
    >
      <TouchableOpacity onPress={handleExpand} style={styles.touchable}>
        <Text gray>{label}</Text>

        <Animated.View style={logoStyles}>
          <Ionicons
            name="chevron-down-outline"
            size={theme.sizes.base * 2}
            color={colors.blue}
          />
        </Animated.View>
      </TouchableOpacity>
      <PricesTable expanded={expanded} field={field} property={property} />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.sizes.base * 2
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default PricesCard;
