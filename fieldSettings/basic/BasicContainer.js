import React from 'react';
import { Block } from '../../components';
import PlantsConnected from './PlantsConnected';
import Area from './Area';
import Rented from './Rented';
import Note from './Note';
import { theme } from '../../theme';

const BasicContainer = ({ field }) => {
  return (
    <Block style={{ marginHorizontal: theme.sizes.base * 2 }}>
      <PlantsConnected field={field} />
      <Block card color="white">
        <Rented field={field} />
        <Area field={field} />
        <Note field={field} />
      </Block>
    </Block>
  );
};

export default BasicContainer;
