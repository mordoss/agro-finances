import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { theme } from '../../theme';
import works from '../../assets/works';

import Work from './Work';

const Works = () => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ alignItems: 'flex-start' }}
      horizontal
      pagingEnabled
    >
      {works.map(work => (
        <Work work={work} key={work.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginHorizontal: theme.sizes.base * 2,
    marginVertical: theme.sizes.base,
  },
});

export default Works;
