import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { changeArea } from '../../redux/actions/basicStateActions';
import { Block, Input } from '../../components';
import { theme } from '../../theme';

const Area = ({ field }) => {
  const area = useSelector(state => state[field].area);

  return (
    <Block style={styles.container} card color="white">
      <Input
        unit="ara"
        label="Površina njive: "
        value={String(area)}
        action={changeArea}
        actionArgumentObject={{ field }}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.sizes.base,
  },
});

export default Area;
