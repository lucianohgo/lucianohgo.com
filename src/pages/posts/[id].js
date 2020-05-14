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
import Bio from '../../components/Bio';

const GITHUB_USERNAME = 'lucianohgo';
const GITHUB_REPO_NAME = 'lucianohgo.com';
const GITHUB_REPO_EDIT_URL = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master`;

export default function Post({ id, postData }) {
  const postImage = useMemo(
    () => ({
      src: postData.cover,
      alt: postData.coverAlt,
    }),
    [postData.cover, postData.coverAlt]
  );
  const editUrl = `${GITHUB_REPO_EDIT_URL}/posts/${id}.md`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://lucianohgo.com/${id}`
  )}`;

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
          <footer className={styles.postFooter}>
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
      </main>
      <aside className={styles.postAside}>
        <h3>
          <Link href="/">
            <a> Luciano H. Gomes </a>
          </Link>
        </h3>
        <Bio />
      </aside>
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

export async function getStaticProps({ params: { id } }) {
  const postData = await getPostData(id);

  return {
    props: {
      id,
      postData,
    },
  };
}
