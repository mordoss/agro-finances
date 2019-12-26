import React from 'react';
import { Block } from '../../components';
import DoneAndPlaningCard from './DoneAndPlaningCard';

const StatisticsPresentational = ({ done, planing, total }) => {
  return (
    <Block>
      <DoneAndPlaningCard label="Urađeno" data={done} />
      <DoneAndPlaningCard label="Planiram" data={planing} />
      <DoneAndPlaningCard label="Ukupno" data={total} />
    </Block>
  );
};

export default StatisticsPresentational;
