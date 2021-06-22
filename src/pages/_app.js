import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import { AuthProvider } from "../contexts/AuthContext";

import theme from "../styles/theme";

const myTheme = extendTheme(theme);

const GlobalStyles = ({ children }) => (
  <>
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
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
