import { Month } from "../Month/Month";
import { Hours } from "../../molecules";
import { Label } from "../../atoms";

export const Table = ({days}) => {

  return (<>
    <Month days={days} />
    <Label />
    <Hours />
  </>)
};
