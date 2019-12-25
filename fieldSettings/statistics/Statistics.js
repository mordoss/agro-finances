import React from 'react';
import { useSelector } from 'react-redux';
import StatisticsPresentational from './StatisticsPresentational';
import {
  calcOilAndPaidPerPlant,
  calcSowing,
  calcSpraying,
  calcFertilization,
} from '../../calcFunctions';
import { worksPerPlant } from '../../assets/plants';

const Statistics = ({ field }) => {
  const area = useSelector(state => state[field].area);
  const plant = useSelector(state => state[field].plant);
  const { seedConsumption } = useSelector(state => state[field].sowingState);
  const { done: sowingDone, planing: sowingPlaning } = useSelector(
    state => state[field].groundWorksState.sowing
  );

  const allWorks = useSelector(state =>
    Object.values(state[field].groundWorksState).filter(work =>
      worksPerPlant[plant].includes(work.workName)
    )
  );
  const doneWorks = allWorks.filter(work => work.done);
  const planingWorks = allWorks.filter(work => work.planing);

  const oilConsumptionDone = calcOilAndPaidPerPlant(doneWorks, 'oilConsumption', area);
  const paidPriceDone = calcOilAndPaidPerPlant(doneWorks, 'paidPrice', area);
  const seedDone = sowingDone ? calcSowing(area, seedConsumption) : 0;

  const oilConsumptionPlaning = calcOilAndPaidPerPlant(planingWorks, 'oilConsumption', area);
  const paidPricePlaning = calcOilAndPaidPerPlant(planingWorks, 'paidPrice', area);
  const seedPlaning = sowingPlaning ? calcSowing(area, seedConsumption) : 0;

  return (
    <StatisticsPresentational
      done={{ oilConsumptionDone, paidPriceDone, seedDone }}
      planing={{ oilConsumptionPlaning, paidPricePlaning, seedPlaning }}
    />
  );
};

export default Statistics;
