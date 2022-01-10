import styled from 'styled-components';

export const FlexGroup = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems ?? 'flex-start'};
  justify-content: center;
`;
