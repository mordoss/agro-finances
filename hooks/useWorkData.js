import { useSelector } from 'react-redux';

const useWorkData = field => {
  const area = useSelector(state => state[field].area);
  const sowingData = useSelector(state => state[field].sowingState);

  const { first: fertilization1Data, second: fertilization2Data } = useSelector(
    state => state[field].fertilizationState
  );

  const { first: midRowCultivation1Data, second: midRowCultivation2Data } = useSelector(
    state => state[field].midRowCultivationState
  );

  const { first: spraying1Data, second: spraying2Data } = useSelector(
    state => state[field].sprayingState
  );

  const { done: sowingDone, planing: sowingPlaning } = useSelector(
    state => state[field].groundWorksState.sowing
  );
  const { done: fertilization1Done, planing: fertilization1Planing } = useSelector(
    state => state[field].groundWorksState.fertilization1
  );
  const { done: fertilization2Done, planing: fertilization2Planing } = useSelector(
    state => state[field].groundWorksState.fertilization2
  );

  const { done: midRowCultivation1Done, planing: midRowCultivation1Planing } = useSelector(
    state => state[field].groundWorksState.midRowCultivation1
  );
  const { done: midRowCultivation2Done, planing: midRowCultivation2Planing } = useSelector(
    state => state[field].groundWorksState.midRowCultivation2
  );
  const { done: spraying1Done, planing: spraying1Planing } = useSelector(
    state => state[field].groundWorksState.spraying1
  );
  const { done: spraying2Done, planing: spraying2Planing } = useSelector(
    state => state[field].groundWorksState.spraying2
  );

  return {
    area,
    sowingData,
    fertilization1Data,
    fertilization2Data,
    midRowCultivation1Data,
    midRowCultivation2Data,
    spraying1Data,
    spraying2Data,
    sowingDone,
    sowingPlaning,
    fertilization1Done,
    fertilization2Done,
    fertilization1Planing,
    fertilization2Planing,
    midRowCultivation1Done,
    midRowCultivation2Done,
    midRowCultivation1Planing,
    midRowCultivation2Planing,
    spraying1Done,
    spraying2Done,
    spraying1Planing,
    spraying2Planing,
  };
};

export default useWorkData;
