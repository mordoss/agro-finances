import React from 'react';
import { useSelector } from 'react-redux';
import { changeRented, changeRentedPrice } from '../../redux/actions/basicStateActions';
import { Block, Switch, Input, SubCount } from '../../components';

const Rented = ({ field }) => {
  const rented = useSelector(state => state[field].rented);
  const price = useSelector(state => state[field].rentedPrice);
  const area = useSelector(state => state[field].area);

  return (
    <Block>
      <Switch label="Zakupljujem?" action={changeRented} value={rented} field={field} />
      {rented && (
        <>
          <Input
            label="Cena zakupa po Ha:"
            action={changeRentedPrice}
            field={field}
            value={String(price)}
            price
          />
          <SubCount value={(area * price) / 100} label="Novca za zakup" unit="dinara" />
        </>
      )}
    </Block>
  );
};

export default Rented;
