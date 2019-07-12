// TODO: Move this to another directory called 'containers'

import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import Bio from '../containers/bio';
import { useThemeSetup } from '../hooks/use-theme-setup';
import * as components from '../components/typo';

function MainHeading({ author, image }: { author: string; image: any }) {
  return (
    <>
      <components.BigHeading
        style={{
          ...scale(1.5),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {'J'}
          {<span style={{ fontFamily: 'sans-serif' }}>λ</span>}
          {'O'}
        </Link>
      </components.BigHeading>
      <components.ImageContainer>
        <Image
          fixed={image}
          alt={author}
          style={{
            width: 75,
            height: 75,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </components.ImageContainer>
    </>
  );
}

function SmallHeading() {
  return (
    <components.SmallHeading>
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {'J'}
        {<span style={{ fontFamily: 'sans-serif' }}>λ</span>}
        {'O'}
      </Link>
    </components.SmallHeading>
  );
}

function Layout({ location, children }: any) {
  const themeContext = React.useContext(ThemeContext);
  const rootPath = `${__PATH_PREFIX__}/`;
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );
  const { author } = data.site.siteMetadata;
  const isRootPath = location.pathname === rootPath;

  useThemeSetup(themeContext);

  return (
    <div>
      <components.HeaderContainer isRootPath={isRootPath}>
        {isRootPath
          ? MainHeading({ author, image: data.avatar.childImageSharp.fixed })
          : SmallHeading()}
      </components.HeaderContainer>
      <components.MainContainer>
        {children}
        <hr
          style={{
            marginTop: rhythm(0.5),
            marginBottom: rhythm(1),
          }}
        />
        <Bio />{' '}
      </components.MainContainer>
    </div>
  );
}

export default Layout;
