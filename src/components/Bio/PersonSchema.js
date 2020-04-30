import Head from 'next/head';
import profiles from '../../profiles';

export const personSchema = (name) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name,
  url: 'https://lucianohgo.com',
  sameAs: Object.values(profiles),
});

export default function PersonSchema({ name }) {
  return (
    <Head>
      <script
        key={`personJSON-${name}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(name)) }}
      />
    </Head>
  );
}
