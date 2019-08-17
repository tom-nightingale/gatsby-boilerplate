const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

//Create work pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        project: allDatoCmsProject {
          edges {
            node {
              slug
            }
          }
        },
        service: allDatoCmsService {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      //Create work pages
      result.data.project.edges.map(({ node: project }) => {
        createPage({
          path: `projects/${project.slug}`,
          component: path.resolve(`./src/templates/project.js`),
          context: {
            slug: project.slug,
          },
        })
      });
      result.data.service.edges.map(({ node: service }) => {
        createPage({
          path: `services/${service.slug}`,
          component: path.resolve(`./src/templates/service.js`),
          context: {
            slug: service.slug,
          },
        })
      });
      resolve()
    })
  })
}
