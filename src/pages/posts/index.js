import { getSortedPostsData } from '../../blog/lib/posts';
import Layout from '../../shared/components/Layout';
import MetaTags from '../../shared/components/MetaTags';
import Bio from '../../blog/components/Bio';
import { PageHead } from '../../shared/components/PageHead';
import Posts from '../../blog/components/Posts';

const name = 'lucianohgo';
const description =
  'Come see and hopefully learn from my thoughts on software engineering and web development :)';

export default function PostsPage({ content: { posts } }) {
  return (
    <Layout largeLogo name={name}>
      <PageHead>
        <title>{name}</title>
      </PageHead>
      <MetaTags title={name} description={description} />
      <Bio />
      <main>
        <Posts posts={posts} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      content: {
        posts: allPostsData,
      },
    },
  };
}
