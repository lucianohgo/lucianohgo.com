import Router from 'next/router';
import { pageview } from '../lib/gtag';

import '../styles/global.css';
import '../styles/solarized-dark.theme.css';
import '../fonts/fonts.css';

Router.events.on('routeChangeComplete', (url) => pageview(url));

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
