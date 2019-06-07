import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MenuList from '../components/MenuList';

export default ({data}) => {
  const menuItems = data.menu.listMenuItems.items;
  const groupedMenu = menuItems.reduce((menu, item) => {
    const {category} = item;
    menu[category] = menu[category] || [];
    menu[category].push(item);
    return menu;
  }, {});

  return (
    <Layout>
      {Object.keys(groupedMenu).map((category, i) => (
        <MenuList key={i} category={category} items={groupedMenu[category]} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query MenuList {
    menu {
      listMenuItems(
        filter: {
          published: {
            eq: true
          }
        }
      ) {
        items {
          id
          name
          slug
          type
          category
          image
          note
          ingredients {
            diet
          }
        }
      }
    }
  }
`