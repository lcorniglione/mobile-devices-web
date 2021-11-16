import styled from 'styled-components';

export const Header = styled.nav({
  height: 86,
  backgroundColor: p => p.theme.colors.primary,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: p => `0 ${p.theme.space[5]} 0 ${p.theme.space[5]}`,
  width: '100%',
  boxShadow: `
  0px 0.1px 0.3px rgba(0, 0, 0, 0.006),
  0px 0.3px 0.7px rgba(0, 0, 0, 0.008),
  0px 0.6px 1.4px rgba(0, 0, 0, 0.01),
  0px 1.1px 2.7px rgba(0, 0, 0, 0.012),
  0px 2.1px 5.1px rgba(0, 0, 0, 0.014),
  0px 5px 10px rgba(0, 0, 0, 0.02)
`,
});

export default Header;
