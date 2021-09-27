import { useSelector } from 'react-redux';
import { worksPerPlant } from '../assets/plants';

const useCalendarWorks = (field, filterValue) => {
  const plant = useSelector(state => state.fields[field].plant);
  const works = useSelector(state =>
    plant
      ? Object.values(state.fields[field].groundWorksState).filter(work =>
          worksPerPlant[plant].includes(work.workName)
        )
      : []
  )
    .filter(work => {
      if (filterValue === 'all') {
        return work.done || work.planing;
      }
      return work[filterValue];
    })
    .map(work => [work, plant]);

  return works;
};

export default useCalendarWorks;
