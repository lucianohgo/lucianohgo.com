import Head from 'next/head';
import Layout from '../components/Layout';
import Bio from '../components/Bio';
import { getSortedPostsData } from '../lib/posts';
import styles from './home.module.css';
import PostsSection from '../components/Posts';
import Footer from '../components/Footer/Footer';
import MetaTags from '../components/MetaTags';
import { getSortedBookSummaries } from '../lib/book-summaries';
import BookSummariesSection from '../components/BookSummaries';

const name = 'Luciano H. Gomes';
const description =
  'Come see and hopefully learn from my thoughts on software engineering and web development :)';

export default function Home({ content: { posts, bookSummaries } }) {
  return (
    <Layout home name={name}>
      <Head>
        <title>{name}</title>
      </Head>
      <MetaTags title={name} description={description} />
      <Bio />
      <main>
        <PostsSection posts={posts} />
        <BookSummariesSection bookSummaries={bookSummaries} />
      </main>
      <Footer className={styles.footer} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allBookSummariesData = getSortedBookSummaries();

  return {
    props: {
      content: {
        posts: allPostsData,
        bookSummaries: allBookSummariesData,
      },
    },
  };
}
