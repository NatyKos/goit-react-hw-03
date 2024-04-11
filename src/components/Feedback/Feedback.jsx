import css from './Feedback.module.css';
export default function Feedback({
  feedback: { good, neutral, bad },
  total,
  positive,
}) {
  return (
    <div className={css.feedback}>
      <p className={css.good}>Good: {good}</p>
      <p className={css.neutral}>Neutral: {neutral}</p>
      <p className={css.bad}>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}
