import React from 'react';
import { Block, Text } from '../../components';
import DayPicker from './DayPicker';
import MonthPicker from './MonthPicker';

const DatePicker = ({ field, workName, date }) => {
  const [month, day] = date;
  const curentMonthIndex = new Date().getMonth();
  const curentMonthName = monthsArray[curentMonthIndex];

  return (
    <Block space="between">
      <Text>Datum:</Text>
      <Block row space="between" center>
        <MonthPicker
          allMonths={monthsArray}
          month={month || monthsArray[curentMonthIndex]}
          field={field}
          workName={workName}
        />
        <DayPicker
          numberOfDays={month ? months[month] : months[curentMonthName]}
          day={day}
          field={field}
          workName={workName}
        />
      </Block>
    </Block>
  );
};

const months = {
  januar: 31,
  februar: 28,
  mart: 31,
  april: 30,
  maj: 31,
  jun: 30,
  jul: 31,
  avgust: 31,
  septembar: 30,
  oktobar: 31,
  novembar: 30,
  decembar: 31,
};

const monthsArray = Object.keys(months);

export default DatePicker;
