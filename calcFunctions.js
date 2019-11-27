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

export const calcFertilization = (area, data) => {
  const { mixed, fertilizerConsumption1, fertilizerConsumption2 } = data;
  const price1 = 30;
  const price2 = 40;
  const bagWeight1 = 25;
  const bagWeight2 = 25;

  const fertilizerBags1 = Math.ceil((area * fertilizerConsumption1) / bagWeight1) || 0;
  const fertilizerBags2 = Math.ceil((area * fertilizerConsumption2) / bagWeight2) || 0;
  const fertilizerTotal1 = fertilizerBags1 * price1 * bagWeight1 || 0;
  const fertilizerTotal2 = (mixed && fertilizerBags2 * price2 * bagWeight2) || 0;

  return fertilizerTotal1 + fertilizerTotal2;
};
