const namespace = 'label';

export const Label = ({text, clase=''}) => {
  return <span className={namespace+clase}>{text}</span>;
};
