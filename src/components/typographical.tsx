import styled from 'styled-components';
import { rhythm } from '../utils/typography';

export const HeaderContainer: any = styled.header`
  display: flex;
  flex-direction: column;

  padding-top: ${() => rhythm(1.5)};
  border-bottom: 1px solid grey;
  height: ${(props: any) => (props.isRootPath ? rhythm(6) : rhythm(3))};
  justify-content: center;
  padding-top: ${(props: any) =>
    props.isRootPath ? rhythm(1.5) : rhythm(0.5)};
  background: ${() =>
    `linear-gradient(45deg, var(--a-dark), var(--c-dark-cold-grey), var(--a-cold))`};
`;

export const ImageContainer = styled.div`
  display: flex;
  align-self: center;
  text-align: center;
  margin-bottom: 0;
  transform: ${() => `translate(0, ${rhythm(1.5)})`};
`;

// For some reason this breaks when loaded the first
// time...
export const SmallHeading = styled.h3`
  display: flex;
  align-self: center;
  margin-left: ${() => rhythm(0.5)};
  margin-right: ${() => rhythm(0.5)};
  margin-top: 0;
  color: ${props => props.theme.lightText};
`;

export const MainContainer = styled.main`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: min(100vw, ${() => rhythm(24)});
  padding: ${() => `${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;
