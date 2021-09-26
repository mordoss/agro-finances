import { useSelector } from 'react-redux';
import { worksPerPlant } from '../assets/plants';

const usePlanedWorks = field => {
  const plant = useSelector(state => state.fields[field].plant);
  const works = useSelector(state =>
    plant
      ? Object.values(state.fields[field].groundWorksState).filter(work =>
          worksPerPlant[plant].includes(work.workName)
        )
      : []
  )
    .filter(work => work.planing)
    .map(work => [work, plant]);

  return works;
};

export default usePlanedWorks;
