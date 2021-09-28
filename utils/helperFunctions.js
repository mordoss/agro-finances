/* eslint-disable global-require */
import moment from 'moment';

// Image component doesn't accept svg
export const plantStringToImage = string => {
  switch (string) {
    case 'Kukuruz':
      return require('../assets/icons/corn.svg.png');
    case 'Soja':
      return require('../assets/icons/soya.svg.png');
    case 'Suncokret':
      return require('../assets/icons/sunflower.svg.png');
    case 'Pšenica':
      return require('../assets/icons/wheat.svg.png');
    case 'Today':
      return require('../assets/icons/calendar.svg.png');
    case null:
      return require('../assets/icons/add.png');
    default:
      return null;
  }
};
export const productGroupStringToImage = string => {
  switch (string) {
    case 'seed':
      return require('../assets/products/seed.jpg');
    case 'fertilizer':
      return require('../assets/products/fertilizer.jpg');
    case 'sprayer':
      return require('../assets/products/sprayer.jpg');
    default:
      return require('../assets/icons/add.png');
  }
};

export const workNameToItem = string => {
  switch (string) {
    case 'sowing':
      return 'seme';
    case 'fertilization1':
    case 'fertilization2':
    case 'fertilization3':
    case 'midRowCultivation1':
    case 'midRowCultivation2':
      return 'prihranu';
    case 'spraying1':
    case 'spraying2':
    case 'spraying3':
    case 'spraying4':
      return 'herbicid';

    default:
      return null;
  }
};

export const workNameToNative = string => {
  switch (string) {
    case 'plowing':
      return 'Oranje';
    case 'horrowing':
      return 'Setvospremanje';
    case 'disking':
      return 'Tanjiranje';
    case 'harvesting':
      return 'Berba';
    case 'sowing':
      return 'Setva';
    case 'fertilization1':
      return 'Prva Prihrana';
    case 'fertilization2':
      return 'Druga Prihrana';
    case 'midRowCultivation1':
      return 'Prva Međuredna';
    case 'midRowCultivation2':
      return 'Druga Međuredna';
    case 'spraying1':
      return 'Prva Zaštita';
    case 'spraying2':
      return 'Prva Zaštita';

    default:
      return '';
  }
};

export const numberToMonth = num => {
  const months = [
    'januar',
    'februar',
    'mart',
    'april',
    'maj',
    'jun',
    'jul',
    'avgust',
    'septembar',
    'oktobar',
    'novembar',
    'decembar'
  ];
  return months[num];
};

export const dateToString = date => {
  if (date) {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = numberToMonth(dateObj.getMonth());
    return `${day}. ${month}`;
  }
  return null;
};

export const calcDaysBetween = workDate => {
  const today = moment();
  const date = moment(workDate);
  const months = date.diff(today, 'month');
  today.add(months, 'month');
  const days = date.diff(today, 'days');

  const monthsLastDigit = Math.abs(months % 10);
  const daysLastDigit = Math.abs(days % 10);
  let monthsString = '';
  if (months !== 0) {
    if (monthsLastDigit > 4 || monthsLastDigit === 0) {
      monthsString = `${Math.abs(months)} meseci`;
    }
    if (monthsLastDigit === 1) {
      monthsString = `${Math.abs(months)} mesec`;
    }
    if (monthsLastDigit > 1 && monthsLastDigit < 5) {
      monthsString = `${Math.abs(months)} meseca`;
    }
  }
  let daysString = '';
  if (days !== 0) {
    if (daysLastDigit === 1) {
      daysString = `${Math.abs(days)} dan`;
    }
    if (daysLastDigit > 1) {
      daysString = `${Math.abs(days)} dana`;
    }
  }

  if (today.isSame(date, 'day')) {
    return 'Danas';
  }
  return `${date.isAfter(today) ? 'Za' : 'Pre'} ${monthsString} ${daysString}`;
};

export const plantToIncrementerLabel = plant => {
  switch (plant) {
    case 'Kukuruz':
    case 'Suncokret':
      return 'Razmak u redu (cm)';
    case 'Pšenica':
      return 'Kg po aru';

    default:
      return '';
  }
};

export const plantToAverageSeedConsumption = plant => {
  switch (plant) {
    case 'Kukuruz':
      return 18;
    case 'Pšenica':
      return 3.5;
    case 'Suncokret':
      return 20;
    case 'Soja':
      return 4;

    default:
      return 0;
  }
};

export const plantToAverageYieldPerHa = plant => {
  switch (plant) {
    case 'Kukuruz':
      return 7000;
    case 'Pšenica':
      return 6000;
    case 'Suncokret':
      return 5000;
    case 'Soja':
      return 5000;

    default:
      return 0;
  }
};

export const plantToAverageProductPrice = plant => {
  switch (plant) {
    case 'Kukuruz':
      return 18;
    case 'Pšenica':
      return 16;
    case 'Suncokret':
      return 20;
    case 'Soja':
      return 40;

    default:
      return 0;
  }
};

export const changeGroundWorksState1 = (state, action, property) => {
  const newState = [...state];
  const { field } = action;
  newState[field].groundWorksState = {
    ...newState[field].groundWorksState,
    [action.workName]: {
      ...newState[field].groundWorksState[action.workName],
      [property]: action.value
    }
  };
  return newState;
};
