import { Day } from "../../molecules";


export const Month = ({ days = [] }) => {

  return (

    <>
      {days.map((item) => {
        return <Day {...item}/>
        })};
    </>


  );
};
