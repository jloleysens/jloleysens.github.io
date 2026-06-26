const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

function categoryBlogCreator(category, graphql, createPage) {
  const BlogPost = path.resolve('./src/templates/blog-post.tsx');
  return graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//${category}//" } }
          sort: { frontmatter: { date: DESC } }
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
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      const slug = post.node.fields.slug;

      createPage({
        path: slug,
        component: BlogPost,
        context: {
          category,
          slug,
          previous,
          next,
        },
      });
    });

    return null;
  });
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return Promise.all([
    categoryBlogCreator('code', graphql, createPage),
    categoryBlogCreator('music', graphql, createPage),
    categoryBlogCreator('video-games', graphql, createPage),
  ]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const maybePathTailSection = createFilePath({
      node,
      getNode,
    });


    const value = node.fileAbsolutePath.includes('/code/')
      ? `/code${maybePathTailSection}`
      : node.fileAbsolutePath.includes('/music/')
      ? `/music${maybePathTailSection}`
      : node.fileAbsolutePath.includes('/video-games/')
      ? `/video-games${maybePathTailSection}`
      : maybePathTailSection;

    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
