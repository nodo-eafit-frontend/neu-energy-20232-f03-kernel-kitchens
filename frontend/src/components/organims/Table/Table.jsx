import { Label } from '../../atoms';
import { Hours } from '../../molecules';
import { Month } from '../Month/Month';

export const Table = ({ days }) => {
  return (
    <>
      <Label text='Hours' clase='hours-title' />
      {/*  TODO: Incluir LAbel del día, ajustarlo con css */}
      <Label text='Days' clase='Days-title' />
      <Hours />
      <Month days={days} />
    </>
  );
};
