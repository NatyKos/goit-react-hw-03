import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.search}>
      <p>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={e => onSearch(e.target.value)}
        />
      </p>
    </div>
  );
}
