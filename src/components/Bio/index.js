import styles from './introduction.module.css';
import Picture from '../Picture';
import PersonSchema from './PersonSchema';

export default function Bio({ name }) {
  return (
    <aside className={styles.aside}>
      <PersonSchema name={name} />
      <Picture
        file="profile"
        className={styles.picture}
        imgProps={{
          className: `${styles.introductionImage} ${styles.borderCircle}`,
          alt: name,
        }}
      />
      <p className={styles.text}>
        Personal blog of <a href="https://twitter.com/HG_Luciano">{name}</a>{' '}
        Proud "owner" of 3 beautiful cats 🐈 I write on software
      </p>
    </aside>
  );
}
