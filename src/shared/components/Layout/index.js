import styles from './layout.module.css';
import Header from '../../../shared/components/Header';
import { Footer } from '../Footer';

export default function Layout({ children, largeLogo } = {}) {
  return (
    <>
      <div className={styles.container}>
        <Header largeLogo={largeLogo} />
        {children}
        <Footer />
      </div>
    </>
  );
}
