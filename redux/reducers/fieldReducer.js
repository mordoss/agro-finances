function createFieldReducer(fieldNumber) {
  return function fieldReducer(state = 0, action) {
    const { field } = action;
    if (field !== fieldNumber) return state;

    switch (action.type) {
      case 'AREA_CHANGED':
        return {
          ...state,
          area: action.value,
        };
      case 'PLANT_CHANGED':
        return {
          ...state,
          plant: action.value,
        };
      case 'NOTE_CHANGED':
        return {
          ...state,
          note: action.value,
        };

      case 'RENTED_CHANGED':
        return {
          ...state,
          rented: !action.value,
        };

      case 'RENTED_PRICE_CHANGED':
        return {
          ...state,
          rentedPrice: action.value,
        };

      case 'DONE_CHANGED':
        return {
          ...state,
          groundWorksState: {
            ...state.groundWorksState,
            [action.work]: {
              ...state.groundWorksState[action.work],
              done: !action.value,
              planing: false,
            },
          },
        };
      case 'PLANING_CHANGED':
        return {
          ...state,
          groundWorksState: {
            ...state.groundWorksState,
            [action.work]: {
              ...state.groundWorksState[action.work],
              planing: !action.value,
              done: false,
            },
          },
        };
      case 'PAID_CHANGED':
        return {
          ...state,
          groundWorksState: {
            ...state.groundWorksState,
            [action.work]: {
              ...state.groundWorksState[action.work],
              paid: !action.value,
            },
          },
        };
      case 'OIL_CONSUMPTION_CHANGED':
        return {
          ...state,
          groundWorksState: {
            ...state.groundWorksState,
            [action.work]: {
              ...state.groundWorksState[action.work],
              oilConsumption: action.value,
            },
          },
        };
      case 'PAID_PRICE_CHANGED':
        return {
          ...state,
          groundWorksState: {
            ...state.groundWorksState,
            [action.work]: {
              ...state.groundWorksState[action.work],
              paidPrice: action.value,
            },
          },
        };
      case 'SEED_CHANGED':
        return {
          ...state,
          sowingState: {
            ...state.sowingState,
            seed: action.item,
          },
        };

      case 'SPRAYER_OR_FERTILIZER_CHANGED':
        return {
          ...state,
          [action.work]: {
            ...state[action.work],
            [action.turn]: {
              ...state[action.work][action.turn],
              [action.propertyName]: action.item,
            },
          },
        };
      case 'MIXED_CHANGED':
        return {
          ...state,
          [action.work]: {
            ...state[action.work],
            [action.turn]: {
              ...state[action.work][action.turn],
              mixed: !action.value,
            },
          },
        };
      case 'SEED_CONSUMPTION_CHANGED':
        return {
          ...state,
          sowingState: {
            ...state.sowingState,
            seedConsumption: action.value,
          },
        };

      case 'SEED_CONSUMPTION_CHANGED_INCREMENTING':
        return {
          ...state,
          sowingState: {
            ...state.sowingState,
            seedConsumption: action.adjective === 'inc' ? action.value + 1 : action.value - 1,
          },
        };
      case 'FERTILIZER_CONSUMPTION_CHANGED':
        return {
          ...state,
          fertilizationState: {
            ...state.fertilizationState,
            [action.turn]: {
              ...state.fertilizationState[action.turn],
              [action.propertyName]: action.value,
            },
          },
        };
      case 'FERTILIZER_CONSUMPTION_CHANGED_INCREMENTING':
        return {
          ...state,
          fertilizationState: {
            ...state.fertilizationState,
            [action.turn]: {
              ...state.fertilizationState[action.turn],
              [action.propertyName]:
                action.adjective === 'inc'
                  ? Math.round((action.value + 0.1) * 100) / 100
                  : Math.round((action.value - 0.1) * 100) / 100,
            },
          },
        };
      default:
        return state;
    }
  };
}

export default createFieldReducer;
