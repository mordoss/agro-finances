import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import WorksConnected from './WorksConnected';
import { theme } from '../../theme';

const WorksContainer = ({ field }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: 'flex-start' }}
      horizontal
      pagingEnabled
    >
      <WorksConnected field={field} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.sizes.base
  }
});

export default WorksContainer;
