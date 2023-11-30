import { useEffect, useState } from 'react';

const namespace = 'cell';

// props -> no se guardan/modificar a nivel de componente
// states -> Se guardan/modificar a nivel de componente

const getClassCell = (percent) => {
  let intensity = '';

  if (percent > 0 && percent <= 0.25) {
    intensity = 'nulo';
  } else if (percent > 0.25 && percent <= 0.5) {
    intensity = 'medio-bajo';
  } else if (percent > 0.5 && percent <= 0.75) {
    intensity = 'medio-alto';
  } else {
    intensity = 'alto';
  }

  return `${namespace}--${intensity}`;
};

export const Cell = ({ value, energy, percent = Math.random() }) => {
  return <div className={`${namespace} ${getClassCell(percent)}`}>{value}</div>;
};
