import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../containers/layout';
import SEO from '../containers/seo';
import { rhythm } from '../utils/typography';

function Index(props: any) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[
          `blog`,
          `javascript`,
          `music`,
          `punk`,
          `post-metal`,
          `typescript`,
          `functional programming`,
        ]}
      />
      {'<'}
      {[
        { name: 'Programming', slug: 'code' },
        { name: 'Music', slug: 'music' },
      ].map(thing => {
        return (
          <h3
            key={thing.name}
            style={{ margin: `${rhythm(1)} 0 ${rhythm(1)} ${rhythm(1)}` }}
          >
            <Link style={{ boxShadow: `none` }} to={thing.slug}>
              {thing.name}
            </Link>
          </h3>
        );
      })}
      {'/>'}
    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
