// TODO: Move this to another directory called 'containers'

import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import Bio from '../components/bio';
import { useThemeSetup } from '../hooks/use-theme-setup';

const HeaderContainer: any = styled.header`
  padding-top: ${() => rhythm(1.5)};
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  height: ${(props: any) => (props.isRootPath ? rhythm(6) : rhythm(3))};
  justify-content: center;
  padding-top: ${(props: any) =>
    props.isRootPath ? rhythm(1.5) : rhythm(0.5)};
  background: ${props =>
    `linear-gradient(45deg, var(--a-dark), var(--c-dark-cold-grey), var(--a-cold), var(--a-light))`};
  background-size: 400% 400%;
  animation: Gradient 50s ease infinite;

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-self: center;
  text-align: center;
  margin-bottom: 0;
  transform: ${() => `translate(0, ${rhythm(0.5)})`};
`;

const StyledH1 = styled.h1`
  display: flex;
  align-self: center;
  margin-bottom: 0;
  margin-top: 0;
  color: ${props => props.theme.lightText};
`;

const StyledSmall3 = styled.h3`
  display: flex;
  align-self: center;
  margin-left: ${() => rhythm(0.5)};
  margin-top: 0;
  color: ${props => props.theme.lightText};
`;

const StyledMain = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: ${() => rhythm(24)};
  padding: ${() => `${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;

function MainHeading({ author, image }: { author: string; image: any }) {
  return (
    <>
      <StyledH1
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
      </StyledH1>
      <ImageContainer>
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
      </ImageContainer>
    </>
  );
}

function SmallHeading() {
  return (
    <StyledSmall3>
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
    </StyledSmall3>
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
      <HeaderContainer isRootPath={isRootPath}>
        {isRootPath
          ? MainHeading({ author, image: data.avatar.childImageSharp.fixed })
          : SmallHeading()}
      </HeaderContainer>
      <StyledMain>
        {children}
        <hr
          style={{
            marginTop: rhythm(0.5),
            marginBottom: rhythm(1),
          }}
        />
        <Bio />{' '}
      </StyledMain>
    </div>
  );
}

export default Layout;
