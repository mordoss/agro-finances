import React from 'react';
import { Switch, Block } from '../../components';
import { changeDone, changePlaning } from '../../redux/actions/cammonWorkActions';

const DoneAndPlaningSegment = ({ done, planing, actionArgumentObject }) => {
  return (
    <Block space="between">
      <Switch
        label="Urađeno"
        action={changeDone}
        actionArgumentObject={{ value: done, ...actionArgumentObject }}
        withAnimation
      />
      <Switch
        label="Planiram"
        action={changePlaning}
        actionArgumentObject={{ value: planing, ...actionArgumentObject }}
        withAnimation
      />
    </Block>
  );
};

export default DoneAndPlaningSegment;
