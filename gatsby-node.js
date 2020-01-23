const path = require("path");
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/pages/blog/template.js`);
  const patientResourcesTemplate = path.resolve(`src/pages/patient-resources/template.js`);
  const whatWeDoTemplate = path.resolve(`src/pages/what-we-do/template.js`);
  const whoWeAreTemplate = path.resolve(`src/pages/who-we-are/template.js`);
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
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let temp = null;
    switch (node.parent.relativeDirectory) {
      case "blog":
        temp = blogTemplate;
        break;
      case "patient-resources":
        temp = patientResourcesTemplate;
        break;
      case "who-we-are":
        temp = whoWeAreTemplate;
        break;
      case "what-we-do":
        temp = whatWeDoTemplate;
        break;
    }
    createPage({
      path: node.parent.relativeDirectory + '/' + node.parent.name,
      component: temp,
      context: {
        id: node.id,
      }, // additional data can be passed via context
    })
  })
};
