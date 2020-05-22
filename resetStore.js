import { changeSeed, changeSeedConsumption } from './redux/actions/specialActions';
import { plantToAverageSeedConsumption } from './helperFunctions';

const resetStore = (field, plant, dispatch) => {
  const seedConsumption = plantToAverageSeedConsumption(plant);
  dispatch(changeSeedConsumption({ field }, seedConsumption));
  dispatch(changeSeed({ field }, ''));
};

export default resetStore;
