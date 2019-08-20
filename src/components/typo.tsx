import styled from 'styled-components';
import { rhythm } from '../utils/typography';

export const HeaderContainer: any = styled.header`
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

export const ImageContainer = styled.div`
  display: flex;
  align-self: center;
  text-align: center;
  margin-bottom: 0;
  transform: ${() => `translate(0, ${rhythm(1.5)})`};
`;

// export const BigHeading = styled.h1`
//   display: flex;
//   align-self: center;
//   margin-bottom: 0;
//   margin-top: 0;
//   color: ${props => props.theme.lightText};
// `;

export const SmallHeading = styled.h3`
  display: flex;
  align-self: center;
  margin-left: ${() => rhythm(0.5)};
  margin-right: ${() => rhythm(0.5)};
  margin-top: 0;
  color: ${props => props.theme.lightText};
`;

export const MainContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: ${() => rhythm(24)};
  padding: ${() => `${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;
