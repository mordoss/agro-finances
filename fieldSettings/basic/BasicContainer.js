import React from 'react';

import PlantsList from './PlantsList';
import Area from './Area';
import Note from './Note';

const BasicContainer = () => {
  return (
    <>
      <Area />
      <PlantsList />
      <Note />
    </>
  );
};

export default BasicContainer;
