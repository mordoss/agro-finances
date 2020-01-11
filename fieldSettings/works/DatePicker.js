import React from 'react';
import { useSelector } from 'react-redux';
import { Block } from '../../components';
import DayPicker from './DayPicker';
import MonthPicker from './MonthPicker';

const DatePicker = ({ actionArgumentObject, isActive }) => {
  const { field, workName } = actionArgumentObject;
  const [month, day] = useSelector(state => state[field].groundWorksState[workName].date);
  const curentMonthIndex = new Date().getMonth();
  const curentMonthName = monthsArray[curentMonthIndex];

  return (
    <Block row space="between" center style={{ height: isActive ? null : 0, overflow: 'hidden' }}>
      <DayPicker
        numberOfDays={month ? months[month] : months[curentMonthName]}
        day={day}
        actionArgumentObject={actionArgumentObject}
      />
      <MonthPicker
        allMonths={monthsArray}
        month={month || monthsArray[curentMonthIndex]}
        actionArgumentObject={actionArgumentObject}
      />
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
