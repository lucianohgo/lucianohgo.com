import Link from 'next/link';
import styles from './post-short.module.css';
import utilStyles from '../../styles/utils.module.css';
import Date from '../date';

const Posts = ({ posts }) => (
  <ul className={utilStyles.list}>
    {posts.map(({ id, date, title }) => (
      <li className={styles.li} key={id}>
        <Link href="/posts/[id]" as={`/posts/${id}`}>
          <a>
            <span className={styles.postTitle}>{title}</span>
          </a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
    ))}
  </ul>
);

export default Posts;
