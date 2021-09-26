/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';

import { ScrollView } from 'react-native-gesture-handler';
import usePlantCalc from '../hooks/usePlantCalc';
import StatisticsPresentational from '../fieldSettings/statistics/StatisticsPresentational';

const StatisticsConnected = () => {
  const numberOfFields = useSelector(state => state.fields.length);
  const fieldsArr = [...Array(numberOfFields).keys()];

  const data = fieldsArr
    // this isn't classic hook
    .map((f, i) => usePlantCalc(i))
    .reduce(
      (acc, cur) => {
        // need to optimise this loop
        for (property in acc) {
          acc[property] += cur[property];
        }
        return acc;
      },
      {
        oilConsumptionDone: 0,
        oilPriceDone: 0,
        paidDone: 0,
        seedDone: 0,
        oilConsumptionPlaning: 0,
        oilPricePlaning: 0,
        paidPlaning: 0,
        seedPlaning: 0,
        fertilizerTotalDone: 0,
        fertilizerTotalPlaning: 0,
        sprayerTotalDone: 0,
        sprayerTotalPlaning: 0,
        oilConsumptionTotal: 0,
        oilPriceTotal: 0,
        paidTotal: 0,
        seedTotal: 0,
        fertilizerTotal: 0,
        sprayerTotal: 0,
        doneTotal: 0,
        planingTotal: 0,
        rented: 0,
        total: 0
      }
    );

  return (
    <StatisticsPresentational
      done={{
        oilConsumption: data.oilConsumptionDone,
        oilPrice: data.oilPriceDone,
        paid: data.paidDone,
        seed: data.seedDone,
        fertilizer: data.fertilizerTotalDone,
        sprayer: data.sprayerTotalDone,
        total: data.doneTotal
      }}
      planing={{
        oilConsumption: data.oilConsumptionPlaning,
        oilPrice: data.oilPricePlaning,
        paid: data.paidPlaning,
        seed: data.seedPlaning,
        fertilizer: data.fertilizerTotalPlaning,
        sprayer: data.sprayerTotalPlaning,
        total: data.planingTotal
      }}
      total={{
        oilConsumption: data.oilConsumptionTotal,
        oilPrice: data.oilPriceTotal,
        paid: data.paidTotal,
        seed: data.seedTotal,
        fertilizer: data.fertilizerTotal,
        sprayer: data.sprayerTotal,
        total: data.total
      }}
    />
  );
};

export default StatisticsConnected;
