import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Block } from '../components';
import PricesCard from '../prices/PricesCard';
import { theme } from '../theme';

const PricesScreen = () => {
  const [expandedSeed, setExpandedSeed] = useState(false);
  const [expandedFertilizer, setExpandedFertilizer] = useState(false);
  const [expandedSprayer, setExpandedSprayer] = useState(false);

  return (
    <Block style={styles.container} color={theme.colors.backgorund}>
      <PricesCard label="Seme" expanded={expandedSeed} setExpanded={setExpandedSeed} />
      <PricesCard
        label="Prihrana"
        expanded={expandedFertilizer}
        setExpanded={setExpandedFertilizer}
      />
      <PricesCard label="Herbicid" expanded={expandedSprayer} setExpanded={setExpandedSprayer} />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.sizes.base * 2,
  },
});

export default PricesScreen;
