import styled from 'styled-components';

export const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: p => `repeat(${p.columns}, 1fr);`,
  gridGap: p => p.gap,
});
