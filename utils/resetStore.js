import {
  changeYield,
  changeProductPrice
} from '../redux/actions/basicStateActions';
import { changeDone, changePlaning } from '../redux/actions/cammonWorkActions';
import {
  changeSeed,
  changeSeedConsumption,
  changeSprayerActive,
  changeSprayerOrFertilizer,
  changeMixed
} from '../redux/actions/specialActions';
import {
  plantToAverageSeedConsumption,
  plantToAverageYieldPerHa,
  plantToAverageProductPrice
} from './helperFunctions';
import { worksPerPlant } from '../assets/plants';

const turns = ['first', 'second', 'third', 'fourth'];

const resetStore = (field, plant, dispatch) => {
  const yieldPerHa = plantToAverageYieldPerHa(plant);
  const productPrice = plantToAverageProductPrice(plant);
  const seedConsumption = plantToAverageSeedConsumption(plant);

  dispatch(changeYield({ field }, yieldPerHa));
  dispatch(changeProductPrice({ field }, productPrice));

  dispatch(changeSeed({ field }, ''));
  dispatch(changeSeedConsumption({ field }, seedConsumption));

  worksPerPlant[plant].forEach(workName => {
    dispatch(changeDone({ field, workName, value: true }));
    dispatch(changePlaning({ field, workName, value: true }));
  });

  turns.forEach(turn => {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 4; i++) {
      dispatch(changeSprayerActive({ field, place: i, turn, value: true }));
      dispatch(
        changeSprayerOrFertilizer(
          {
            field,
            propertyName: `sprayer${i}`,
            turn,
            workState: 'sprayingState'
          },
          ''
        )
      );
      if (turn !== 'fourth' && i !== 3) {
        dispatch(
          changeMixed({
            field,
            workState: 'fertilizationState',
            turn,
            value: true
          })
        );
        dispatch(
          changeSprayerOrFertilizer(
            {
              field,
              propertyName: `fertilizer${i}`,
              turn,
              workState: 'fertilizationState'
            },
            ''
          )
        );
      }
    }
  });
};

export default resetStore;
