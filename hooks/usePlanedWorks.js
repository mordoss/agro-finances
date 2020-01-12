import { useSelector } from 'react-redux';
import { worksPerPlant } from '../assets/plants';

const usePlanedWorks = index => {
  const plant = useSelector(state => state[`field${index}`].plant);
  const works = useSelector(state =>
    plant
      ? Object.values(state[`field${index}`].groundWorksState).filter(work =>
          worksPerPlant[plant].includes(work.workName)
        )
      : []
  )
    .filter(work => work.planing)
    .map(work => [work, plant]);

  return works;
};

export default usePlanedWorks;
