import React from 'react';
import { Switch, Block } from '../../components';
import { changeDone, changePlaning } from '../../redux/actions/cammonWorkActions';

const DoneAndPlaningSegment = ({ done, planing, field, workName }) => {
  return (
    <Block space="between">
      <Switch label="Urađeno" value={done} action={changeDone} field={field} workName={workName} />
      <Switch
        label="Planiram"
        value={planing}
        action={changePlaning}
        field={field}
        workName={workName}
      />
    </Block>
  );
};

export default DoneAndPlaningSegment;
