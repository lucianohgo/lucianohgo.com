import React, { useMemo } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import MetaTags from '../../components/MetaTags';
import ContentArticle from '../../components/ContentArticle';
import ContentAside from '../../components/ContentAside';
import {
  getAllBookSummaryIds,
  getBookSummaryData,
} from '../../lib/book-summaries';

const GITHUB_USERNAME = 'lucianohgo';
const GITHUB_REPO_NAME = 'lucianohgo.com';
const GITHUB_REPO_EDIT_URL = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master`;

export default function BookSummary({ id, data }) {
  const image = useMemo(
    () => ({
      src: data.cover,
      alt: data.coverAlt,
    }),
    [data.cover, data.coverAlt]
  );
  const editUrl = `${GITHUB_REPO_EDIT_URL}/content/book-summaries/${id}/en-US.md`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://lucianohgo.com/book-summaries/${id}`
  )}`;

  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <MetaTags
        title={data.title}
        description={data.description}
        image={data}
      />
      <main>
        <ContentArticle data={data} discussUrl={discussUrl} editUrl={editUrl} />
      </main>
      <ContentAside />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllBookSummaryIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const data = await getBookSummaryData(id);

  return {
    props: {
      id,
      data,
    },
  };
}
