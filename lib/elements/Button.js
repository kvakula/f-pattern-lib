import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px',
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px',
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px',
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px',
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px',
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px',
  },
};
function setDisplay({ size }) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}
function setWidth({ size }) {
  return size === 'fullWidth' ? '100%' : 'initial';
}

const Button = styled.button`
  background: ${({ bgColor })  => colors[bgColor]};
  ...
  color: ${({ fontColor })  => colors[fontColor]};
  ...
  &:hover {
    background: ${({ hoverColor })  => colors[hoverColor]};
  display: ${setDisplay};
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  line-height: ${({ size }) => buttonSizes[size]['line-height']};
  padding: ${({ size }) => buttonSizes[size]['padding']};
  width: ${setWidth};
  }
`;
Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  size: 'medium',
};
export default Button;
