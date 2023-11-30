import React from 'react';
import { Label } from '../../atoms';

const namespace = 'hours';
const cuadrado = 'cuadradito';

// const horas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const horas = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00','00:00'];

export const Hours = () => {
  return (
    <div className={namespace}>
      <span className={`${namespace}--${cuadrado}`}></span>
      <section className={`${namespace}--cont`}>
        {horas.map((value) => {
          return <Label text={value}/>;
        })}
      </section>
    </div>
  );
};
