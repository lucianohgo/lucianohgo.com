import styles from './introduction.module.css';
import Picture from '../Picture';

const Bio = ({ name }) => (
  <aside className={styles.aside}>
    <Picture
      file="profile"
      className={styles.picture}
      imgProps={{
        className: `${styles.introductionImage} ${styles.borderCircle}`,
        alt: name,
      }}
    />
    <p className={styles.text}>
      Personal blog of <a href="https://twitter.com/HG_Luciano">{name}</a> Proud
      "owner" of 3 beautiful cats 🐈 I write on software
    </p>
  </aside>
);

export default Bio;
