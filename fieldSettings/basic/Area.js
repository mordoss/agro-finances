import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { changeArea } from '../../redux/actions/basicStateActions';
import { Block, Input } from '../../components';
import { theme } from '../../theme';

const Area = ({ field }) => {
  const area = useSelector(state => state[field].area);

  return (
    <Block style={styles.container} middle>
      <Input
        unit="ara"
        label="Površina njive: "
        action={changeArea}
        actionArgumentObject={{ field, value: String(area) }}
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
