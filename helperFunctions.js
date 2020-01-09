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
    default:
      return require('./assets/icons/add.png');
  }
};

export const workNameToItem = string => {
  switch (string) {
    case 'sowing':
      return 'seme: ';
    case 'fertilization1':
    case 'fertilization2':
    case 'midRowCultivation1':
    case 'midRowCultivation2':
      return 'prihranu';
    case 'spraying1':
    case 'spraying2':
      return 'herbicid';

    default:
      return null;
  }
};
