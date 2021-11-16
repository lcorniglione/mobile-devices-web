import styled, {css, keyframes} from 'styled-components';
import {FaSpinner} from 'react-icons/fa';

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
});

const Spinner = styled(FaSpinner)({
  animation: css`
    ${spin} 1s linear infinite
  `,
  color: p => p.theme.colors.primary,
  width: p => p.size + 'px',
  height: p => p.size + 'px',
});
Spinner.defaultProps = {
  'aria-label': 'loading',
};

export {Spinner};
