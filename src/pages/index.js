import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Bio from '../components/Bio';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Posts from '../components/Posts';

const name = 'Luciano H. Gomes';

function Home({ allPostsData }) {
  return (
    <Layout home name={name}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Bio name={name} />
      <main>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <Posts posts={allPostsData} />
        </section>
      </main>
    </Layout>
  );
}

export default Home;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
