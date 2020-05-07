import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ value, onSearch, onChange }) => (
  <header className={styles.searchbar}>
    <form className={styles.searchForm} onSubmit={onSearch}>
      <button type="submit" className={styles.button}>
        <span className={styles.label}>Search</span>
      </button>

      <input
        className={styles.input}
        type="text"
        autoComplete="off"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        placeholder="Search images and photos"
        name="query"
        value={value}
        onChange={onChange}
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Searchbar;
