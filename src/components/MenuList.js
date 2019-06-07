import React from 'react';
import MenuListItem from '../components/MenuListItem';
import {toTitleCase} from '../utils';
import styles from './MenuList.module.scss';

export default ({category, items}) => (
  <section key={category}>
    <h2 className={styles.menuCategory}>{`${toTitleCase(category)} Menu`} </h2>
    <ul className={styles.menuList}>
      {items.map((item, i) => (
        <MenuListItem key={i} item={item} />
      ))}
    </ul>
  </section>
);