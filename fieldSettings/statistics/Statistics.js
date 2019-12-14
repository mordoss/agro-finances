import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Text } from '../../components';

const Statistics = ({ field }) => {
  const area = useSelector(state => state[field].area);
  const doneWorks = useSelector(state =>
    Object.values(state[field].groundWorksState).filter(work => work.done && !work.paid)
  );
  const oilConsumptionDone =
    (doneWorks.reduce((total, work) => total + Number(work.oilConsumption), 0) * area) / 100;

  return (
    <Block>
      <Text>Litara nafte: {oilConsumptionDone}</Text>
      <Text>Nafta: {oilConsumptionDone * 150} </Text>
    </Block>
  );
};

export default Statistics;
