/* eslint-disable global-require */
export default [
  {
    id: 'soya',
    name: 'Soja',
  },
  {
    id: 'corn',
    name: 'Kukuruz',
  },
  {
    id: 'sunflower',
    name: 'Suncokret',
  },
  {
    id: 'wheat',
    name: 'Pšenica',
  },
];

export const worksPerPlant = {
  Kukuruz: [
    'plowing',
    'fertilization1',
    'disking',
    'horrowing',
    'sowing',
    'spraying1',
    'midRowCultivation2',
    'midRowCultivation1',
    'spraying2',
    'fertilization2',
    'harvesting',
  ],
  Soja: [
    'plowing',
    'sowing',
    'spraying2',
    'spraying3',
    'spraying4',
    'fertilization3',
    'fertilization1',
    'fertilization2',
  ],
  Pšenica: ['plowing', 'sowing', 'spraying1', 'spraying2', 'fertilization1', 'fertilization2'],
  Suncokret: [
    'sowing',
    'spraying1',
    'spraying2',
    'spraying3',
    'spraying4',
    'fertilization3',
    'fertilization1',
    'fertilization2',
  ],
};
