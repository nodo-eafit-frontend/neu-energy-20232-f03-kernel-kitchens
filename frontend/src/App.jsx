import { useEffect, useState } from 'react';
import { MonthPicker } from './components/molecules';
import { Table } from './components/organims';
import { getDaysByMonthPicker } from './services';

const mes = 'febrero';
const año = 2022;

export function App() {
  const [year, setYear] = useState(2022);
  const [month, setMonth] = useState('enero');

  const [days, setDays] = useState([]);
  useEffect(() => {
    getDaysByMonthPicker({ year, month }).then((days) => setDays(days));
  }, [year, month]);

  const renderDefault = () => <div>Servidor no disponible</div>;

  return (
    <>
      <MonthPicker setYear={setYear} setMonth={setMonth} label='Fecha' />
      {days.length ? <Table days={days}/> : renderDefault()}
    </>
  );
}
