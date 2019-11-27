import React from 'react';
import { useSelector } from 'react-redux';
import WorkCard from './WorkCard';

const plantSpecificWorks = {
  Kukuruz: ['plowing', 'fertilization1', 'sowing', 'spraying1'],
  Soja: ['disking', 'fertilization2'],
  Pšenica: ['plowing', 'sowing'],
  Suncokret: ['plowing', 'spraying2'],
};

const Works = ({ field, plant }) => {
  const {
    plowing,
    disking,
    horrowing,
    harvesting,
    sowing,
    fertilization1,
    fertilization2,
    spraying1,
    spraying2,
  } = useSelector(state => ({
    plowing: state[field].groundWorksState.plowing,
    disking: state[field].groundWorksState.disking,
    horrowing: state[field].groundWorksState.horrowing,
    harvesting: state[field].groundWorksState.harvesting,
    sowing: {
      ...state[field].groundWorksState.sowing,
      special: { ...state[field].sowingState },
    },
    fertilization1: {
      ...state[field].groundWorksState.fertilization1,
      special: { ...state[field].fertilizationState.first },
    },
    fertilization2: {
      ...state[field].groundWorksState.fertilization2,
      special: { ...state[field].fertilizationState.second },
    },
    spraying1: {
      ...state[field].groundWorksState.spraying1,
      special: { ...state[field].sprayingState.first },
    },
    spraying2: {
      ...state[field].groundWorksState.spraying2,
      special: { ...state[field].sprayingState.second },
    },
  }));

  const works = {
    plowing: { name: 'Oranje', workName: 'plowing', work: plowing },
    disking: { name: 'Tanjiranje', workName: 'disking', work: disking },
    horrowing: {
      name: 'Setvospremanje',
      workName: 'horrowing',
      work: horrowing,
    },
    harvesting: { name: 'Berba', workName: 'harvesting', work: harvesting },
    sowing: { name: 'Setva', workName: 'sowing', work: sowing },
    spraying1: {
      name: 'Prva Zaštita',
      workName: 'spraying1',
      work: spraying1,
    },
    spraying2: {
      name: 'Druga Zaštita',
      workName: 'spraying2',
      work: spraying2,
    },
    fertilization1: {
      name: 'Prva Prihrana',
      workName: 'fertilization1',
      work: fertilization1,
    },
    fertilization2: {
      name: 'Druga Prihrana',
      workName: 'fertilization2',
      work: fertilization2,
    },
  };

  return (
    <>
      {plantSpecificWorks[plant].map(work => (
        <WorkCard
          key={works[work].workName}
          field={field}
          work={works[work].work}
          name={works[work].name}
          workName={works[work].workName}
        />
      ))}
    </>
  );
};

export default Works;
