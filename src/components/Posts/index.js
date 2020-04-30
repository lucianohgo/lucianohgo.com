import Link from 'next/link';
import styles from './post-short.module.css';
import utilStyles from '../../styles/utils.module.css';
import Date from '../Date';

export default function Posts({ posts }) {
  return (
    <ul className={utilStyles.list}>
      {posts.map(({ id, date, title }) => (
        <li className={styles.li} key={id}>
          <article>
            <header>
              <h3 className={styles.postTitle}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </h3>
            </header>
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </article>
        </li>
      ))}
    </ul>
  );
}
