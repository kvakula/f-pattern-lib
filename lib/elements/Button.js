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
