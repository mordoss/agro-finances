import React from 'react';
import { useSelector } from 'react-redux';
import WorkCard from './WorkCard';
import { worksPerPlant } from '../../assets/plants';

const WorksConnected = ({ field }) => {
  const plant = useSelector(state => state[field].plant);

  const {
    plowing,
    disking,
    horrowing,
    harvesting,
    sowing,
    fertilization1,
    fertilization2,
    fertilization3,
    spraying1,
    spraying2,
    spraying3,
    spraying4,
    midRowCultivation1,
    midRowCultivation2,
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
    fertilization3: {
      ...state[field].groundWorksState.fertilization3,
      special: { ...state[field].fertilizationState.third },
    },
    spraying1: {
      ...state[field].groundWorksState.spraying1,
      special: { ...state[field].sprayingState.first },
    },
    spraying2: {
      ...state[field].groundWorksState.spraying2,
      special: { ...state[field].sprayingState.second },
    },
    spraying3: {
      ...state[field].groundWorksState.spraying3,
      special: { ...state[field].sprayingState.third },
    },
    spraying4: {
      ...state[field].groundWorksState.spraying4,
      special: { ...state[field].sprayingState.fourth },
    },
    midRowCultivation1: {
      ...state[field].groundWorksState.midRowCultivation1,
      special: { ...state[field].midRowCultivationState.first },
    },
    midRowCultivation2: {
      ...state[field].groundWorksState.midRowCultivation2,
      special: { ...state[field].midRowCultivationState.second },
    },
  }));

  const works = {
    plowing: { name: 'Oranje', work: plowing },
    disking: { name: 'Tanjiranje', work: disking },
    horrowing: {
      name: 'Setvospremanje',
      work: horrowing,
    },
    harvesting: { name: 'Berba', work: harvesting },
    sowing: { name: 'Setva', work: sowing },
    spraying1: {
      name: 'Prva Zaštita',
      work: spraying1,
    },
    spraying2: {
      name: 'Druga Zaštita',
      work: spraying2,
    },
    spraying3: {
      name: 'Treća Zaštita',
      work: spraying3,
    },
    spraying4: {
      name: 'Četvrta Zaštita',
      work: spraying4,
    },
    fertilization1: {
      name: 'Prva Prihrana',
      work: fertilization1,
    },
    fertilization2: {
      name: 'Druga Prihrana',
      work: fertilization2,
    },
    fertilization3: {
      name: 'Treća Prihrana',
      work: fertilization3,
    },
    midRowCultivation1: {
      name: 'Prva Međuredna',
      work: midRowCultivation1,
    },
    midRowCultivation2: {
      name: 'Druga Međuredna',
      work: midRowCultivation2,
    },
  };

  return (
    <>
      {worksPerPlant[plant].map(work => (
        <WorkCard
          key={works[work].work.workName}
          field={field}
          plant={plant}
          work={works[work].work}
          name={works[work].name}
        />
      ))}
    </>
  );
};

export default WorksConnected;
