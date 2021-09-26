import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import PricesCard from '../prices/PricesCard';
import { theme } from '../theme';

const { sizes, colors } = theme;

const PricesScreen = () => {
  const field = useSelector(state => state.activeField);

  const [expandedSeed, setExpandedSeed] = useState(false);
  const [expandedFertilizer, setExpandedFertilizer] = useState(false);
  const [expandedSprayer, setExpandedSprayer] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
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
    paddingTop: sizes.base * 2,
    paddingBottom: sizes.base * 2,
    backgroundColor: colors.backgorund
  }
});

export default PricesScreen;
