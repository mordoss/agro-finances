import React from 'react';
import SubTotalPresentational from './SubTotalPresentational';
import useWorkData from '../../hooks/useWorkData';
import { workNameToItem } from '../../helperFunctions';
import {
  calcSowing,
  calcSpraying,
  calcFertilization,
  calcMidRowCultivation,
} from '../../calcFunctions';

const SubTotal = ({ work, field }) => {
  const { done, planing, oilConsumption, paid, paidPrice, workName } = work;
  const doneOrPlaning = done || planing;
  const {
    area,
    sowingData,
    fertilization1Data,
    fertilization2Data,
    midRowCultivation1Data,
    midRowCultivation2Data,
    spraying1Data,
    spraying2Data,
  } = useWorkData(field);

  const specialPrices = {
    sowing: calcSowing(area, sowingData),
    fertilization1: calcFertilization(area, fertilization1Data),
    fertilization2: calcFertilization(area, fertilization2Data),
    spraying1: calcSpraying(area, spraying1Data),
    spraying2: calcSpraying(area, spraying2Data),
    midRowCultivation1: calcMidRowCultivation(area, midRowCultivation1Data),
    midRowCultivation2: calcMidRowCultivation(area, midRowCultivation2Data),
  };

  const oilConsumptionPerWork =
    !doneOrPlaning || paid ? 0 : Math.round((area / 100) * oilConsumption);
  const oilConsumptionPrice = oilConsumptionPerWork * 150;
  const paidPricePerWork = doneOrPlaning && paid ? (area / 100) * paidPrice : 0;
  const specialPrice = (doneOrPlaning && specialPrices[workName]) || 0;

  const total = paidPricePerWork + oilConsumptionPrice + specialPrice;

  return (
    <SubTotalPresentational
      label={workNameToItem(workName)}
      paid={paid}
      paidPrice={paidPricePerWork}
      oilConsumption={oilConsumptionPerWork}
      oilConsumptionPrice={oilConsumptionPrice}
      specialPrice={specialPrice}
      total={total}
    />
  );
};

export default SubTotal;
