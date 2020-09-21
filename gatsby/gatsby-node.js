/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      pg {
        tutorials {
          slug
          title
          redirect
          slides
        }
      }
    }
  `)
  result.data.pg.tutorials.forEach(({ tutorial }) => {
    console.log(tutorial);
    createPage({
      path: `/products/${tutorial.slug}`,
      component: path.resolve(`./src/templates/tutorial.js`),
      context: {
        tutorial: tutorial,
      },
    })
  })
}
