import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';

const Heading = ({ home, children }) =>
  home ? <h1>{children}</h1> : <h3>{children}</h3>;

const aboutStyle = {
  paddingRight: '16px',
};

export default function Header({ home, name }) {
  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} ${styles.navHomeLink} ${utilStyles.headingMd}`}
      >
        <Heading home={home}>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </Heading>
        <div className={styles.table}>
          <ul className={styles.navLinks}>
            <li className={styles.navLinksItem} style={aboutStyle}>
              <Link href="/me">
                <a>About</a>
              </Link>
            </li>
            <li className={styles.navLinksItem}>
              {' '}
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
