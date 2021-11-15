import styled from 'styled-components';

import AppRouter from 'components/AppRouter';

const AppContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: p => p.theme.colors.background,
  minHeight: '100vh',
});

function App() {
  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}

export default App;
