import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../containers/layout';
import SEO from '../containers/seo';
import { rhythm } from '../utils/typography';

function Code(props: any) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Code Blog"
        keywords={[
          'blog',
          'javascript',
          'typescript',
          'functional programming',
        ]}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title;
        return (
          <div key={node.fields.slug}>
            <h3 style={{ marginBottom: rhythm(1 / 4) }}>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small> {node.frontmatter.date} </small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        );
      })}{' '}
    </Layout>
  );
}

export default Code;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//code//" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
