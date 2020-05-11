import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import PricesCard from '../prices/PricesCard';
import { theme } from '../theme';

const PricesScreen = () => {
  const field = useSelector(state => `field${state.activeField}`);

  const [expandedSeed, setExpandedSeed] = useState(false);
  const [expandedFertilizer, setExpandedFertilizer] = useState(false);
  const [expandedSprayer, setExpandedSprayer] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <PricesCard
        label="Seme"
        expanded={expandedSeed}
        setExpanded={setExpandedSeed}
        field={field}
        property="seed"
      />
      <PricesCard
        label="Prihrana"
        expanded={expandedFertilizer}
        setExpanded={setExpandedFertilizer}
        field={field}
        property="fertilizer"
      />
      <PricesCard
        label="Herbicid"
        expanded={expandedSprayer}
        setExpanded={setExpandedSprayer}
        field={field}
        property="sprayer"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
    backgroundColor: theme.colors.backgorund,
  },
});

export default PricesScreen;
