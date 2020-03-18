import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block } from '../../components';
import CommonWorkPart from './CommonWorkPart';
import Sowing from './Sowing';
import Spraying from './Spraying';
import Fertilization from './Fertilization';
import MidRowCultivation from './MidRowCultivation';
import { theme } from '../../theme';

const Work = ({ work, name, field, plant }) => {
  const { workName, special } = work;

  return (
    <Block color={theme.colors.white} style={styles.container}>
      <CommonWorkPart field={field} work={work} name={name} workName={workName}>
        {workName === 'sowing' && <Sowing sowingData={special} field={field} />}
        {workName === 'spraying1' && (
          <Spraying sprayingData={special} field={field} turn="first" plant={plant} />
        )}
        {workName === 'spraying2' && (
          <Spraying sprayingData={special} field={field} turn="second" plant={plant} />
        )}
        {workName === 'fertilization1' && (
          <Fertilization fertilizationData={special} field={field} turn="first" plant={plant} />
        )}
        {workName === 'fertilization2' && (
          <Fertilization fertilizationData={special} field={field} turn="second" plant={plant} />
        )}

        {workName === 'midRowCultivation1' && (
          <MidRowCultivation
            midRowCultivationData={special}
            field={field}
            turn="first"
            plant={plant}
          />
        )}
        {workName === 'midRowCultivation2' && (
          <MidRowCultivation
            midRowCultivationData={special}
            field={field}
            turn="second"
            plant={plant}
          />
        )}
      </CommonWorkPart>
    </Block>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width - theme.sizes.base * 4,
    marginHorizontal: theme.sizes.base * 2,
    borderRadius: theme.sizes.radius,
    marginBottom: theme.sizes.base,
    elevation: 5,
  },
});

export default Work;
