import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';

const Heading = ({ home, children }) =>
  home ? <h1>{children}</h1> : <h3>{children}</h3>;

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
        <ul className={styles.navLinks}>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
