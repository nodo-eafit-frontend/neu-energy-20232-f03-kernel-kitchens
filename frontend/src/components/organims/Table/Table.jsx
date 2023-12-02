import { Label } from '../../atoms';
import { Hours } from '../../molecules';
import { Month } from '../Month/Month';

const namespace = 'table';

export const Table = ({ days }) => {
  return (
    <>
      <Label text='Hours' clase='-hours-title' />
      <Label text='Days' clase='-days-title' />
      <Hours />
      <Month days={days} class={namespace}/>
    </>
  );
};
