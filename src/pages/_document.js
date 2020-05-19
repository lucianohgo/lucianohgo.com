import Document, { Head, Html, Main, NextScript } from 'next/document';
import { gaTrackingId } from '../lib/tracking';

export default class HomepageDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId()}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTrackingId()}', {
              page_path: window.location.pathname,
            });
            
            if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
