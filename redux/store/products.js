export default {
  // [price per kg, plant]
  fertilizer: {
    Urea: [35, ['Kukuruz']],
    AN: [38, ['Kukuruz']],
    KAN: [37, ['Kukuruz']],
    'NPK (4:1:2)': [40, ['Kukuruz']],
    'NPK (20:20:20)': [45, ['Kukuruz']],
    'NPK (15:15:15)': [32, ['Kukuruz']],
    'NPK (16:16:16)': [33, ['Kukuruz']],
    'Mikroelementi (Zn)': [50, ['Kukuruz']],
  },
  sprayer: {
    // [bottle price, array of plants, area of bottle, iuapac]
    'S-metolahlor 1': [1000, ['Kukuruz'], 40, 'S-metolahlor'],
    'S-metolahlor 2': [1100, ['Kukuruz'], 50, 'S-metolahlor'],
    'S-metolahlor 3': [1200, ['Kukuruz'], 25, 'S-metolahlor'],
    'Terbutilazin 1': [1445, ['Kukuruz'], 40, 'Terbutilazin'],
    'Terbutilazin 2': [988, ['Kukuruz'], 55, 'Terbutilazin'],
    'Terbutilazin 3': [752, ['Kukuruz'], 100, 'Terbutilazin'],
    '2,4D 1': [785, ['Kukuruz', 'Pšenica'], 80, '2,4D'],
    '2,4D 2': [1555, ['Kukuruz', 'Pšenica'], 40, '2,4D'],
    'nikosulfuron 1': [755, ['Kukuruz'], 25, 'Nikosulfuron'],
    'nikosulfuron 2': [751, ['Kukuruz'], 40, 'Nikosulfuron'],
    'nikosulfuron 3': [752, ['Kukuruz'], 60, 'Nikosulfuron'],
    'Aminopiralid-kalijum 355 g/kg + Florasulam 150 g/kg': [
      752,
      ['Pšenica'],
      60,
      'Aminopiralid-kalijum 355 g/kg + Florasulam 150 g/kg',
    ],
    'Fluksapiroksad 75 g/l + Piraklostrobin 150 g/l': [
      752,
      ['Pšenica'],
      60,
      'Fluksapiroksad 75 g/l + Piraklostrobin 150 g/l',
    ],
    'Аlfa–cipermetrin 100 g/l': [752, ['Pšenica'], 60, 'Аlfa–cipermetrin 100 g/l'],
  },
  seed: {
    // [bag price, plant]
    'Seme jeftinije (kukuruz)': [3500, 'Kukuruz'],
    'Seme srednje (kukuruz)': [3800, 'Kukuruz'],
    'Seme skuplje (kukuruz)': [4000, 'Kukuruz'],
    'Seme jeftinije (pšenica)': [1500, 'Pšenica'],
    'Seme srednje (pšenica)': [1800, 'Pšenica'],
    'Seme skuplje (pšenica)': [2000, 'Pšenica'],
  },
};
