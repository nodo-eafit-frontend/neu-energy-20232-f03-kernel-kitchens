import { useEffect, useState } from "react";


const namespace = 'cell';



export const Cell = ({ value, energy, percent = 0.65 }) => {
  const [valor, setValor] = useState(value);
  const [clase, setClase] = useState(namespace);
  console.log(clase);


  const getClassCell = (percent) => {
    if (percent === 0) {
      const intensity = "nulo"
      return setClase(`${namespace} ${intensity}`)
    } else if (percent > 0 && percent <= 0.25) {
      const intensity = "bajo"
      return setClase(`${namespace} ${intensity}`)
    } else if (percent > 0.25 && percent <= 0.50) {
      const intensity = "medio-bajoo"
      return setClase(`${namespace} ${intensity}`)
    } else if (percent > 0.50 && percent <= 0.75) {
      const intensity = "medio-alto"
      return setClase(`${namespace} ${intensity}`)
    } else {
      const intensity = "alto"
      return setClase(`${namespace} ${intensity}`)
    }
  };

  useEffect(() => {
    getClassCell(percent);
  }, [valor]);





  return <div className={clase}>{value}</div>;
};
