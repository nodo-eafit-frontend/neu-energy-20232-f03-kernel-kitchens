import { Month } from "../Month/Month";
import { Hours } from "../../molecules";
import { Label } from "../../atoms";

export const Table = ({days}) => {

  return (<>
    <Label  text='Hours' clase='hours-title' />
    <Hours />
    <Month days={days} />
  </>)
};
