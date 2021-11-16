import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {QueryClientProvider, QueryClient, QueryCache} from 'react-query';
import toast, {Toaster} from 'react-hot-toast';

import App from './App';
import {GlobalStyle, defaultTheme as theme} from 'styles';
import dict from 'utils/dict';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // one hour
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
  queryCache: new QueryCache({
    onError: error => {
      toast.error(`${dict.anErrorOcurred}: ${error.message}`);
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster position="top-right" />
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
