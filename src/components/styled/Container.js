import styled from 'styled-components';

export const Container = styled.div({
  paddingTop: p => p.theme.space[7],
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
