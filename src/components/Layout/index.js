import Head from 'next/head';
import styles from './layout.module.css';
import Header from './Header';

const siteTitle = 'Luciano H. Gomes';
const siteName = 'lucianohgo.com';

export default function Layout({ children, home, name = siteTitle } = {}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content={siteName} />
      </Head>
      <Header name={name} home={home} />
      {children}
    </div>
  );
}

export { siteTitle };
