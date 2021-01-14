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

exports.sourceNodes = ({ actions, getNodes, getNode }) => {
  console.log(`*** GatsbyNode.sourceNodes... START`)
  const { createNodeField } = actions
  getNodes()
    .filter((node) => node.internal.type === "MarkdownRemark")
    .forEach((node) => {
      if (node.frontmatter.author) {
        const authorNode = getNodes().find(
          (node2) =>
            node2.internal.type === "MarkdownRemark" &&
            node2.frontmatter.title === node.frontmatter.author
        )
        if (authorNode) {
          createNodeField({
            node,
            name: "author",
            value: authorNode.id,
          })
        } else {
          console.log(
            `*** GatsbyNode.sourceNodes... could not find author for title=${node.frontmatter.title} author=${node.frontmatter.author}`
          )
        }
      }
      if (node.frontmatter.category) {
        const whatWeDoCategoryNode = getNodes().find(
          (node2) =>
            node2.internal.type === "MarkdownRemark" &&
            node2.frontmatter.catno === node.frontmatter.category
        )
        if (whatWeDoCategoryNode) {
          createNodeField({
            node,
            name: "categoryTitle",
            value: whatWeDoCategoryNode.frontmatter.title,
          })
        }
      }
    })
}

async function createContentPages(graphql, actions, reporter) {
  const { createPage } = actions
  const standardTemplate = path.resolve(`src/components/template.tsx`)
  const blogTemplate = path.resolve(`src/pages/blog/template.tsx`)
  const patientResourcesTemplate = path.resolve(
    `src/pages/patient-resources/template.tsx`
  )
  const whatWeDoTemplate = path.resolve(`src/pages/what-we-do/template.tsx`)
  const whoWeAreTemplate = path.resolve(`src/pages/who-we-are/template.tsx`)

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
      case "author":
        template = whoWeAreTemplate
        pagePath = `${node.fields.slug}`
        break
      case "promotion":
        template = standardTemplate
        pagePath = `${node.fields.slug}`
        break
      case "what-we-do-cat":
        template = standardTemplate
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
