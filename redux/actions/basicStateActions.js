export const changeArea = (field, value) => {
  return {
    type: 'AREA_CHANGED',
    value,
    field,
  };
};

export const changePlant = (field, value) => {
  return {
    type: 'PLANT_CHANGED',
    value,
    field,
  };
};

export const changeNote = (field, value) => {
  return {
    type: 'NOTE_CHANGED',
    value,
    field,
  };
};
