import { useState } from 'react';

const months = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

const namespace = 'month-picker-input';

export const MonthPicker = ({ label, setYear, setMonth }) => {

  const handleMonthPicker = (event) => {
    const { value } = event.target;
    const [currentYear, currentMonth] = value.split('-');

    const monthIndex = +currentMonth - 1;

    setYear(+currentYear);
    setMonth(months[monthIndex]);
  };

  return (
    <div className={namespace}>
      <label htmlFor='month-picker' className={namespace+'-label'}>{label}</label>
      <input type='month' id='month-picker' name='monthDate' min='2018-03' max='2023-11' onChange={handleMonthPicker} />

    </div>
  );
};
