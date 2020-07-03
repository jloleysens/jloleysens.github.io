import React from 'react';
import styled from 'styled-components';

export const FlexGroup = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: flex-start;
`;
