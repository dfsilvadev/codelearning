import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import { AuthProvider } from '../contexts/AuthContext';

import theme from '../styles/theme';

const myTheme = extendTheme(theme);

const GlobalStyles = ({ children }) => (
  <>
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 7px !important;
        }
        ::-webkit-scrollbar-track {
          background: #f2f3f5 !important;
        }
        ::-webkit-scrollbar-thumb {
          background: #00ff5f !important;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #00ff5f !important;
        }
      `}
    />

    {children}
  </>
);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
