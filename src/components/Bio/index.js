import React from 'react';
import styles from './introduction.module.css';
import Picture from '../Picture';
import PersonSchema from './PersonSchema';

const name = 'Luciano H. Gomes';

export default function Bio() {
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
        Personal website of <a href="https://twitter.com/HG_Luciano">{name}</a>{' '}
        Proud "owner" of 3 beautiful cats 🐈 I write on software and management
      </p>
    </aside>
  );
}
