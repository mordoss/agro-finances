export const calcSowingBags = (area, consumption, plant) => {
  if (plant === 'Kukuruz' || plant === 'Suncokret') {
    const seedsInBag = plant === 'Kukuruz' ? 25000 : 75000;
    const bags = Math.ceil(area / 0.007 / (consumption / 100) / seedsInBag);
    const overmeasure = bags * 25000 - area / 0.007 / (consumption / 100);
    const extraArea = Math.floor(overmeasure * (consumption / 100) * 0.007);
    return { bags, extraArea };
  }

  if (plant === 'Pšenica') {
    const bags = Math.ceil((area * consumption) / 50);
    const overmeasure = bags * 50 - consumption * area;
    const extraArea = Math.floor(overmeasure / consumption);
    return { bags, extraArea };
  }

  if (plant === 'Soja') {
    const seedsInBag = 150000;
    const bags = Math.ceil(area / 0.004 / (consumption / 100) / seedsInBag);
    const overmeasure = bags * 25000 - area / 0.007 / (consumption / 100);
    const extraArea = Math.floor(overmeasure * (consumption / 100) * 0.007);
    return { bags, extraArea };
  }

  return { bags: 0, extraArea: 0 };
};

export const calcSowing = (area, sowingData, price, plant) => {
  const { seed, seedConsumption } = sowingData;
  if (seed !== '') {
    const { bags } = calcSowingBags(area, seedConsumption, plant);
    const bagPrice = price[seed][0];

    return bags * bagPrice;
  }
  return 0;
};

export const calcSprayerBottles = (area, sprayer, sprayerActive, consumption) => {
  if (sprayer) {
    const bottles = sprayer ? Math.ceil(area / consumption) : 0;
    const extraArea = sprayer ? bottles * consumption - area : 0;
    return { bottles, extraArea };
  }
  return { bottles: 0, extraArea: 0 };
};

export const calcSpraying = (area, data, products) => {
  const { sprayer1, sprayer2, sprayer3, sprayer1Active, sprayer2Active, sprayer3Active } = data;

  const [bottlePrice1, , bottleConsumption1] = sprayer1 !== '' ? products[sprayer1] : [0, 0];
  const [bottlePrice2, , bottleConsumption2] = sprayer2 !== '' ? products[sprayer2] : [0, 0];
  const [bottlePrice3, , bottleConsumption3] = sprayer3 !== '' ? products[sprayer3] : [0, 0];

  const { bottles: herbicideBottles1 } = calcSprayerBottles(
    area,
    sprayer1,
    sprayer1Active,
    bottleConsumption1
  );
  const { bottles: herbicideBottles2 } = calcSprayerBottles(
    area,
    sprayer2,
    sprayer2Active,
    bottleConsumption2
  );
  const { bottles: herbicideBottles3 } = calcSprayerBottles(
    area,
    sprayer3,
    sprayer3Active,
    bottleConsumption3
  );

  const herbicidePrice1 = herbicideBottles1 * bottlePrice1;
  const herbicidePrice2 = herbicideBottles2 * bottlePrice2;
  const herbicidePrice3 = herbicideBottles3 * bottlePrice3;

  return herbicidePrice1 + herbicidePrice2 + herbicidePrice3;
};

export const calcFertilizationSegment = (area, fertilizer, consumption) => {
  const bagWeight = 25;
  if (fertilizer !== '') {
    const bags = Math.ceil((area * consumption) / bagWeight);
    const extraArea = Math.round((bags * bagWeight) / consumption - area);
    return { bags, extraArea };
  }
  return { bags: 0, extraArea: 0 };
};

export const calcFertilization = (area, data, price) => {
  const { mixed, fertilizerConsumption1, fertilizerConsumption2, fertilizer1, fertilizer2 } = data;
  const { bags: bags1 } = calcFertilizationSegment(area, fertilizer1, fertilizerConsumption1);
  const { bags: bags2 } = calcFertilizationSegment(area, fertilizer2, fertilizerConsumption2);

  return (
    (fertilizer1 ? bags1 * price[fertilizer1][0] * 50 : 0) +
    (fertilizer2 && mixed ? bags2 * price[fertilizer2][0] * 50 : 0)
  );
};

export const calcMidRowCultivation = (area, data, price) => {
  const { withFertilization, fertilizerConsumption, fertilizer } = data;

  const { bags } = calcFertilizationSegment(area, fertilizer, fertilizerConsumption);
  return withFertilization && fertilizer ? bags * price[fertilizer][0] * 50 : 0;
};

export const calcOilAndPaidPerPlant = (worksArray, property, area) => {
  return worksArray.length > 0
    ? worksArray
        .filter(work => (property === 'paidPrice' ? work.paid : !work.paid))
        .reduce((total, work) => total + (Number(work[property]) * area) / 100, 0)
    : 0;
};
