const path = require("path")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              date
              title
            }
            id
            parent {
              id
              ... on File {
                name
                relativeDirectory
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.parent.relativeDirectory + '/' + node.parent.name,
      component: blogPostTemplate,
      context: {
        id: node.id,
      }, // additional data can be passed via context
    })
  })
}
