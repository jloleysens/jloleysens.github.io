import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface Props {
  onClick: (eve: React.MouseEvent) => void;
  style: React.CSSProperties;
}

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid black;
`;

export function BackArrow(props: Props) {
  return <Arrow style={props.style} onClick={props.onClick} />;
}
