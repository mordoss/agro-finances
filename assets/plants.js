/* eslint-disable global-require */
export default [
  {
    id: 'soya',
    name: 'Soja',
    image: require('./icons/soya.svg.png'),
  },
  {
    id: 'corn',
    name: 'Kukuruz',
    image: require('./icons/corn.svg.png'),
  },
  {
    id: 'sunflower',
    name: 'Suncokret',
    image: require('./icons/sunflower.svg.png'),
  },
  {
    id: 'wheat',
    name: 'Pšenica',
    image: require('./icons/wheat.svg.png'),
  },
];

export const worksPerPlant = {
  Kukuruz: ['midRowCultivation1', 'sowing', 'fertilization2'],
  Soja: ['disking', 'fertilization2'],
  Pšenica: ['plowing', 'sowing'],
  Suncokret: ['plowing', 'spraying2'],
};
