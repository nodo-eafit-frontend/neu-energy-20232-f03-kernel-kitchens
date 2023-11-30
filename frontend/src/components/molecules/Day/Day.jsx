import { Cell, Label } from '../../atoms';

export const Day = ({ day, consumption_hour = [] }) => {
  return (
    <>
      <Label text={day} />
      {consumption_hour.map((consumptionXhour) => {
        return <Cell energy={consumptionXhour.energy} percent={consumptionXhour.percent} />;
      })}
    </>
  );
};
