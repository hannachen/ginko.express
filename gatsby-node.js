const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query MenuList {
      menu {
        listMenuItems {
          items {
            id
            name
            slug
            type
            category
            image
            note
            price
          }
        }
      }
    }
  `);

  data.menu.listMenuItems.items.forEach(menuItem => {
    console.log('menuItem',menuItem);
    const {id: menuItemId, slug} = menuItem;
    actions.createPage({
      path: `/menu/${slug}`,
      component: path.resolve(`./src/components/MenuPage.js`),
      context: {menuItemId},
    })
  });
};