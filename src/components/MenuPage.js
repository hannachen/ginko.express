import React from 'react';
import { graphql } from 'gatsby';
import Layout from './Layout';
import styles from './MenuPage.module.scss';

export default ({ data }) => {
  const item = data.menu.menuItemById
  const image = item.image ? <img src={item.image} className={styles.itemImage} alt={`${item.name}`} /> : null;

  return (
    <Layout>
      <h2>{item.name}</h2>
      <h4>{item.type} | {item.category}</h4>
      {image}
    </Layout>
  )
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