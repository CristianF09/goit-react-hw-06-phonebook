import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search Contacts"
        className={styles.searchInput}
      />
    </div>
  );
};

export default Filter;