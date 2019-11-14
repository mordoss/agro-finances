import React from 'react';
import { Block } from '../../components';
import PlantsConnected from './PlantsConnected';
import Area from './Area';
import Rented from './Rented';
import Note from './Note';
import { theme } from '../../theme';

const BasicContainer = ({ field }) => {
  return (
    <Block style={{ marginHorizontal: theme.sizes.base }}>
      <PlantsConnected field={field} />
      <Area field={field} />
      <Rented field={field} />
      <Note field={field} />
    </Block>
  );
};

export default BasicContainer;
