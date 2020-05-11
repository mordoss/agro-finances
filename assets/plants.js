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
    'midRowCultivation1',
    'spraying1',
    'disking',
    'plowing',
    'horrowing',
    'harvesting',
    'spraying2',
    'midRowCultivation2',
    'fertilization1',
    'fertilization2',
    'sowing',
  ],
  Soja: ['disking', 'fertilization2'],
  Pšenica: ['plowing', 'sowing', 'spraying1', 'spraying2'],
  Suncokret: ['plowing', 'spraying2'],
};
