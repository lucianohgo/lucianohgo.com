import typographyStyles from '../../../shared/theme/typography.module.css';

const padding1px = {
  paddingTop: '1px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

export default function ArticlesSection({ title, children }) {
  return (
    <section className={typographyStyles.headingMd} style={padding1px}>
      <h2 className={typographyStyles.headingLg}>{title}</h2>
      <ul style={listStyle}>{children}</ul>
    </section>
  );
}
