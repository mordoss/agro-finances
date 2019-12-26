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
  Kukuruz: [
    'disking',
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
