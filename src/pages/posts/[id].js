import { useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/Layout';
import Date from '../../components/Date';
import PostsAuthors from '../../components/PostAuthors';
import styles from './post.module.css';
import MetaTags from '../../components/MetaTags';

export default function Post({ postData }) {
  const postImage = useMemo(
    () => ({
      src: postData.cover,
      alt: postData.coverAlt,
    }),
    [postData.cover, postData.coverAlt]
  );

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <MetaTags
        title={postData.title}
        description={postData.description}
        image={postImage}
      />
      <main>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <PostsAuthors authors={postData.authors} />
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
