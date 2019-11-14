import React from 'react';
import { useSelector } from 'react-redux';
import { changeRented, changeRentedPrice } from '../../redux/actions/basicStateActions';
import { Block, Switch, Input } from '../../components';

const Rented = ({ field }) => {
  const rented = useSelector(state => state[field].rented);
  const price = useSelector(state => state[field].rentedPrice);

  return (
    <Block>
      <Switch label="Zakupljujem?" action={changeRented} value={rented} field={field} />
      {rented && (
        <Input
          label="Cena zakupa po Ha:"
          action={changeRentedPrice}
          field={field}
          value={String(price)}
          price
        />
      )}
    </Block>
  );
};

export default Rented;
