import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';
import Bio from '../containers/bio';
import { doThemeSetup } from '../hooks/use-theme-setup';
import * as components from '../components';
import { Theme } from '../styles';

function MainHeading({ author }: { author: string; }) {
  return (
    <components.FlexGroup direction="column">
      <components.FlexItem>
        <h1
          style={{
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
      </components.FlexItem>
      <components.FlexItem>
        <components.ImageContainer>
          <StaticImage
            src="../../content/assets/profile-pic.jpg"
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
      </components.FlexItem>
    </components.FlexGroup>
  );
}

const MySmallH3 = styled.h3`
  margin: 0 ${() => rhythm(0.5)};
  color: var(--a-light);
`;
function SmallHeading() {
  return (
    <MySmallH3>
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
    </MySmallH3>
  );
}

const StickyContainer = styled.div`
  position: relative;
`;

const StickyContent = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
  display: flex;
  position: sticky;
  padding-right: ${() => rhythm(1)};
  margin-top: ${() => rhythm(1.5)};
  width: fit-content;
  top: ${() => rhythm(1)};
`;

function Layout({ location, children, back }: any) {
  const themeContext = React.useContext(ThemeContext);
  const rootPath = `${__PATH_PREFIX__}/`;
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
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

  if (themeContext) doThemeSetup(themeContext as Theme);

  return (
    <StickyContainer>
      <components.HeaderContainer isRootPath={isRootPath}>
        <components.FlexGroup direction="column" alignItems="center">
          <components.FlexItem>
            {isRootPath
              ? MainHeading({
                  author,
                })
              : SmallHeading()}
          </components.FlexItem>
        </components.FlexGroup>
      </components.HeaderContainer>
      <components.FlexGroup>
        {back ? (
          <StickyContent>
            <Link
              style={{
                fontSize: rhythm(1.5),
              }}
              to={`/${back}`}
            >
              {'<'}
            </Link>
          </StickyContent>
        ) : null}
        <components.FlexItem>
          <components.MainContainer>
            {children}
            <hr
              style={{
                marginTop: rhythm(0.5),
                marginBottom: rhythm(1),
              }}
            />
            <Bio />
          </components.MainContainer>
        </components.FlexItem>
      </components.FlexGroup>
    </StickyContainer>
  );
}

export default Layout;
