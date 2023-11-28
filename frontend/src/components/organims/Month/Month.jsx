import { Day } from '../../molecules';

const namespace = 'month';
export const Month = ({ days = [] }) => {
  return (
    <section className={namespace}>
      {days.map((item) => (
        <Day {...item} />
      ))}
    </section>
  );
};

module.exports = Month;
