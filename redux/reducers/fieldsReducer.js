import { changeGroundWorksState1 } from '../../utils/helperFunctions';
import field0 from '../store/field0';

function fieldsReducer(state = [], action) {
  const { field } = action;
  const newState = [...state];

  switch (action.type) {
    case 'LOAD_FIELDS_DB':
      return Object.values(action.payload);

    case 'ADD_FIELD':
      return [...state, field0];

    case 'REMOVE_FIELD':
      newState.splice(field, 1);
      return newState;

    case 'AREA_CHANGED':
      newState[field] = { ...newState[field], area: +action.value };
      return newState;

    case 'YIELD_CHANGED':
      newState[field] = { ...newState[field], yieldPerHa: action.value };
      return newState;

    case 'PRODUCT_PRICE_CHANGED':
      newState[field] = { ...newState[field], productPrice: action.value };
      return newState;

    case 'PLANT_CHANGED':
      newState[field] = { ...newState[field], plant: action.value };
      return newState;

    case 'NOTE_CHANGED':
      newState[field] = { ...newState[field], note: action.value };
      return newState;

    case 'RENTED_CHANGED':
      newState[field] = {
        ...newState[field],
        rented: !action.value
      };
      return newState;

    case 'RENTED_PRICE_CHANGED':
      newState[field] = {
        ...newState[field],
        rentedPrice: +action.value
      };
      return newState;

    case 'DONE_CHANGED':
      newState[field].groundWorksState = {
        ...newState[field].groundWorksState,
        [action.workName]: {
          ...newState[field].groundWorksState[action.workName],
          done: !action.value,
          planing: false
        }
      };
      return newState;

    case 'PLANING_CHANGED':
      newState[field].groundWorksState = {
        ...newState[field].groundWorksState,
        [action.workName]: {
          ...newState[field].groundWorksState[action.workName],
          done: false,
          planing: !action.value
        }
      };
      return newState;

    case 'PAID_CHANGED':
      newState[field].groundWorksState = {
        ...newState[field].groundWorksState,
        [action.workName]: {
          ...newState[field].groundWorksState[action.workName],
          paid: !action.value
        }
      };
      return newState;

    case 'PAID_PRICE_CHANGED':
      return changeGroundWorksState1(state, action, 'paidPrice');

    case 'DATE_CHANGED':
      return changeGroundWorksState1(state, action, 'date');

    case 'OIL_CONSUMPTION_CHANGED':
      return changeGroundWorksState1(state, action, 'oilConsumption');

    case 'SEED_CHANGED':
      newState[field].sowingState = {
        ...newState[field].sowingState,
        seed: action.item
      };
      return newState;

    case 'SPRAYER_OR_FERTILIZER_CHANGED':
      newState[field][action.workState] = {
        ...newState[field][action.workState],
        [action.turn]: {
          ...newState[field][action.workState][action.turn],
          [action.propertyName]: action.item
        }
      };
      return newState;

    case 'MIXED_CHANGED':
      newState[field][action.workState] = {
        ...newState[field][action.workState],
        [action.turn]: {
          ...newState[field][action.workState][action.turn],
          mixed: !action.value
        }
      };
      return newState;

    case 'SPRAYER_ACTIVE_CHANGED':
      newState[field].sprayingState = {
        ...newState[field].sprayingState,
        [action.turn]: {
          ...newState[field].sprayingState[action.turn],
          [action.place]: !action.value
        }
      };
      return newState;

    case 'SEED_CONSUMPTION_CHANGED':
      newState[field].sowingState = {
        ...newState[field].sowingState,
        seedConsumption: +action.value
      };
      return newState;

    case 'SEED_CONSUMPTION_CHANGED_INCREMENTING':
      newState[field].sowingState = {
        ...newState[field].sowingState,
        seedConsumption:
          action.adjective === 'inc' ? action.value + 1 : action.value - 1
      };
      return newState;

    case 'FERTILIZER_CONSUMPTION_CHANGED':
      newState[field][action.workState] = {
        ...newState[field][action.workState],
        [action.turn]: {
          ...newState[field][action.workState][action.turn],
          [action.propertyName]: action.value
        }
      };
      return newState;

    case 'FERTILIZER_CONSUMPTION_CHANGED_INCREMENTING':
      newState[field][action.workState] = {
        ...newState[field][action.workState],
        [action.turn]: {
          ...newState[field][action.workState][action.turn],
          [action.propertyName]:
            action.adjective === 'inc'
              ? Math.round((action.value + 0.1) * 100) / 100
              : Math.round((action.value - 0.1) * 100) / 100
        }
      };
      return newState;

    case 'WITH_FERTILIZATION_CHANGED':
      newState[field].midRowCultivationState = {
        ...newState[field].midRowCultivationState,
        [action.turn]: {
          ...newState[field].midRowCultivationState[action.turn],
          withFertilization: !action.value
        }
      };
      return newState;

    default:
      return state;
  }
}

export default fieldsReducer;
