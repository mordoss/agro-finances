import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block } from '../../components';
import CommonWorkPart from './CommonWorkPart';
import Sowing from './Sowing';
import Spraying from './Spraying';
import Fertilization from './Fertilization';
import { theme } from '../../theme';

const Work = ({ work, name, field, workName }) => {
  return (
    <Block card color={theme.colors.white} style={styles.workCard}>
      <CommonWorkPart field={field} work={work} name={name} workName={workName}>
        {workName === 'sowing' && <Sowing sowingData={work.special} field={field} />}
        {workName === 'spraying1' && (
          <Spraying sprayingData={work.special} field={field} turn="first" />
        )}
        {workName === 'spraying2' && (
          <Spraying sprayingData={work.special} field={field} turn="second" />
        )}
        {workName === 'fertilization1' && (
          <Fertilization fertilizationData={work.special} field={field} turn="first" />
        )}
        {workName === 'fertilization2' && (
          <Fertilization fertilizationData={work.special} field={field} turn="second" />
        )}
      </CommonWorkPart>
    </Block>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  workCard: {
    width: width - theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base,
  },
});

export default Work;
