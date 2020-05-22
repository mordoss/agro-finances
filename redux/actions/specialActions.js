export const changeSeed = ({ field }, item) => {
  return {
    type: 'SEED_CHANGED',
    field,
    item,
  };
};

export const changeSprayerOrFertilizer = ({ field, propertyName, turn, workState }, item) => {
  return {
    type: 'SPRAYER_OR_FERTILIZER_CHANGED',
    field,
    workState,
    turn,
    item,
    propertyName,
  };
};

export const changeMixed = ({ field, workState, turn, value }) => {
  return {
    type: 'MIXED_CHANGED',
    field,
    workState,
    value,
    turn,
  };
};

export const changeSprayerActive = ({ field, turn, place, value }) => {
  return {
    type: 'SPRAYER_ACTIVE_CHANGED',
    field,
    value,
    place: `sprayer${place}Active`,
    turn,
  };
};

export const changeSeedConsumption = ({ field }, value) => {
  return {
    type: 'SEED_CONSUMPTION_CHANGED',
    field,
    value,
  };
};

export const changeSeedConsumptionIncrementing = ({ field, value }, adjective) => {
  return {
    type: 'SEED_CONSUMPTION_CHANGED_INCREMENTING',
    field,
    value: Number(value),
    adjective,
  };
};

export const changeFertilizerConsumption = ({ field, workState, turn, propertyName }, value) => {
  return {
    type: 'FERTILIZER_CONSUMPTION_CHANGED',
    field,
    workState,
    turn,
    propertyName,
    value,
  };
};

export const changeFertilizerConsumptionIncrementing = (
  { field, value, turn, workState, propertyName },
  adjective
) => {
  return {
    type: 'FERTILIZER_CONSUMPTION_CHANGED_INCREMENTING',
    field,
    workState,
    value: Number(value),
    adjective,
    turn,
    propertyName,
  };
};

export const changeWithFertilization = ({ field, value, turn }) => {
  return {
    type: 'WITH_FERTILIZATION_CHANGED',
    field,
    value,
    turn,
  };
};
