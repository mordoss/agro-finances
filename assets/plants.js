/* eslint-disable global-require */
export default [
  {
    id: 'soya',
    name: 'Soja',
    image: require('./icons/tomaSoya.png'),
  },
  {
    id: 'corn',
    name: 'Kukuruz',
    image: require('./icons/tomaCorn.png'),
  },
  {
    id: 'sunflower',
    name: 'Suncokret',
    image: require('./icons/tomaSun.png'),
  },
  {
    id: 'wheat',
    name: 'Pšenica',
    image: require('./icons/tomaWheat.png'),
  },
];

export const worksPerPlant = {
  Kukuruz: [
    'disking',
    'plowing',
    'horrowing',
    'harvesting',
    'spraying1',
    'spraying2',
    'midRowCultivation1',
    'midRowCultivation2',
    'fertilization1',
    'fertilization2',
    'sowing',
  ],
  Soja: ['disking', 'fertilization2'],
  Pšenica: ['plowing', 'sowing'],
  Suncokret: ['plowing', 'spraying2'],
};
