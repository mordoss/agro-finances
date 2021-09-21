import { useSelector } from 'react-redux';

const useWorkData = field => {
  const area = useSelector(state => state.fields[field].area);
  const sowingData = useSelector(state => state.fields[field].sowingState);

  const {
    first: fertilization1Data,
    second: fertilization2Data,
    third: fertilization3Data
  } = useSelector(state => state.fields[field].fertilizationState);

  const {
    first: midRowCultivation1Data,
    second: midRowCultivation2Data
  } = useSelector(state => state.fields[field].midRowCultivationState);

  const {
    first: spraying1Data,
    second: spraying2Data,
    third: spraying3Data,
    fourth: spraying4Data
  } = useSelector(state => state.fields[field].sprayingState);

  const { done: sowingDone, planing: sowingPlaning } = useSelector(
    state => state.fields[field].groundWorksState.sowing
  );
  const {
    done: fertilization1Done,
    planing: fertilization1Planing
  } = useSelector(state => state.fields[field].groundWorksState.fertilization1);
  const {
    done: fertilization2Done,
    planing: fertilization2Planing
  } = useSelector(state => state.fields[field].groundWorksState.fertilization2);
  const {
    done: fertilization3Done,
    planing: fertilization3Planing
  } = useSelector(state => state.fields[field].groundWorksState.fertilization3);

  const {
    done: midRowCultivation1Done,
    planing: midRowCultivation1Planing
  } = useSelector(
    state => state.fields[field].groundWorksState.midRowCultivation1
  );
  const {
    done: midRowCultivation2Done,
    planing: midRowCultivation2Planing
  } = useSelector(
    state => state.fields[field].groundWorksState.midRowCultivation2
  );
  const { done: spraying1Done, planing: spraying1Planing } = useSelector(
    state => state.fields[field].groundWorksState.spraying1
  );
  const { done: spraying2Done, planing: spraying2Planing } = useSelector(
    state => state.fields[field].groundWorksState.spraying2
  );

  return {
    area,
    sowingData,
    fertilization1Data,
    fertilization2Data,
    fertilization3Data,
    midRowCultivation1Data,
    midRowCultivation2Data,
    spraying1Data,
    spraying2Data,
    spraying3Data,
    spraying4Data,
    sowingDone,
    sowingPlaning,
    fertilization1Done,
    fertilization2Done,
    fertilization3Done,
    fertilization1Planing,
    fertilization2Planing,
    fertilization3Planing,
    midRowCultivation1Done,
    midRowCultivation2Done,
    midRowCultivation1Planing,
    midRowCultivation2Planing,
    spraying1Done,
    spraying2Done,
    spraying1Planing,
    spraying2Planing
  };
};

export default useWorkData;
