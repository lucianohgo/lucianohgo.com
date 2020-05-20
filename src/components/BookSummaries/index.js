import Link from 'next/link';
import styles from './book-summary-short.module.css';
import utilStyles from '../../styles/utils.module.css';
import Date from '../Date';
import ArticlesSection from '../ArticlesSection';

export default function BookSummaries({ bookSummaries }) {
  return (
    <ArticlesSection title="Book Summaries">
      {bookSummaries.map(({ id, date, title }) => (
        <li className={styles.li} key={id}>
          <article>
            <header>
              <h3 className={styles.title}>
                <Link href="/book-summaries/[id]" as={`/book-summaries/${id}`}>
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
