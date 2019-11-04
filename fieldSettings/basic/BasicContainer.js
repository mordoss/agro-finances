import React from 'react';
import Plants from './Plants';
import Area from './Area';
import Note from './Note';

const BasicContainer = ({ field }) => {
  return (
    <>
      <Area field={field} />
      <Plants field={field} />
      <Note field={field} />
    </>
  );
};

export default BasicContainer;
