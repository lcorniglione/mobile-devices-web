import styled from 'styled-components';

export const Card = styled.div({
  boxShadow: `
  1.7px 1.5px 1.6px rgba(0, 0, 0, 0.011),
  4.2px 3.7px 3.9px rgba(0, 0, 0, 0.015),
  7.9px 6.9px 7.3px rgba(0, 0, 0, 0.019),
  14.1px 12.3px 13px rgba(0, 0, 0, 0.022),
  26.3px 23px 24.2px rgba(0, 0, 0, 0.027),
  63px 55px 58px rgba(0, 0, 0, 0.04)`,
  padding: p => p.theme.space[4],
  backgroundColor: 'white',
  borderRadius: p => p.theme.space[3],
});
