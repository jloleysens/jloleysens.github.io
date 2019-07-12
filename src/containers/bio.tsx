/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const author = data.site.siteMetadata.author;

        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <p>
              Hi, I'm <strong>{author}</strong>. I like writing software in
              JavaScript and TypeScript and listening to noisey music.
            </p>
          </div>
        );
      }}
    />
  );
}

export const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
