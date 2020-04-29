import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/Layout';
import Date from '../../components/date';
import styles from './post.module.css';
import Link from 'next/link';

export default function Post({ postData }) {
  return (
    <Layout>
      <main>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
