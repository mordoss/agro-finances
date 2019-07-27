import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Block, Input } from '../../components';

import { theme } from '../../theme';

import { changeArea } from '../../redux/actions/basicActions';

const Area = () => {
  const area = useSelector(state => state.area);
  const dispatch = useDispatch();

  return (
    <Block style={styles.area} middle>
      <Input
        area
        label="Površina njive: "
        value={String(area)}
        changeValue={e => dispatch(changeArea(e))}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  area: {
    marginHorizontal: theme.sizes.base * 3,
    marginVertical: theme.sizes.base / 2,
  },
});

export default Area;
