import Link from 'next/link';
import styles from './post-short.module.css';
import utilStyles from '../../styles/utils.module.css';
import Date from '../Date';
import ArticlesSection from '../ArticlesSection';

export default function Posts({ posts, locale = 'en-US' }) {
  return (
    <ArticlesSection title="Posts">
      {posts.map(({ id, [locale]: { date, title } }) => (
        <li className={styles.li} key={id}>
          <article>
            <header>
              <h3 className={styles.postTitle + ' ' + utilStyles.headingMd}>
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
    </ArticlesSection>
  );
}
