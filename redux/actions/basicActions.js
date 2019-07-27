// eslint-disable-next-line import/prefer-default-export
export const changeArea = value => {
  return {
    type: 'AREA_CHANGED',
    value,
  };
};

export const changePlant = value => {
  return {
    type: 'PLANT_CHANGED',
    value,
  };
};
