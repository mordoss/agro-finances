export default {
  // [price per kg, plant]
  fertilizer: {
    Urea: [35, ['Kukuruz', 'Suncokret']],
    AN: [38, ['Kukuruz']],
    KAN: [37, ['Kukuruz']],
    'NPK (4:1:2)': [40, ['Kukuruz']],
    'NPK (20:20:20)': [45, ['Kukuruz']],
    'NPK (15:15:15)': [32, ['Kukuruz', 'Suncokret']],
    'NPK (16:16:16)': [33, ['Kukuruz', 'Suncokret']],
    'Mikroelementi (Zn)': [50, ['Kukuruz']],
    'NPK (8:15:15)': [50, ['Soja', 'Suncokret']],
    'NPK (6:24:12)': [50, ['Soja', 'Suncokret']],
    'NPK (16:27:7)': [50, ['Soja']],
    'NS (20:24)': [50, ['Soja']],
    'NP (10:35)': [50, ['Soja', 'Suncokret']]
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
      'Aminopiralid-kalijum 355 g/kg + Florasulam 150 g/kg'
    ],
    'Fluksapiroksad 75 g/l + Piraklostrobin 150 g/l': [
      752,
      ['Pšenica'],
      60,
      'Fluksapiroksad 75 g/l + Piraklostrobin 150 g/l'
    ],
    'Аlfa–cipermetrin 100 g/l': [
      752,
      ['Pšenica'],
      60,
      'Аlfa–cipermetrin 100 g/l'
    ],

    'Rampa EC': [752, ['Soja'], 60, 'Klomazon'],
    Galbenon: [752, ['Soja'], 60, 'Bentazon'],
    Basar: [752, ['Soja', 'Suncokret'], 60, 'S-metolahlor'],
    'Velton WG': [752, ['Soja'], 60, 'Metribuzin'],
    Okvir: [752, ['Soja'], 60, 'Tifensulfuron-metil'],
    Rafal: [752, ['Soja', 'Suncokret'], 60, 'Кletodim'],
    'Globus EC': [752, ['Soja'], 60, 'Кvizalopof-P-etil'],

    'Fobos EC': [752, ['Suncokret'], 60, 'Bifentrin'],
    Mont: [752, ['Suncokret'], 60, 'Bifentrin'],
    Terbis: [752, ['Suncokret'], 60, 'Terbutilazin'],
    Kletox: [752, ['Suncokret'], 60, 'Кletodim'],
    Bosco: [752, ['Suncokret'], 60, 'Boskalid'],
    Funomil: [752, ['Suncokret'], 60, 'Tiofanat-metil']
  },
  seed: {
    // [bag price, plant]
    'Seme jeftinije (kukuruz)': [3500, 'Kukuruz'],
    'Seme srednje (kukuruz)': [3800, 'Kukuruz'],
    'Seme skuplje (kukuruz)': [4000, 'Kukuruz'],
    'Seme jeftinije (pšenica)': [1500, 'Pšenica'],
    'Seme srednje (pšenica)': [1800, 'Pšenica'],
    'Seme skuplje (pšenica)': [2000, 'Pšenica'],
    'Seme jeftinije (soja)': [1500, 'Soja'],
    'Seme srednje (soja)': [1800, 'Soja'],
    'Seme skuplje (soja)': [2000, 'Soja'],
    'Seme jeftinije (suncokret)': [8000, 'Suncokret'],
    'Seme srednje (suncokret)': [10000, 'Suncokret'],
    'Seme skuplje (suncokret)': [12000, 'Suncokret']
  }
}
