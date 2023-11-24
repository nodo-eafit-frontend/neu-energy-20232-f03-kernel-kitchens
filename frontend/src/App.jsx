import { Table } from './components/organims';
import { MonthPicker } from './components/molecules';

export function App() {
  // TODO: Dado mes y año traeme los días

  return (
    <>
      <h1>Hello World</h1>
      <MonthPicker label='Mes Energía' />
      <Table days={days} />
    </>
  );
}
