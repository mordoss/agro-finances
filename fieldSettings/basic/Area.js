import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { changeArea } from '../../redux/actions/basicStateActions';
import { Block, Input } from '../../components';
import { theme } from '../../theme';

const Area = props => {
  const { field } = props;
  const area = useSelector(state => state[field].area);

  return (
    <Block style={styles.area} middle>
      <Input area label="Površina njive: " value={String(area)} action={changeArea} field={field} />
    </Block>
  );
};

const styles = StyleSheet.create({
  area: {
    marginHorizontal: theme.sizes.base * 3,
    marginVertical: theme.sizes.base,
  },
});

export default Area;
