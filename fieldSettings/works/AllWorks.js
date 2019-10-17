import React from 'react';
import { useSelector } from 'react-redux';
import Work from './Work';

const plantSpecificWorks = {
  Kukuruz: ['plowing', 'fertilization1'],
  Soja: ['disking', 'fertilization2'],
  Pšenica: ['plowing', 'sowing'],
  Suncokret: ['plowing', 'spraying2'],
};

const AllWorks = props => {
  const { field, plant } = props;
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

  const allWorks = {
    plowing: { name: 'Oranje', propertyName: 'plowing', work: plowing },
    disking: { name: 'Drljanje', propertyName: 'disking', work: disking },
    horrowing: {
      name: 'Setvospremanje',
      propertyName: 'horrowing',
      work: horrowing,
    },
    harvesting: { name: 'Berba', propertyName: 'harvesting', work: harvesting },
    sowing: { name: 'Setva', propertyName: 'sowing', work: sowing },
    spraying1: {
      name: 'Prva Zaštita',
      propertyName: 'spraying1',
      work: spraying1,
    },
    spraying2: {
      name: 'Druga Zaštita',
      propertyName: 'spraying2',
      work: spraying2,
    },
    fertilization1: {
      name: 'Prva Prihrana',
      propertyName: 'fertilization1',
      work: fertilization1,
    },
    fertilization2: {
      name: 'Druga Prihrana',
      propertyName: 'fertilization2',
      work: fertilization2,
    },
  };

  return (
    <>
      {plantSpecificWorks[plant].map(work => (
        <Work
          key={allWorks[work].propertyName}
          field={field}
          work={allWorks[work].work}
          name={allWorks[work].name}
          propertyName={allWorks[work].propertyName}
        />
      ))}
    </>
  );
};

export default AllWorks;
