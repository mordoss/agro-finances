export const calcSowing = (area, consumption) => {
  return Math.ceil((area * 100) / 0.7 / (consumption / 100) / 25000);
};

export const calcSpraying = (area, data) => {
  const { mixed } = data;
  const sprayer1Test = { area: 40, price: 1000 };
  const sprayer2Test = { area: 40, price: 1000 };

  const herbicideBottles1 = Math.ceil(area / sprayer1Test.area) || 0;
  const herbicideBottles2 = Math.ceil(area / sprayer2Test.area) || 0;
  const herbicidePrice1 = herbicideBottles1 * sprayer1Test.price || 0;
  const herbicidePrice2 = (mixed && herbicideBottles2 * sprayer2Test.price) || 0;

  return herbicidePrice1 + herbicidePrice2;
};

const calcFertilizationSegment = (area, fertilizerConsumption) => {
  const price = 40;
  const bagWeight = 25;
  const fertilizerBags = Math.ceil((area * fertilizerConsumption) / bagWeight) || 0;
  const fertilizerTotal = fertilizerBags * price * bagWeight || 0;

  return fertilizerTotal;
};

export const calcFertilization = (area, data) => {
  const { mixed, fertilizerConsumption1, fertilizerConsumption2 } = data;

  const fertilizerTotal1 = calcFertilizationSegment(area, fertilizerConsumption1);
  const fertilizerTotal2 = calcFertilizationSegment(area, fertilizerConsumption2);

  return fertilizerTotal1 + (mixed && fertilizerTotal2);
};

export const calcMidRowCultivation = (area, data) => {
  const { withFertilization, fertilizerConsumption } = data;

  return withFertilization ? calcFertilizationSegment(area, fertilizerConsumption) : 0;
};

export const calcOilAndPaidPerPlant = (worksArray, property, area) => {
  return worksArray
    .filter(work => (property === 'paidPrice' ? work.paid : !work.paid))
    .reduce((total, work) => total + (Number(work[property]) * area) / 100, 0);
};
