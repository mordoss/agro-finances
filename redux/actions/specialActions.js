export const changeSeed = (field, item) => {
  return {
    type: 'SEED_CHANGED',
    field,
    item,
  };
};

export const changeSprayerOrFertilizer = (field, item, propertyName, turn, work) => {
  return {
    type: 'SPRAYER_OR_FERTILIZER_CHANGED',
    field,
    item,
    propertyName,
    turn,
    work,
  };
};

export const changeMixed = (field, work, value, turn) => {
  return {
    type: 'MIXED_CHANGED',
    field,
    work,
    value,
    turn,
  };
};

export const changeSeedConsumption = (field, value) => {
  return {
    type: 'SEED_CONSUMPTION_CHANGED',
    field,
    value,
  };
};

export const changeSeedConsumptionIncrementing = (field, value, adjective) => {
  return {
    type: 'SEED_CONSUMPTION_CHANGED_INCREMENTING',
    field,
    value: Number(value),
    adjective,
  };
};

export const changeFertilizerConsumption = (field, value, turn, propertyName) => {
  return {
    type: 'FERTILIZER_CONSUMPTION_CHANGED',
    field,
    value,
    turn,
    propertyName,
  };
};

export const changeFertilizerConsumptionIncrementing = (
  field,
  value,
  adjective,
  turn,
  propertyName
) => {
  return {
    type: 'FERTILIZER_CONSUMPTION_CHANGED_INCREMENTING',
    field,
    value: Number(value),
    adjective,
    turn,
    propertyName,
  };
};
