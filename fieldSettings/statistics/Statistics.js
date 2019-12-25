import React from 'react';
import usePlantCalc from './usePlantCalc';
import StatisticsPresentational from './StatisticsPresentational';

const Statistics = ({ field }) => {
  const {
    oilConsumptionDone,
    paidDone,
    seedDone,
    oilConsumptionPlaning,
    paidPlaning,
    seedPlaning,
    fertilizerTotalDone,
    fertilizerTotalPlaning,
    sprayerTotalDone,
    sprayerTotalPlaning,
  } = usePlantCalc(field);

  return (
    <StatisticsPresentational
      done={{
        oilConsumption: oilConsumptionDone,
        paid: paidDone,
        seed: seedDone,
        fertilizer: fertilizerTotalDone,
        sprayer: sprayerTotalDone,
      }}
      planing={{
        oilConsumption: oilConsumptionPlaning,
        paid: paidPlaning,
        seed: seedPlaning,
        fertilizer: fertilizerTotalPlaning,
        sprayer: sprayerTotalPlaning,
      }}
    />
  );
};

export default Statistics;
