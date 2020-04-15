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
  Pšenica: ['plowing', 'sowing', 'spraying1', 'spraying2'],
  Suncokret: ['plowing', 'spraying2'],
};
