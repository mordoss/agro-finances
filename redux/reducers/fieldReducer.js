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
            [action.workName]: {
              ...state.groundWorksState[action.workName],
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
            [action.workName]: {
              ...state.groundWorksState[action.workName],
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
            [action.workName]: {
              ...state.groundWorksState[action.workName],
              paid: !action.value,
            },
          },
        };

      case 'PAID_PRICE_CHANGED':
        return {
          ...state,
          groundWorksState: {
            ...state.groundWorksState,
            [action.workName]: {
              ...state.groundWorksState[action.workName],
              paidPrice: action.value,
            },
          },
        };

      case 'DATE_DAY_CHANGED':
        return {
          ...state,
          groundWorksState: {
            ...state.groundWorksState,
            [action.workName]: {
              ...state.groundWorksState[action.workName],
              date: [state.groundWorksState[action.workName].date[0], action.value],
            },
          },
        };

      case 'DATE_MONTH_CHANGED':
        return {
          ...state,
          groundWorksState: {
            ...state.groundWorksState,
            [action.workName]: {
              ...state.groundWorksState[action.workName],
              date: [action.value, state.groundWorksState[action.workName].date[1]],
            },
          },
        };

      case 'OIL_CONSUMPTION_CHANGED':
        return {
          ...state,
          groundWorksState: {
            ...state.groundWorksState,
            [action.workName]: {
              ...state.groundWorksState[action.workName],
              oilConsumption: action.value,
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
          [action.workState]: {
            ...state[action.workState],
            [action.turn]: {
              ...state[action.workState][action.turn],
              [action.propertyName]: action.item,
            },
          },
        };
      case 'MIXED_CHANGED':
        return {
          ...state,
          [action.workState]: {
            ...state[action.workState],
            [action.turn]: {
              ...state[action.workState][action.turn],
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
          [action.workState]: {
            ...state[action.workState],
            [action.turn]: {
              ...state[action.workState][action.turn],
              [action.propertyName]: action.value,
            },
          },
        };
      case 'FERTILIZER_CONSUMPTION_CHANGED_INCREMENTING':
        return {
          ...state,
          [action.workState]: {
            ...state[action.workState],
            [action.turn]: {
              ...state[action.workState][action.turn],
              [action.propertyName]:
                action.adjective === 'inc'
                  ? Math.round((action.value + 0.1) * 100) / 100
                  : Math.round((action.value - 0.1) * 100) / 100,
            },
          },
        };
      case 'WITH_FERTILIZATION_CHANGED':
        return {
          ...state,
          midRowCultivationState: {
            ...state.midRowCultivationState,
            [action.turn]: {
              ...state.midRowCultivationState[action.turn],
              withFertilization: !action.value,
            },
          },
        };
      default:
        return state;
    }
  };
}

export default createFieldReducer;
