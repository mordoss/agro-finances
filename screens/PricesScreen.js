import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Block } from '../components';
import PricesCard from '../prices/PricesCard';
import { theme } from '../theme';

const PricesScreen = () => {
  const field = useSelector(state => `field${state.activeField}`);

  const [expandedSeed, setExpandedSeed] = useState(false);
  const [expandedFertilizer, setExpandedFertilizer] = useState(false);
  const [expandedSprayer, setExpandedSprayer] = useState(false);

  return (
    <Block style={styles.container} color={theme.colors.backgorund}>
      <PricesCard
        label="Seme"
        expanded={expandedSeed}
        setExpanded={setExpandedSeed}
        field={field}
      />
      <PricesCard
        label="Prihrana"
        expanded={expandedFertilizer}
        setExpanded={setExpandedFertilizer}
        field={field}
      />
      <PricesCard
        label="Herbicid"
        expanded={expandedSprayer}
        setExpanded={setExpandedSprayer}
        field={field}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.sizes.base * 2,
  },
});

export default PricesScreen;
