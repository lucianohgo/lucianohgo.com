import styles from './post-authors.module.css';

export default function PostAuthors({ authors }) {
  return (
    <div className={styles.authors}>
      {authors.map(
        ({
          login,
          avatar_url: avatarUrl,
          name,
          profile,
          twitter,
          linkedin,
        }) => (
          <div key={login} className={styles.author}>
            <img src={avatarUrl} alt={name} className={styles.authorImg} />
            <div className={styles.authorInfo}>
              <cite className={styles.authorName}>{name}</cite>
              <ul className={styles.authorLinks}>
                <li className={styles.authorLink}>
                  <a href={profile}>Github</a>
                </li>
                {twitter && (
                  <li className={styles.authorLink}>
                    <a href={twitter}>Twitter</a>
                  </li>
                )}
                {linkedin && (
                  <li className={styles.authorLink}>
                    <a href={linkedin}>LinkedIn</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )
      )}
    </div>
  );
}
