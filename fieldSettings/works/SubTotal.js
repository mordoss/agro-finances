import React from 'react';
import { useSelector } from 'react-redux';
import SubTotalPresentational from './SubTotalPresentational';
import {
  calcSowing,
  calcSpraying,
  calcFertilization,
  calcMidRowCultivation,
} from '../../calcFunctions';

const SubTotal = ({ work, field, workName }) => {
  const { area } = useSelector(state => state[field]);
  const { seedConsumption } = useSelector(state => state[field].sowingState);
  const { first: firstSpraying, second: secondSpraying } = useSelector(
    state => state[field].sprayingState
  );
  const { first: firstFertilization, second: secondFertilization } = useSelector(
    state => state[field].fertilizationState
  );
  const { first: firstMidRowCultivation, second: secondMidRowCultivation } = useSelector(
    state => state[field].midRowCultivationState
  );

  const { oilConsumption, paid, paidPrice } = work;

  const specialPrices = {
    sowing: calcSowing(area, seedConsumption),
    fertilization1: calcFertilization(area, firstFertilization),
    fertilization2: calcFertilization(area, secondFertilization),
    spraying1: calcSpraying(area, firstSpraying),
    spraying2: calcSpraying(area, secondSpraying),
    midRowCultivation1: calcMidRowCultivation(area, firstMidRowCultivation),
    midRowCultivation2: calcMidRowCultivation(area, secondMidRowCultivation),
  };

  const oilConsumptionPerWork = paid ? 0 : Math.round((area / 100) * oilConsumption);
  const oilConsumptionPricePerWork = oilConsumptionPerWork * 150;
  const paidPricePerWork = paid ? (area / 100) * paidPrice : 0;
  const specialPricePerWork = specialPrices[workName] || 0;

  const total = paidPricePerWork + oilConsumptionPricePerWork + specialPricePerWork;

  return (
    <SubTotalPresentational
      paid={paid}
      paidPricePerWork={paidPricePerWork}
      oilConsumptionPerWork={oilConsumptionPerWork}
      oilConsumptionPricePerWork={oilConsumptionPricePerWork}
      specialPricePerWork={specialPricePerWork}
      total={total}
    />
  );
};

export default SubTotal;
