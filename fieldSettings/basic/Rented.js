import React from 'react';
import { useSelector } from 'react-redux';
import { changeRented, changeRentedPrice } from '../../redux/actions/basicStateActions';
import { Block, Switch, Input, SubCount } from '../../components';

const Rented = ({ field }) => {
  const rented = useSelector(state => state[field].rented);
  const price = useSelector(state => state[field].rentedPrice);
  const area = useSelector(state => state[field].area);
  const unit = 'dinara';
  return (
    <Block>
      <Switch
        label="Zakupljujem?"
        action={changeRented}
        actionArgumentObject={{ field, value: rented }}
      />
      {rented && (
        <>
          <Input
            label="Cena zakupa po Ha:"
            unit={unit}
            value={String(price)}
            action={changeRentedPrice}
            actionArgumentObject={{ field }}
          />
          <SubCount value={(area * price) / 100} label="Novca za zakup " unit={unit} />
        </>
      )}
    </Block>
  );
};

export default Rented;
