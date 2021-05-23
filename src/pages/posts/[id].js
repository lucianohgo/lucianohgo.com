import React, { useMemo } from 'react';
import Layout from '../../shared/components/Layout';
import MetaTags from '../../shared/components/MetaTags';
import ContentArticle from '../../blog/components/Article';
import ContentAside from '../../blog/components/ContentAside';
import { getAllPostIds, getPostData } from '../../blog/lib/posts';
import { PageHead } from '../../shared/components/PageHead';
import styles from './posts.module.css';

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
  const editUrl = `${GITHUB_REPO_EDIT_URL}/content/posts/${id}/en-US.md`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://lucianohgo.com/posts/${id}`
  )}`;

  return (
    <Layout>
      <PageHead>
        <title>{postData.title}</title>
      </PageHead>
      <MetaTags
        title={postData.title}
        description={postData.description}
        image={postImage}
      />
      <main>
        <ContentArticle
          data={postData}
          discussUrl={discussUrl}
          editUrl={editUrl}
        />
      </main>
      <ContentAside />
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
