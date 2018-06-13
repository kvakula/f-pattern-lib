import styled from 'styled-components';
const Button = styled.button`
  background: #0013FF;
  border: none;
  border-radius: 2px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: #36395F;
  }
`;
export default Button;

import * as colors from '../styles/colors';
const Button = styled.button`
  background: ${({ bgColor })  => colors[bgColor]};
  ...
  color: ${({ fontColor })  => colors[fontColor]};
  ...
  &:hover {
    background: ${({ hoverColor })  => colors[hoverColor]};
  }
`;
Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  hoverColor: 'darkBlue',
};
export default Button;
