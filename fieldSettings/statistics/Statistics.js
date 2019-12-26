import React from 'react';
import usePlantCalc from './usePlantCalc';
import StatisticsPresentational from './StatisticsPresentational';

const Statistics = ({ field }) => {
  const {
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
  } = usePlantCalc(field);

  return (
    <StatisticsPresentational
      done={{
        oilConsumption: oilConsumptionDone,
        oilPrice: oilPriceDone,
        paid: paidDone,
        seed: seedDone,
        fertilizer: fertilizerTotalDone,
        sprayer: sprayerTotalDone,
        total: doneTotal,
      }}
      planing={{
        oilConsumption: oilConsumptionPlaning,
        oilPrice: oilPricePlaning,
        paid: paidPlaning,
        seed: seedPlaning,
        fertilizer: fertilizerTotalPlaning,
        sprayer: sprayerTotalPlaning,
        total: planingTotal,
      }}
      total={{
        oilConsumption: oilConsumptionTotal,
        oilPrice: oilPriceTotal,
        paid: paidTotal,
        seed: seedTotal,
        fertilizer: fertilizerTotal,
        sprayer: sprayerTotal,
        total,
      }}
    />
  );
};

export default Statistics;
