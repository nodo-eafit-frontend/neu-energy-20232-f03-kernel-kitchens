import { useEffect } from "react";

const namespace = 'cell';

export const Cell = ({ value, energy, percent = 0.65 }) => {


  const getClassCell = (percent) => {
    if (percent === 0) {
      const intensity = "nulo"
      return `${namespace} ${intensity}`
    } else if (percent > 0 && percent <= 0.25) {
      const intensity = "bajo"
      return `${namespace} ${intensity}`
    } else if (percent > 0.25 && percent <= 0.50) {
      const intensity = "medio-bajoo"
      return `${namespace} ${intensity}`
    } else if (percent > 0.50 && percent <= 0.75) {
      const intensity = "medio-alto"
      return `${namespace} ${intensity}`
    } else {
      const intensity = "alto"
      return `${namespace} ${intensity}`
    }
  };

  return <div className={getClassCell(percent)}>{value}</div>;
};
