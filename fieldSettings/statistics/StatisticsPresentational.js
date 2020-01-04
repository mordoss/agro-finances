import React from 'react';
import { Block } from '../../components';
import StatisticsCard from './StatisticsCard';
import Profit from './Profit';

const StatisticsPresentational = ({ done, planing, total }) => {
  return (
    <Block>
      <StatisticsCard label="Urađeno" data={done} />
      <StatisticsCard label="Planiram" data={planing} />
      <StatisticsCard label="Ukupno" data={total} />
      <Profit invested={total.total} />
    </Block>
  );
};

export default StatisticsPresentational;
