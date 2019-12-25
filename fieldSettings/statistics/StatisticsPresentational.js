import React from 'react';
import { Block } from '../../components';
import DoneAndPlaningCard from './DoneAndPlaningCard';

const StatisticsPresentational = ({ done, planing }) => {
  return (
    <Block row>
      <DoneAndPlaningCard label="Urađeno" data={done} />
      <DoneAndPlaningCard label="Planiram" data={planing} />
    </Block>
  );
};

export default StatisticsPresentational;
