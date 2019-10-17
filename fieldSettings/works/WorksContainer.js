import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { theme } from '../../theme';

import AllWorks from './AllWorks';

const WorksContainer = props => {
  const { field } = props;
  const plant = useSelector(state => state[field].plant);
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ alignItems: 'flex-start' }}
      horizontal
      pagingEnabled
    >
      <AllWorks field={field} plant={plant} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginHorizontal: theme.sizes.base * 2,
    marginVertical: theme.sizes.base,
  },
});

export default WorksContainer;
