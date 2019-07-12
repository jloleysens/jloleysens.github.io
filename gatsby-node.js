const path = require(`path`)
const {
  createFilePath
} = require(`gatsby-source-filesystem`)

function categoryBlogCreator(category, graphql, createPage) {
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  return graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//${category}//" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          category,
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null;
  })
}

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  return Promise.all([
    categoryBlogCreator('code', graphql, createPage),
    categoryBlogCreator('music', graphql, createPage),
  ]);
}

exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const {
    createNodeField
  } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
