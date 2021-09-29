import { useSelector } from 'react-redux';
import { worksPerPlant } from '../assets/plants';

const useCalendarWorks = (field, filterValue, isDate) => {
  const plant = useSelector(state => state.fields[field].plant);
  const works = useSelector(state =>
    plant
      ? Object.values(state.fields[field].groundWorksState).filter(work =>
          worksPerPlant[plant].includes(work.workName)
        )
      : []
  )
    .map(work => ({ ...work, plant }))
    .filter(work => {
      if (filterValue === 'all') {
        return work.done || work.planing;
      }
      return work[filterValue];
    })
    .filter(work => {
      if (isDate) {
        return work.date;
      }
      return true;
    });

  return works;
};

export default useCalendarWorks;
