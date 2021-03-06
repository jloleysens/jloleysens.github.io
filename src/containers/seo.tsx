/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import _Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Helmet: any = _Helmet;

interface Props {
  lang: string;
  meta: any[];
  keywords: string[];
  description: string;
  title: string;
}

function SEO({ description, lang, meta, keywords, title }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultKeywords = [
    'sombrerob.ro',
    'sombrerobro',
    'jloleysens',
    'JeanLouis',
    'Jean-Louis',
    'Leysens',
    'blog',
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: process.env.WEBSITE_URL,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat({
          name: 'keywords',
          content: defaultKeywords.concat(keywords).join(', '),
        })
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: '',
  meta: [],
  keywords: [],
  description: '',
};

export default SEO;
