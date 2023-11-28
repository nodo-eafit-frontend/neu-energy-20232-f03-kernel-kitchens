import { Table } from './components/organims';
import { MonthPicker } from './components/molecules';
import { getDaysByMonthPicker } from './services';
import { useEffect, useState } from 'react';

const mes = 'febrero';
const año = 2022;

export function App() {
  const [year, setYear] = useState(2022);
  const [month, setMonth] = useState('enero');

  const [days, setDays] = useState();
  useEffect(() => {
    getDaysByMonthPicker({ year, month }).then((days) => setDays(days));
  }, [year, month]);

  console.log(days);
  return (
    <>
      <MonthPicker setYear={setYear} setMonth={setMonth} label='Mes Energía' />
      <Table days={days} />
    </>
  );
}
