import React, { useMemo } from 'react';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/Layout';
import MetaTags from '../../components/MetaTags';
import ContentArticle from '../../components/ContentArticle';
import ContentAside from '../../components/ContentAside';

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
      <Head>
        <title>{postData.title}</title>
      </Head>
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
