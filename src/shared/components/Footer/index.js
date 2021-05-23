import { Profiles } from './Profiles';
import styles from './footer.module.css';

function Footer({ ...props }) {
  return (
    <footer className={styles.centered} {...props}>
      <Profiles />
    </footer>
  );
}

export { Footer };
