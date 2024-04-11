import css from '../Options/Options.module.css';

export default function Options({ onUpdate, total, reset }) {
  return (
    <div className={css.btnBox}>
      <button className={css.btn} onClick={() => onUpdate('good')}>
        Good
      </button>
      <button className={css.btn} onClick={() => onUpdate('neutral')}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onUpdate('bad')}>
        Bad
      </button>
      {total !== 0 && (
        <button className={css.btn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
