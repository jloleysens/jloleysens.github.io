import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import SEO from '../containers/seo';

function NotFoundPage(props: any) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
