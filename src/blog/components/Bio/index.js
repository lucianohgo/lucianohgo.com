import React from 'react';
import styles from './introduction.module.css';
import PersonSchema from './PersonSchema';
import Picture from '../../../shared/components/Picture';

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
        Hey, I'm {name}. I'm an Engineering Manager{' '}
        <a href="https://www.quintoandar.com.br/">@quintoandar</a>. I write on
        Product, Leadership and Building a Career in Tech 👋🏾
      </p>
    </aside>
  );
}
