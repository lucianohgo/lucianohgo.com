import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
import Header from './Header';

const siteTitle = 'Luciano H. Gomes';

export default function Layout({ children, home, name = siteTitle } = {}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Come see and hopefully learn with my thoughts on software engineering and web development :)"
        />
        <meta
          name="description"
          content="Come see and hopefully learn with my thoughts on software engineering and web development :)"
        />
        <meta property="og:image" content="/images/cover.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header name={name} home={home} />
      {children}
    </div>
  );
}

export { siteTitle };
