import Link from 'next/link';
import styles from './post-short.module.css';
import typographyStyles from '../../../shared/theme/typography.module.css';
import ArticlesSection from '../ArticlesSection';
import Date from '../../../shared/components/Date';

export default function Posts({ posts, locale = 'en-US' }) {
  return (
    <ArticlesSection title="Posts">
      {posts.map(({ id, [locale]: { date, title } }) => (
        <li className={styles.li} key={id}>
          <article>
            <header>
              <h3
                className={styles.postTitle + ' ' + typographyStyles.headingMd}
              >
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </h3>
            </header>
            <small className={typographyStyles.lightText}>
              <Date dateString={date} />
            </small>
          </article>
        </li>
      ))}
    </ArticlesSection>
  );
}
