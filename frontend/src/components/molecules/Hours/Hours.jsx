import React from 'react';
import { Label } from '../../atoms';

const namespace = 'hours';

const horas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

export const Hours = () => {
  return (
    <div className={namespace}>
      <span></span>
      {horas.map((value) => {
        return <Label text={value} />;
      })}
    </div>
  );
};
