import React from 'react';
import { useSelector } from 'react-redux';
import {
  changeRented,
  changeRentedPrice
} from '../../redux/actions/basicStateActions';
import { Block, Switch, Input, SubCount } from '../../components';

const Rented = ({ field }) => {
  const fieldData = useSelector(state => state.fields[field]);
  const { rented, rentedPrice: price, area } = fieldData;
  const unit = 'dinara';

  return (
    <>
      <Switch
        label="Zakupljujem?"
        action={changeRented}
        actionArgumentObject={{ field, value: rented }}
        withAnimation
      />

      <Block style={{ height: rented ? null : 0, overflow: 'hidden' }}>
        <Input
          label="Cena zakupa po Ha:"
          unit={unit}
          value={String(price)}
          action={changeRentedPrice}
          actionArgumentObject={{ field }}
        />
        <SubCount
          value={(area * price) / 100}
          label="Novca za zakup "
          unit={unit}
        />
      </Block>
    </>
  );
};

export default Rented;
