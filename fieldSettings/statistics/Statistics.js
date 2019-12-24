import React from 'react';
import { useSelector } from 'react-redux';
import StatisticsPresentational from './StatisticsPresentational';
import { calcSubPerPlant } from '../../calcFunctions';
import { worksPerPlant } from '../../assets/plants';

const Statistics = ({ field }) => {
  const area = useSelector(state => state[field].area);
  const plant = useSelector(state => state[field].plant);
  const allWorks = useSelector(state =>
    Object.values(state[field].groundWorksState).filter(work =>
      worksPerPlant[plant].includes(work.workName)
    )
  );
  const doneWorks = allWorks.filter(work => work.done);
  const planingWorks = allWorks.filter(work => work.planing);

  const oilDoneConsumption = calcSubPerPlant(doneWorks, 'oilConsumption', area);
  const oilDonePrice = oilDoneConsumption * 150;
  const paidDonePrice = calcSubPerPlant(doneWorks, 'paidPrice', area);
  const oilPlaningConsumption = calcSubPerPlant(planingWorks, 'oilConsumption', area);
  const oilPlaningPrice = oilPlaningConsumption * 150;
  const paidPlaningPrice = calcSubPerPlant(planingWorks, 'paidPrice', area);

  const doneTotal = oilDonePrice + paidDonePrice;
  const planingTotal = oilPlaningPrice + paidPlaningPrice;

  return (
    <StatisticsPresentational
      oilDoneConsumption={oilDoneConsumption}
      oilDonePrice={oilDonePrice}
      paidDonePrice={paidDonePrice}
      doneTotal={doneTotal}
      oilPlaningConsumption={oilPlaningConsumption}
      oilPlaningPrice={oilPlaningPrice}
      paidPlaningPrice={paidPlaningPrice}
      planingTotal={planingTotal}
    />
  );
};

export default Statistics;
