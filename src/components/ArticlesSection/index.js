import utilStyles from '../../styles/utils.module.css';

export default function ArticlesSection({ title, children }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>{title}</h2>
      <ul className={utilStyles.list}>{children}</ul>
    </section>
  );
}
