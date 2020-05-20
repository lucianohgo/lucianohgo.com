import Link from 'next/link';
import styles from './appears-in.module.css';

export function AppearsIn({ posts, ...props }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div {...props}>
      Appears in:
      <ul className={styles.commaList}>
        {posts.map(({ slug: id, title }) => (
          <li key={id} className={styles.commaListItem}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
