import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={css.title}>Statistic</h2>
      <ul className={`${css.list} ${css.statistics}`}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
      </ul>
      <div className={css.totalBody}>
        <p>Total: {total()}</p>
        <p>Positive feedback: {positivePercentage()} %</p>
      </div>
    </>
  );
};
