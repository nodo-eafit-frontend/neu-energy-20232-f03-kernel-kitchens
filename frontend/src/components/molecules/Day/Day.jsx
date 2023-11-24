import { Label, Cell } from '../../atoms';

export const Day = ({day, hours=[]}) => {
  return (
    <>
      <Label text={day}/>
      {hours.map((consumptionXhour) => {
        return <Cell value={consumptionXhour}/>
        })};
    </>
  );
};
