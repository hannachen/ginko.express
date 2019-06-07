import React from 'react';
import { graphql } from 'gatsby';
import Layout from './Layout';
import styles from './MenuPage.module.scss';

export default ({ data }) => {
  const item = data.menu.menuItemById;
  const image = item.image ? <img src={item.image} alt={item.name} className={styles.itemImage} /> : null;

  return (
    <Layout>
      <article className={styles.itemPage}>
        <h2>{item.name}</h2>
        <h4>{item.type} | {item.category}</h4>
        {image}
      </article>
    </Layout>
  );
}

export const query = graphql`
  query menuItemById($menuItemId: String!) {
    menu {
      menuItemById(id: $menuItemId) {
        id
        name
        slug
        type
        category
        image
        ingredients {
          name
          diet
        }
      }
    }
  }
`