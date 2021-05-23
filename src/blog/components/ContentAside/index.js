import React from 'react';
import Link from 'next/link';
import styles from './aside.module.css';
import SignUpForm from '../../../shared/components/SignUpForm';
import Bio from '../Bio';

export default function ContentAside() {
  return (
    <aside className={styles.aside}>
      <SignUpForm />
      <h3>
        <Link href="/">
          <a> Luciano H. Gomes </a>
        </Link>
      </h3>
      <Bio />
    </aside>
  );
}
