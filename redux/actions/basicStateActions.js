export const changeArea = ({ field }, value) => {
  return {
    type: 'AREA_CHANGED',
    value,
    field
  };
};

export const changeYield = ({ field }, value) => {
  return {
    type: 'YIELD_CHANGED',
    value,
    field
  };
};

export const changeProductPrice = ({ field }, value) => {
  return {
    type: 'PRODUCT_PRICE_CHANGED',
    value,
    field
  };
};

export const changePlant = (field, value) => {
  return {
    type: 'PLANT_CHANGED',
    value,
    field
  };
};

export const changeNote = (field, value) => {
  return {
    type: 'NOTE_CHANGED',
    value,
    field
  };
};

export const changeRented = ({ field, value }) => {
  return {
    type: 'RENTED_CHANGED',
    value,
    field
  };
};

export const changeRentedPrice = ({ field }, value) => {
  return {
    type: 'RENTED_PRICE_CHANGED',
    value,
    field
  };
};

export const changePrice = ({ property, product }, value) => {
  return {
    type: 'PRICE_CHANGED',
    value,
    property,
    product
  };
};
