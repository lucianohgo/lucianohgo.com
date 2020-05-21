import React from 'react';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/Date';
import ContentAuthors from '../../components/ContentAuthors';
import styles from './article.module.css';
import { AppearsIn } from '../../components/AppearsIn';

export default function ContentArticle({ data, editUrl, discussUrl }) {
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{data.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={data.date} />
        <AppearsIn className={styles.appearsIn} posts={data.appearsIn} />
      </div>
      <ContentAuthors authors={data.authors} />
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      <footer className={styles.footer}>
        <hr />
        <p>
          <a href={discussUrl} target="_blank" rel="noopener noreferrer">
            Discuss on Twitter
          </a>
          {` • `}
          <a href={editUrl} target="_blank" rel="noopener noreferrer">
            Edit on GitHub
          </a>
        </p>
      </footer>
    </article>
  );
}
