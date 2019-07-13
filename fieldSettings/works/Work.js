import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { Card } from '../../components';

import CommonWorkPart from './CommonWorkPart';
import Sowing from './Sowing';
import Fertilization from './Fertilization';
import Spraying from './Spraying';

import { theme } from '../../theme';

const { width } = Dimensions.get('window');

const Work = props => {
  const { work } = props;

  return (
    <Card shadow style={styles.workCard}>
      <CommonWorkPart {...props}>
        {work.id === 'sowing' && <Sowing />}
        {work.id === 'fertilization' && <Fertilization />}
        {work.id === 'spraying' && <Spraying />}
      </CommonWorkPart>
    </Card>
  );
};
const styles = StyleSheet.create({
  workCard: {
    width: width - theme.sizes.base * 4,
    borderColor: theme.colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 13,
  },
});

export default Work;
