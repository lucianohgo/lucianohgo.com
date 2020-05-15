import Link from 'next/link';
import styles from './appears-in.module.css';

export function AppearsIn({ posts, ...props }) {
  if (!posts || posts.length === 0) return null;

  return (
    <p {...props}>
      Appears in:
      <ul className={styles.commaList}>
        {posts.map(({ slug, title }) => (
          <li key={slug} className={styles.commaListItem}>
            <Link href={`/posts/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </p>
  );
}
