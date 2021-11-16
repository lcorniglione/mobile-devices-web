import styled from 'styled-components';

export const Input = styled.input({
  maxWidth: '50%',
  height: '100%',
  padding: p => p.theme.space[1],
  backgroundColor: p => p.theme.colors.white,
  borderRadius: 5,
  border: p => `2px solid ${p.hasError ? 'red' : p.theme.colors.primary}`,

  '&:focus': {
    border: p => `2px solid ${p.theme.colors.accent} !important`,
    backgroundColor: p => p.theme.colors.white + '!important',
  },
});
