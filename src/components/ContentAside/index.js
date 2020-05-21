import React from 'react';
import Link from 'next/link';
import styles from './aside.module.css';
import Bio from '../Bio';

export default function ContentAside() {
  return (
    <aside className={styles.aside}>
      <h3>
        <Link href="/">
          <a> Luciano H. Gomes </a>
        </Link>
      </h3>
      <Bio />
    </aside>
  );
}
