// Functionality
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../styles/Globals';
import { sjTheme } from '../styles/Theme';
import { ThemeProvider } from 'styled-components';

// Utils
import GlobalContext from '..';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>SJ Template</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={sjTheme}>
        <GlobalContext.Provider value={'Context test value'}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
