import { useEffect } from 'react';
import Router from 'next/router';
import { pageview } from '../lib/tracking';
import '../styles/global.css';
import '../styles/solarized-dark.theme.css';
import '../fonts/fonts.css';
import { setUpCoreVitalsTracking } from '../lib/performance-metrics';

Router.events.on('routeChangeComplete', (url) => pageview(url));

export default function App({ Component, pageProps }) {
  useEffect(() => {
    setUpCoreVitalsTracking();
  }, []);

  return <Component {...pageProps} />;
}
