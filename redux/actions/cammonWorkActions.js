export const changeDone = ({ field, workName, value }) => {
  return {
    type: 'DONE_CHANGED',
    value,
    workName,
    field,
  };
};

export const changePlaning = ({ field, workName, value }) => {
  return {
    type: 'PLANING_CHANGED',
    value,
    workName,
    field,
  };
};

export const changeDateDay = (field, workName, value) => {
  return {
    type: 'DATE_DAY_CHANGED',
    value,
    workName,
    field,
  };
};

export const changeDateMonth = (field, workName, value) => {
  return {
    type: 'DATE_MONTH_CHANGED',
    value,
    workName,
    field,
  };
};

export const changePaid = ({ field, workName, value }) => {
  return {
    type: 'PAID_CHANGED',
    value,
    workName,
    field,
  };
};

export const changePaidPrice = ({ field, workName }, value) => {
  return {
    type: 'PAID_PRICE_CHANGED',
    value,
    workName,
    field,
  };
};

export const changeOilConsumption = ({ field, workName }, value) => {
  return {
    type: 'OIL_CONSUMPTION_CHANGED',
    value,
    workName,
    field,
  };
};
