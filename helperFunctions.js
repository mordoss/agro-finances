/* eslint-disable no-nested-ternary */
export const setSwitchActiveColor = (label, primaryColor, secondaryColor, tertiaryColor) => {
  return label === 'Urađeno' ? secondaryColor : label === 'Planiram' ? primaryColor : tertiaryColor;
};

export const setInputUnit = (price, area, oilConsumption, bags) => {
  return price ? 'dinara' : area ? 'ara' : oilConsumption ? 'litara' : bags ? 'džakova' : '';
};
