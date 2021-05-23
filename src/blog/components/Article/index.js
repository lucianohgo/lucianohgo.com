import React from 'react';
import typographyStyles from '../../../shared/theme/typography.module.css';
import ContentAuthors from '../Authors';
import styles from './article.module.css';
import Date from '../../../shared/components/Date';
import { AppearsIn } from '../AppearsIn';

export default function ContentArticle({ data, editUrl, discussUrl }) {
  return (
    <article>
      <h1 className={typographyStyles.headingXl}>{data.title}</h1>
      <div className={typographyStyles.lightText}>
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
