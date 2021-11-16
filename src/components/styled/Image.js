import styled from 'styled-components';

export const Image = styled.img({
  height: 'auto',
  width: '90%',
  marginBottom: p => p.theme.space[5],
  minHeight: p => (p.minHeight ? p.minHeight + 'px' : ''),
  minWidth: p => (p.minWidth ? p.minWidth + 'px' : ''),
});
