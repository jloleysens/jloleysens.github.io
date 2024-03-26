import styled from 'styled-components';
import { identity } from 'lodash';

interface Props {
  direction?: 'row' | 'column';
  alignItems?: 'flex-start' | 'center' | 'flex-end';
}
export const FlexGroup = styled.div.attrs<Props>(identity)`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems ?? 'flex-start'};
  justify-content: center;
`;
