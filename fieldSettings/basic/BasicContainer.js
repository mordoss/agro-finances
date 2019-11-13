import React from 'react';
import { Block } from '../../components';
import PlantsConnected from './PlantsConnected';
import Area from './Area';
import Note from './Note';
import { theme } from '../../theme';

const BasicContainer = ({ field }) => {
  return (
    <Block style={{ marginHorizontal: theme.sizes.base * 3 }}>
      <PlantsConnected field={field} />
      <Area field={field} />
      <Note field={field} />
    </Block>
  );
};

export default BasicContainer;
