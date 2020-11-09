import React from 'react';
import styles from './Filter.module.css';

function Filter({ filter, onChange }) {
  return (
    <>
      <div className={styles.description}>Find contacts by name</div>
      <input className={styles.input} onChange={onChange} value={filter} name="filter" type="text" />
    </>
  );
}

export default Filter;
