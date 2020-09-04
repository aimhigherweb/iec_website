const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

async function createContentPages(graphql, actions, reporter) {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/pages/blog/template.js`)
  const patientResourcesTemplate = path.resolve(
    `src/pages/patient-resources/template.js`
  )
  const whatWeDoTemplate = path.resolve(`src/pages/what-we-do/template.js`)
  const whoWeAreTemplate = path.resolve(`src/pages/who-we-are/template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              author
              date
              title
            }
            parent {
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
    let template = null
    let pagePath = null

    switch (node.parent.relativeDirectory) {
      case "blog":
        template = blogTemplate
        pagePath = `${node.fields.slug}`
        break
      case "patient-resources":
        template = patientResourcesTemplate
        pagePath = `${node.fields.slug}`
        break
      case "who-we-are":
        template = whoWeAreTemplate
        pagePath = `${node.fields.slug}`
        break
      case "what-we-do":
        template = whatWeDoTemplate
        pagePath = `${node.fields.slug}`
        break
    }
    reporter.info(`Creating: ${pagePath}`)

    createPage({
      path: pagePath,
      component: template,
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createContentPages(graphql, actions, reporter)
}
