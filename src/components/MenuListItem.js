import React from 'react';
import { Link } from 'gatsby';
import styles from './MenuListItem.module.scss';

export default ({item}) => {
  const onigiriIcon = item.type === 'onigiri' ? <span className={styles.onigiri} role='img' aria-label="Rice Ball">🍙</span> : null;
  const diet = item.ingredients && item.ingredients.diet ? <span className={styles.itemDiet}>item.ingredients.diet</span> : null;

  return (
    <li className={styles.listItem}>
      <Link to={`/menu/${item.slug}`} className={styles.listLink}>
        <div className={styles.imgContainer}>
          <span role='img' className={styles.itemImg} style={{backgroundImage: `url(${item.image})`}}></span>
        </div>
        <div className={styles.itemTitle}>
          <span className={styles.itemName}>
            {item.name}{onigiriIcon}
          </span>
          {diet}
          <span className={styles.itemNote}>{item.note}</span>
        </div>
      </Link>
    </li>
  );
}