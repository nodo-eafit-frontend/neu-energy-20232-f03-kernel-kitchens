import React from 'react';
import { Label } from '../../atoms';

const namespace = 'hours';

export const Hours = () => {
  return (
    <div className={namespace}>
      <span></span>
      <Label />
      <Label />
      <Label />
      <Label />
    </div>
  );
};
