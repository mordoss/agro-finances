import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Card } from '../../components';
import CommonWorkPart from './CommonWorkPart';
import Sowing from './Sowing';
import Spraying from './Spraying';
import Fertilization from './Fertilization';
import { theme } from '../../theme';

const { width } = Dimensions.get('window');

const Work = props => {
  const { work, name, field, propertyName } = props;

  return (
    <Card shadow style={styles.workCard}>
      <CommonWorkPart field={field} work={work} name={name} propertyName={propertyName}>
        {name === 'Setva' && <Sowing sowingData={work.special} field={field} />}
        {name === 'Prvo Prskanje' && (
          <Spraying sprayingData={work.special} field={field} turn="first" />
        )}
        {name === 'Drugo Prskanje' && (
          <Spraying sprayingData={work.special} field={field} turn="second" />
        )}
        {name === 'Prva Prihrana' && (
          <Fertilization fertilizationData={work.special} field={field} turn="first" />
        )}
        {name === 'Druga Prihrana' && (
          <Fertilization fertilizationData={work.special} field={field} turn="second" />
        )}
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
