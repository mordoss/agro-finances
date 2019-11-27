export const changeDone = (field, work, value) => {
  return {
    type: 'DONE_CHANGED',
    value,
    work,
    field,
  };
};

export const changePlaning = (field, work, value) => {
  return {
    type: 'PLANING_CHANGED',
    value,
    work,
    field,
  };
};

export const changeDateDay = (field, work, value) => {
  return {
    type: 'DATE_DAY_CHANGED',
    value,
    work,
    field,
  };
};

export const changeDateMonth = (field, work, value) => {
  return {
    type: 'DATE_MONTH_CHANGED',
    value,
    work,
    field,
  };
};

export const changePaid = (field, work, value) => {
  return {
    type: 'PAID_CHANGED',
    value,
    work,
    field,
  };
};

export const changeOilConsumption = (field, value, work) => {
  return {
    type: 'OIL_CONSUMPTION_CHANGED',
    value,
    work,
    field,
  };
};

export const changePaidPrice = (field, value, work) => {
  return {
    type: 'PAID_PRICE_CHANGED',
    value,
    work,
    field,
  };
};
