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
  const { oilConsumption, paid, paidPrice, workName } = work;
  const {
    area,
    sowingData,
    fertilization1Data,
    fertilization2Data,
    midRowCultivation1Data,
    midRowCultivation2Data,
    spraying1Data,
    spraying2Data,
    sowingDone,
    sowingPlaning,
    fertilization1Done,
    fertilization2Done,
    fertilization1Planing,
    fertilization2Planing,
    midRowCultivation1Done,
    midRowCultivation2Done,
    midRowCultivation1Planing,
    midRowCultivation2Planing,
    spraying1Done,
    spraying2Done,
    spraying1Planing,
    spraying2Planing,
  } = useWorkData(field);

  const specialPrices = {
    sowing: [calcSowing(area, sowingData), sowingDone || sowingPlaning],
    fertilization1: [
      calcFertilization(area, fertilization1Data),
      fertilization1Done || fertilization1Planing,
    ],
    fertilization2: [
      calcFertilization(area, fertilization2Data),
      fertilization2Done || fertilization2Planing,
    ],
    spraying1: [calcSpraying(area, spraying1Data), spraying1Done || spraying1Planing],
    spraying2: [calcSpraying(area, spraying2Data), spraying2Done || spraying2Planing],
    midRowCultivation1: [
      calcMidRowCultivation(area, midRowCultivation1Data),
      midRowCultivation1Done || midRowCultivation1Planing,
    ],
    midRowCultivation2: [
      calcMidRowCultivation(area, midRowCultivation2Data),
      midRowCultivation2Done || midRowCultivation2Planing,
    ],
  };

  const oilConsumptionPerWork = paid ? 0 : Math.round((area / 100) * oilConsumption);
  const oilConsumptionPricePerWork = oilConsumptionPerWork * 150;
  const paidPricePerWork = paid ? (area / 100) * paidPrice : 0;
  const specialPricePerWork = specialPrices[workName][1] ? specialPrices[workName][0] : 0;

  const total = paidPricePerWork + oilConsumptionPricePerWork + specialPricePerWork;

  return (
    <SubTotalPresentational
      label={workNameToItem(workName)}
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
