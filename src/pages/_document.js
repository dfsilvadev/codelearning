import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700?family=Inter:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />

          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
