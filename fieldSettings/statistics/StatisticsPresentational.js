import React from 'react';
import { Block } from '../../components';
import DoneAndPlaningCard from './DoneAndPlaningCard';

const StatisticsPresentational = ({ done, planing }) => {
  return (
    <Block row>
      <DoneAndPlaningCard
        label="Urađeno"
        oilConsumption={done.oilConsumptionDone}
        paidPrice={done.paidPriceDone}
        seedPrice={done.seedDone}
      />
      <DoneAndPlaningCard
        label="Planiram"
        oilConsumption={planing.oilConsumptionPlaning}
        paidPrice={planing.paidPricePlaning}
        seedPrice={planing.seedPlaning}
      />
    </Block>
  );
};

export default StatisticsPresentational;
