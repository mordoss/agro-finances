export const sowing = {
  Kukuruz: {},
  Pšenica: {},
};

export const fertilization = {
  Kukuruz: {
    first: { time: 'Pre setve', fertilizers: ['Urea', 'NPK (4:1:2)'] },
    second: { time: 'U fazi od 4. do 7. lista', fertilizers: ['Mikroelementi', 'NPK (20:20:20)'] },
  },
  Pšenica: {},
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
      iupacs: [{ name: 'S-metolahlor', purpose: 'na crno itd suzbijanje', sprayers: [] }],
    },
    second: {
      time: 'U fazi od 2. do 5. lista',
      iupacs: [
        { name: '2,4 D', purpose: 'uskolisni', sprayers: [] },
        { name: 'nikosulfuron', purpose: 'sirokolinsni', sprayers: [] },
      ],
    },
  },
};
