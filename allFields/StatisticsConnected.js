/* eslint-disable no-underscore-dangle */
import React from 'react';
import usePlantCalc from '../hooks/usePlantCalc';
import StatisticsPresentational from '../fieldSettings/statistics/StatisticsPresentational';

const StatisticsConnected = () => {
  const {
    oilConsumptionDone: _0oilConsumptionDone,
    oilPriceDone: _0oilPriceDone,
    paidDone: _0paidDone,
    seedDone: _0seedDone,
    oilConsumptionPlaning: _0oilConsumptionPlaning,
    oilPricePlaning: _0oilPricePlaning,
    paidPlaning: _0paidPlaning,
    seedPlaning: _0seedPlaning,
    fertilizerTotalDone: _0fertilizerTotalDone,
    fertilizerTotalPlaning: _0fertilizerTotalPlaning,
    sprayerTotalDone: _0sprayerTotalDone,
    sprayerTotalPlaning: _0sprayerTotalPlaning,
    oilConsumptionTotal: _0oilConsumptionTotal,
    oilPriceTotal: _0oilPriceTotal,
    paidTotal: _0paidTotal,
    seedTotal: _0seedTotal,
    fertilizerTotal: _0fertilizerTotal,
    sprayerTotal: _0sprayerTotal,
    doneTotal: _0doneTotal,
    planingTotal: _0planingTotal,
    total: _0total
  } = usePlantCalc('field0');

  const {
    oilConsumptionDone: _1oilConsumptionDone,
    oilPriceDone: _1oilPriceDone,
    paidDone: _1paidDone,
    seedDone: _1seedDone,
    oilConsumptionPlaning: _1oilConsumptionPlaning,
    oilPricePlaning: _1oilPricePlaning,
    paidPlaning: _1paidPlaning,
    seedPlaning: _1seedPlaning,
    fertilizerTotalDone: _1fertilizerTotalDone,
    fertilizerTotalPlaning: _1fertilizerTotalPlaning,
    sprayerTotalDone: _1sprayerTotalDone,
    sprayerTotalPlaning: _1sprayerTotalPlaning,
    oilConsumptionTotal: _1oilConsumptionTotal,
    oilPriceTotal: _1oilPriceTotal,
    paidTotal: _1paidTotal,
    seedTotal: _1seedTotal,
    fertilizerTotal: _1fertilizerTotal,
    sprayerTotal: _1sprayerTotal,
    doneTotal: _1doneTotal,
    planingTotal: _1planingTotal,
    total: _1total
  } = usePlantCalc('field1');

  const {
    oilConsumptionDone: _2oilConsumptionDone,
    oilPriceDone: _2oilPriceDone,
    paidDone: _2paidDone,
    seedDone: _2seedDone,
    oilConsumptionPlaning: _2oilConsumptionPlaning,
    oilPricePlaning: _2oilPricePlaning,
    paidPlaning: _2paidPlaning,
    seedPlaning: _2seedPlaning,
    fertilizerTotalDone: _2fertilizerTotalDone,
    fertilizerTotalPlaning: _2fertilizerTotalPlaning,
    sprayerTotalDone: _2sprayerTotalDone,
    sprayerTotalPlaning: _2sprayerTotalPlaning,
    oilConsumptionTotal: _2oilConsumptionTotal,
    oilPriceTotal: _2oilPriceTotal,
    paidTotal: _2paidTotal,
    seedTotal: _2seedTotal,
    fertilizerTotal: _2fertilizerTotal,
    sprayerTotal: _2sprayerTotal,
    doneTotal: _2doneTotal,
    planingTotal: _2planingTotal,
    total: _2total
  } = usePlantCalc('field2');

  const {
    oilConsumptionDone: _3oilConsumptionDone,
    oilPriceDone: _3oilPriceDone,
    paidDone: _3paidDone,
    seedDone: _3seedDone,
    oilConsumptionPlaning: _3oilConsumptionPlaning,
    oilPricePlaning: _3oilPricePlaning,
    paidPlaning: _3paidPlaning,
    seedPlaning: _3seedPlaning,
    fertilizerTotalDone: _3fertilizerTotalDone,
    fertilizerTotalPlaning: _3fertilizerTotalPlaning,
    sprayerTotalDone: _3sprayerTotalDone,
    sprayerTotalPlaning: _3sprayerTotalPlaning,
    oilConsumptionTotal: _3oilConsumptionTotal,
    oilPriceTotal: _3oilPriceTotal,
    paidTotal: _3paidTotal,
    seedTotal: _3seedTotal,
    fertilizerTotal: _3fertilizerTotal,
    sprayerTotal: _3sprayerTotal,
    doneTotal: _3doneTotal,
    planingTotal: _3planingTotal,
    total: _3total
  } = usePlantCalc('field3');

  const oilConsumptionDone =
    _0oilConsumptionDone +
    _1oilConsumptionDone +
    _2oilConsumptionDone +
    _3oilConsumptionDone;
  const oilPriceDone =
    _0oilPriceDone + _1oilPriceDone + _2oilPriceDone + _3oilPriceDone;
  const paidDone = _0paidDone + _1paidDone + _2paidDone + _3paidDone;
  const seedDone = _0seedDone + _1seedDone + _2seedDone + _3seedDone;
  const oilConsumptionPlaning =
    _0oilConsumptionPlaning +
    _1oilConsumptionPlaning +
    _2oilConsumptionPlaning +
    _3oilConsumptionPlaning;
  const oilPricePlaning =
    _0oilPricePlaning +
    _1oilPricePlaning +
    _2oilPricePlaning +
    _3oilPricePlaning;
  const paidPlaning =
    _0paidPlaning + _1paidPlaning + _2paidPlaning + _3paidPlaning;
  const seedPlaning =
    _0seedPlaning + _1seedPlaning + _2seedPlaning + _3seedPlaning;
  const fertilizerTotalDone =
    _0fertilizerTotalDone +
    _1fertilizerTotalDone +
    _2fertilizerTotalDone +
    _3fertilizerTotalDone;
  const fertilizerTotalPlaning =
    _0fertilizerTotalPlaning +
    _1fertilizerTotalPlaning +
    _2fertilizerTotalPlaning +
    _3fertilizerTotalPlaning;
  const sprayerTotalDone =
    _0sprayerTotalDone +
    _1sprayerTotalDone +
    _2sprayerTotalDone +
    _3sprayerTotalDone;
  const sprayerTotalPlaning =
    _0sprayerTotalPlaning +
    _1sprayerTotalPlaning +
    _2sprayerTotalPlaning +
    _3sprayerTotalPlaning;
  const oilConsumptionTotal =
    _0oilConsumptionTotal +
    _1oilConsumptionTotal +
    _2oilConsumptionTotal +
    _3oilConsumptionTotal;
  const oilPriceTotal =
    _0oilPriceTotal + _1oilPriceTotal + _2oilPriceTotal + _3oilPriceTotal;
  const paidTotal = _0paidTotal + _1paidTotal + _2paidTotal + _3paidTotal;
  const seedTotal = _0seedTotal + _1seedTotal + _2seedTotal + _3seedTotal;
  const fertilizerTotal =
    _0fertilizerTotal +
    _1fertilizerTotal +
    _2fertilizerTotal +
    _3fertilizerTotal;
  const sprayerTotal =
    _0sprayerTotal + _1sprayerTotal + _2sprayerTotal + _3sprayerTotal;
  const doneTotal = _0doneTotal + _1doneTotal + _2doneTotal + _3doneTotal;
  const planingTotal =
    _0planingTotal + _1planingTotal + _2planingTotal + _3planingTotal;
  const total = _0total + _1total + _2total + _3total;

  return (
    <StatisticsPresentational
      done={{
        oilConsumption: oilConsumptionDone,
        oilPrice: oilPriceDone,
        paid: paidDone,
        seed: seedDone,
        fertilizer: fertilizerTotalDone,
        sprayer: sprayerTotalDone,
        total: doneTotal
      }}
      planing={{
        oilConsumption: oilConsumptionPlaning,
        oilPrice: oilPricePlaning,
        paid: paidPlaning,
        seed: seedPlaning,
        fertilizer: fertilizerTotalPlaning,
        sprayer: sprayerTotalPlaning,
        total: planingTotal
      }}
      total={{
        oilConsumption: oilConsumptionTotal,
        oilPrice: oilPriceTotal,
        paid: paidTotal,
        seed: seedTotal,
        fertilizer: fertilizerTotal,
        sprayer: sprayerTotal,
        total
      }}
    />
  );
};

export default StatisticsConnected;
