// TODO: Move this to another directory called 'containers'

import React from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'styled-components';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';
import Bio from '../containers/bio';
import { useThemeSetup } from '../hooks/use-theme-setup';
import * as components from '../components/typographical';

function MainHeading({ author, image }: { author: string; image: any }) {
  return (
    <>
      <h1
        style={{
          display: 'flex',
          alignSelf: 'center',
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        <Link style={{ color: 'var(--a-light)' }} to={'/'}>
          {'J'}
          {<span style={{ fontFamily: 'sans-serif' }}>λ</span>}
          {'O'}
        </Link>
      </h1>
      <components.ImageContainer>
        <Image
          fixed={image}
          alt={author}
          style={{
            width: 75,
            height: 75,
            borderRadius: '100%',
          }}
          imgStyle={{
            borderRadius: '50%',
          }}
        />
      </components.ImageContainer>
    </>
  );
}

function SmallHeading() {
  return (
    <h3
      style={{
        display: 'flex',
        alignSelf: 'center',
        marginLeft: rhythm(0.5),
        marginRight: rhythm(0.5),
        marginTop: 0,
        color: 'var(--a-light)',
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to={'/'}
      >
        {'J'}
        {<span style={{ fontFamily: 'sans-serif' }}>λ</span>}
        {'O'}
      </Link>
    </h3>
  );
}

function Layout({ location, children, back }: any) {
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
        {back ? (
          <Link
            style={{
              fontSize: rhythm(1.5),
              position: 'fixed',
              top: '120px',
              transform: 'translateX(-100px)',
            }}
            to={`/${back}`}
          >
            {'<'}
          </Link>
        ) : null}
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
