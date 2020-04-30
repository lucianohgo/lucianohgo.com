import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

const Heading = ({ home, children }) =>
  home ? <h1>{children}</h1> : <h3>{children}</h3>;

export default function Header({ home, name }) {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navHomeLink} ${utilStyles.headingMd}`}>
        <Heading home={home}>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </Heading>
      </nav>
    </header>
  );
}
