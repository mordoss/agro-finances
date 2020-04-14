export const sowing = {
  Kukuruz: {},
  Pšenica: {},
};

export const fertilization = {
  Kukuruz: {
    first: { time: 'Pre setve', fertilizers: [['Urea', 2], ['NPK (4:1:2)', 1]] },
    second: {
      time: 'U fazi od 4. do 7. lista',
      fertilizers: [['NPK (20:20:20)', 2.5], ['Mikroelementi (Zn))', 1]],
    },
  },
  Pšenica: {
    first: { time: 'U jesen', fertilizers: [['NPK (15:15:15)', 3.5], ['NPK (16:16:16)', 3.5]] },
    second: { time: '', fertilizers: [['Urea 46% N', 1.5]] },
    third: { time: '', fertilizers: [['AN', 2], ['KAN', 2]] },
  },
};

export const midRowCultivation = {
  Kukuruz: {
    first: { time: 'Pre setve', fertilizers: ['Urea', 'KAN', 'AN'] },
    second: { time: 'U fazi od 4. do 7. lista', fertilizers: ['Urea', 'KAN', 'AN'] },
  },
};

export const spraying = {
  Kukuruz: {
    first: {
      time: 'Posle setve, a pre nicanja',
      sprayers: [
        { iupac: 'S-metolahlor', purpose: 'na crno uskolisne', sprayers: [''] },
        { iupac: 'Terbutilazin', purpose: 'na crno sirokoisne', sprayers: [''] },
      ],
    },
    second: {
      time: 'U fazi od 2. do 5. lista',
      sprayers: [
        { iupac: '2,4 D', purpose: 'uskolisni', sprayers: [''] },
        { iupac: 'nikosulfuron', purpose: 'sirokolinsni', sprayers: [''] },
      ],
    },
  },
  Pšenica: {
    first: {
      time: 'U fazi bokorenja',
      sprayers: [{ iupac: '2,4 D', purpose: '', sprayers: [''] }],
    },
    second: {
      time: 'Od drugog kolenca do pojave lista zastavičara',
      sprayers: [
        {
          iupac: 'Aminopiralid-kalijum 355 g/kg + Florasulam 150 g/kg',
          purpose: '',
          sprayers: [''],
        },
        { iupac: 'Fluksapiroksad 75 g/l + Piraklostrobin 150 g/l ', purpose: '', sprayers: [''] },
        { iupac: 'Аlfa–cipermetrin 100 g/l', purpose: '', sprayers: [''] },
      ],
    },
  },
};
