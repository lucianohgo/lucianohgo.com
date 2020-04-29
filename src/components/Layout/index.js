import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Luciano H. Gomes';

export default function Layout({ children, name = siteTitle } = {}) {
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
      <header className={styles.header}>
        <nav className={`${styles.navHomeLink} ${utilStyles.headingMd}`}>
          <Link href="/">{name}</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
