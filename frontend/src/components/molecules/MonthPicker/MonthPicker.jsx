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

export const MonthPicker = ({ label }) => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();

  const handleMonthPicker = (event) => {
    const { value } = event.target;
    const [currentYear, currentMonth] = value.split('-');

    const monthIndex = +currentMonth - 1;

    setYear(+currentYear);
    setMonth(months[monthIndex]);
  };

  return (
    <>
      <label htmlFor='month-picker'>{label}</label>
      <input type='month' id='month-picker' name='monthDate' min='2018-03' max='2023-11' onChange={handleMonthPicker} />

      <div>Year: {year}</div>
      <div>Month: {month}</div>
    </>
  );
};
