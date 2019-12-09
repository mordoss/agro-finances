// eslint-disable-next-line import/prefer-default-export
export const plantStringToImage = string => {
  // Image component doesn't accept svg
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
