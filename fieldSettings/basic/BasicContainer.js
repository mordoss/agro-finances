import React from 'react';
import PlantsList from './PlantsList';
import Area from './Area';
import Note from './Note';

const BasicContainer = props => {
  const { field } = props;
  return (
    <>
      <Area field={field} />
      <PlantsList field={field} />
      <Note field={field} />
    </>
  );
};

export default BasicContainer;
