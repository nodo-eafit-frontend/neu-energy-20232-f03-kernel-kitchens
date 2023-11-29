const namespace = 'cell';

export const Cell = ({ value /* TODO: energy, percent */ }) => {
  return <div className={getClassCell(percent)}>{value}</div>;
};
