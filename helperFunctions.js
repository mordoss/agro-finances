/* eslint-disable global-require */

// Image component doesn't accept svg
export const plantStringToImage = string => {
  switch (string) {
    case 'Kukuruz':
      return require('./assets/icons/corn.svg.png');
    case 'Soja':
      return require('./assets/icons/soya.svg.png');
    case 'Suncokret':
      return require('./assets/icons/sunflower.svg.png');
    case 'Pšenica':
      return require('./assets/icons/wheat.svg.png');
    case 'Today':
      return require('./assets/icons/calendar.svg.png');
    default:
      return require('./assets/icons/add.png');
  }
};
export const productGroupStringToImage = string => {
  switch (string) {
    case 'seed':
      return require('./assets/products/seed.jpg');
    case 'fertilizer':
      return require('./assets/products/fertilizer.jpg');
    case 'sprayer':
      return require('./assets/products/sprayer.jpg');
    default:
      return require('./assets/icons/add.png');
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
    'decembar',
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

export const calcDays = (workDate, todayIndex, months) => {
  const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days =
    monthsDays.reduce(
      (a, b, index) => (index < months.indexOf(workDate[0]) ? a + b : a),
      workDate[1]
    ) -
    todayIndex -
    1;
  return days < 0 ? 365 + days : days;
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

    default:
      return 0;
  }
};
