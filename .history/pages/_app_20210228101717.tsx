// Functionality
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../styles/Globals';
import { sjTheme } from '../styles/Theme';
import { ThemeProvider } from 'styled-components';

// Utils
import GlobalContext from '../components/particles/GlobalContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>

    </>
  );
}

export default MyApp;
