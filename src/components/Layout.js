import React from 'react';
import styles from './Layout.module.scss';

export default ({ children }) => (
  <div>
    <header className={styles.header}>
      <h1>
        <span className={styles.ginko}>Ginko Express</span>
        <span className={styles.an}>Anime North 2020</span>
      </h1>
    </header>
    <section className={styles.container}>
      {children}
    </section>
  </div>
);