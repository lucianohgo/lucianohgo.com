import Router from 'next/router';
import '../shared/theme/global.css';
import '../shared/fonts/fonts.css';
import { event, pageview } from '../tracking';
import { ThemeProvider } from '../shared/theme/ThemeProvider';

Router.events.on('routeChangeComplete', (url) => pageview(url));

export function reportWebVitals({ id, name, label, value }) {
  event({
    action: name,
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    label: id, // id unique to current page load
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    non_interaction: true, // avoids affecting bounce rate.
  });
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
