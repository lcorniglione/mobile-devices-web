import styled from 'styled-components';

export const Flex = styled.div({
  display: 'flex',
  flexDirection: p => p.direction || 'row',
  gap: p => p.gap || 0,
  alignItems: p => p.alignItems || '',
  justifyContent: p => p.justifyContent || '',
});
