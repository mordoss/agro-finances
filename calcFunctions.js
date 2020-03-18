import { prices, consumptions } from './assets/productsInfo';

export const calcSowingBags = (area, seedConsumption) => {
  const bags = Math.ceil(area / 0.007 / (seedConsumption / 100) / 25000);
  const overmeasure = bags * 25000 - area / 0.007 / (seedConsumption / 100);
  const extraArea = Math.floor(overmeasure * (seedConsumption / 100) * 0.007);

  return { bags, extraArea };
};

export const calcSowing = (area, sowingData) => {
  const { seed, seedConsumption } = sowingData;
  const { bags } = calcSowingBags(area, seedConsumption);
  const price = prices[seed];

  return bags * price;
};

export const calcSprayerBottles = (area, sprayer) => {
  const bottles = sprayer ? Math.ceil(area / consumptions[sprayer]) : 0;
  const extraArea = sprayer ? bottles * consumptions[sprayer] - area : 0;
  return { bottles, extraArea };
};

export const calcSpraying = (area, data) => {
  const { mixed, sprayer1, sprayer2 } = data;

  const { bottles: herbicideBottles1 } = calcSprayerBottles(area, sprayer1);
  const { bottles: herbicideBottles2 } = calcSprayerBottles(area, sprayer2);
  const herbicidePrice1 = herbicideBottles1 * prices[sprayer1] || 0;
  const herbicidePrice2 = (mixed && herbicideBottles2 * prices[sprayer2]) || 0;

  return herbicidePrice1 + herbicidePrice2;
};

export const calcFertilizationSegment = (area, fertilizer, fertilizerConsumption) => {
  const price = prices[fertilizer];
  const bagWeight = 25;
  const bags = fertilizer ? Math.ceil((area * fertilizerConsumption) / bagWeight) : 0;
  const extraArea = fertilizer ? Math.round((bags * bagWeight) / fertilizerConsumption - area) : 0;
  const fertilizerTotal = bags * price || 0;

  return { fertilizerTotal, bags, extraArea };
};

export const calcFertilization = (area, data) => {
  const { mixed, fertilizerConsumption1, fertilizerConsumption2, fertilizer1, fertilizer2 } = data;
  const { fertilizerTotal: fertilizerTotal1 } = calcFertilizationSegment(
    area,
    fertilizer1,
    fertilizerConsumption1
  );
  const { fertilizerTotal: fertilizerTotal2 } = calcFertilizationSegment(
    area,
    fertilizer2,
    fertilizerConsumption2
  );

  return fertilizerTotal1 + (mixed && fertilizerTotal2);
};

export const calcMidRowCultivation = (area, data) => {
  const { withFertilization, fertilizerConsumption, fertilizer } = data;

  return withFertilization
    ? calcFertilizationSegment(area, fertilizer, fertilizerConsumption).fertilizerTotal
    : 0;
};

export const calcOilAndPaidPerPlant = (worksArray, property, area) => {
  return worksArray.length > 0
    ? worksArray
        .filter(work => (property === 'paidPrice' ? work.paid : !work.paid))
        .reduce((total, work) => total + (Number(work[property]) * area) / 100, 0)
    : 0;
};
