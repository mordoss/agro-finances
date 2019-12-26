import { useSelector } from 'react-redux';
import { worksPerPlant } from '../../assets/plants';
import {
  calcOilAndPaidPerPlant,
  calcSowing,
  calcSpraying,
  calcMidRowCultivation,
  calcFertilization,
} from '../../calcFunctions';

// DON'T LOOK AT MEEE!!!
const usePlantCalc = field => {
  const area = useSelector(state => state[field].area);
  const plant = useSelector(state => state[field].plant);
  const { seedConsumption } = useSelector(state => state[field].sowingState);
  const { done: sowingDone, planing: sowingPlaning } = useSelector(
    state => state[field].groundWorksState.sowing
  );
  const { done: fertilization1Done, planing: fertilization1Planing } = useSelector(
    state => state[field].groundWorksState.fertilization1
  );
  const { done: fertilization2Done, planing: fertilization2Planing } = useSelector(
    state => state[field].groundWorksState.fertilization2
  );
  const { first: fertilization1Data, second: fertilization2Data } = useSelector(
    state => state[field].fertilizationState
  );
  const { done: midRowCultivation1Done, planing: midRowCultivation1Planing } = useSelector(
    state => state[field].groundWorksState.midRowCultivation1
  );
  const { done: midRowCultivation2Done, planing: midRowCultivation2Planing } = useSelector(
    state => state[field].groundWorksState.midRowCultivation2
  );
  const { first: midRowCultivation1Data, second: midRowCultivation2Data } = useSelector(
    state => state[field].midRowCultivationState
  );

  const { done: spraying1Done, planing: spraying1Planing } = useSelector(
    state => state[field].groundWorksState.spraying1
  );
  const { done: spraying2Done, planing: spraying2Planing } = useSelector(
    state => state[field].groundWorksState.spraying2
  );

  const { first: spraying1Data, second: spraying2Data } = useSelector(
    state => state[field].sprayingState
  );

  const allWorks = useSelector(state =>
    Object.values(state[field].groundWorksState).filter(work =>
      worksPerPlant[plant].includes(work.workName)
    )
  );
  const doneWorks = allWorks.filter(work => work.done);
  const planingWorks = allWorks.filter(work => work.planing);

  const oilConsumptionDone = calcOilAndPaidPerPlant(doneWorks, 'oilConsumption', area);
  const oilPriceDone = oilConsumptionDone * 150;
  const paidDone = calcOilAndPaidPerPlant(doneWorks, 'paidPrice', area);
  const seedDone = sowingDone ? calcSowing(area, seedConsumption) : 0;
  const fertilizer1Done = fertilization1Done ? calcFertilization(area, fertilization1Data) : 0;
  const fertilizer2Done = fertilization2Done ? calcFertilization(area, fertilization2Data) : 0;
  const fertilizer1MidDone = midRowCultivation1Done
    ? calcMidRowCultivation(area, midRowCultivation1Data)
    : 0;
  const fertilizer2MidDone = midRowCultivation2Done
    ? calcMidRowCultivation(area, midRowCultivation2Data)
    : 0;
  const sprayer1Done = spraying1Done ? calcSpraying(area, spraying1Data) : 0;
  const sprayer2Done = spraying2Done ? calcSpraying(area, spraying2Data) : 0;

  const oilConsumptionPlaning = calcOilAndPaidPerPlant(planingWorks, 'oilConsumption', area);
  const oilPricePlaning = oilConsumptionPlaning * 150;
  const paidPlaning = calcOilAndPaidPerPlant(planingWorks, 'paidPrice', area);
  const seedPlaning = sowingPlaning ? calcSowing(area, seedConsumption) : 0;
  const fertilizer1Planing = fertilization1Planing
    ? calcFertilization(area, fertilization1Data)
    : 0;
  const fertilizer2Planing = fertilization2Planing
    ? calcFertilization(area, fertilization2Data)
    : 0;
  const fertilizer1MidPlaning = midRowCultivation1Planing
    ? calcMidRowCultivation(area, midRowCultivation1Data)
    : 0;
  const fertilizer2MidPlaning = midRowCultivation2Planing
    ? calcMidRowCultivation(area, midRowCultivation2Data)
    : 0;
  const sprayer1Planing = spraying1Planing ? calcSpraying(area, spraying2Data) : 0;
  const sprayer2Planing = spraying2Planing ? calcSpraying(area, spraying2Data) : 0;

  const fertilizerTotalDone =
    fertilizer1Done + fertilizer2Done + fertilizer1MidDone + fertilizer2MidDone;
  const fertilizerTotalPlaning =
    fertilizer1Planing + fertilizer2Planing + fertilizer1MidPlaning + fertilizer2MidPlaning;

  const sprayerTotalDone = sprayer1Done + sprayer2Done;
  const sprayerTotalPlaning = sprayer1Planing + sprayer2Planing;

  const doneTotal = oilPriceDone + paidDone + seedDone + fertilizerTotalDone + sprayerTotalDone;
  const planingTotal =
    oilPricePlaning + paidPlaning + seedPlaning + fertilizerTotalPlaning + sprayerTotalPlaning;

  const oilConsumptionTotal = oilConsumptionDone + oilConsumptionPlaning;
  const oilPriceTotal = oilPriceDone + oilPricePlaning;
  const paidTotal = paidDone + paidPlaning;
  const seedTotal = seedDone + seedPlaning;
  const fertilizerTotal = fertilizerTotalDone + fertilizerTotalPlaning;
  const sprayerTotal = sprayerTotalDone + sprayerTotalPlaning;
  const total = doneTotal + planingTotal;

  return {
    oilConsumptionDone,
    oilPriceDone,
    paidDone,
    seedDone,
    oilConsumptionPlaning,
    oilPricePlaning,
    paidPlaning,
    seedPlaning,
    fertilizerTotalDone,
    fertilizerTotalPlaning,
    sprayerTotalDone,
    sprayerTotalPlaning,
    oilConsumptionTotal,
    oilPriceTotal,
    paidTotal,
    seedTotal,
    fertilizerTotal,
    sprayerTotal,
    doneTotal,
    planingTotal,
    total,
  };
};

export default usePlantCalc;
