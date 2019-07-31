import React from 'react';
import { useSelector } from 'react-redux';

import Work from '../Work';

const Corn = () => {
  const { plowing, disking, horrowing, harvesting, sowing, spraying1, spraying2 } = useSelector(
    state => ({
      plowing: state.plowing,
      disking: state.disking,
      horrowing: state.horrowing,
      harvesting: state.harvesting,
      sowing: state.sowing,
      spraying1: state.spraying1,
      spraying2: state.spraying2,
    })
  );
  return (
    <>
      <Work work={plowing} name="Oranje" />
      <Work work={disking} name="Drljacenje" />
      <Work work={horrowing} name="Setvospremanje" />
      <Work work={harvesting} name="Berba" />
      <Work work={sowing} name="Setva" />
      <Work work={spraying1} name="Prvo Prskanje" />
      <Work work={spraying2} name="Drugo Prskanje" />
    </>
  );
};

export default Corn;
