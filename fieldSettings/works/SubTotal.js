import React from 'react';
import { useSelector } from 'react-redux';
import useWorkData from '../../hooks/useWorkData';
import SubTotalPresentational from './SubTotalPresentational';
import { workNameToItem } from '../../helperFunctions';
import {
  calcSowing,
  calcSpraying,
  calcFertilization,
  calcMidRowCultivation,
} from '../../calcFunctions';

const SubTotal = ({ work, field }) => {
  const { products } = useSelector(state => state);
  const { plant } = useSelector(state => state[field]);

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
  } = useWorkData(field);

  const specialproducts = {
    sowing: calcSowing(area, sowingData, products.seed, plant),
    fertilization1: calcFertilization(area, fertilization1Data, products.fertilizer),
    fertilization2: calcFertilization(area, fertilization2Data, products.fertilizer),
    spraying1: calcSpraying(area, spraying1Data, products.sprayer),
    spraying2: calcSpraying(area, spraying2Data, products.sprayer),
    midRowCultivation1: calcMidRowCultivation(area, midRowCultivation1Data, products.fertilizer),
    midRowCultivation2: calcMidRowCultivation(area, midRowCultivation2Data, products.fertilizer),
  };

  const oilConsumptionPerWork = paid ? 0 : Math.round((area / 100) * oilConsumption);
  const oilConsumptionPrice = oilConsumptionPerWork * 150;
  const paidPricePerWork = paid ? (area / 100) * paidPrice : 0;
  const specialPrice = specialproducts[workName] || 0;

  const total = paidPricePerWork + oilConsumptionPrice + specialPrice;

  return (
    <SubTotalPresentational
      label={workNameToItem(workName)}
      paidPrice={paidPricePerWork}
      oilConsumption={oilConsumptionPerWork}
      oilConsumptionPrice={oilConsumptionPrice}
      specialPrice={specialPrice}
      paid={paid}
      total={total}
    />
  );
};

export default SubTotal;
