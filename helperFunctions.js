/* eslint-disable global-require */
export const setInputUnit = (price, area, oilConsumption, bags) => {
  // eslint-disable-next-line no-nested-ternary
  return price ? 'dinara' : area ? 'ara' : oilConsumption ? 'litara' : bags ? 'džakova' : '';
};

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
