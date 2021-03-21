import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import MetaTags from '../../components/MetaTags';
import profiles from '../../profiles';

const hintStyle = {
  fontSize: '16px',
  color: '#AAAAAA',
};

export default function Me() {
  return (
    <Layout>
      <Head>
        <title>About @lucianohgo</title>
      </Head>
      <MetaTags
        title={'About @lucianohgo'}
        description={'Page about me :)'}
        image="/images/me/me.jpeg"
      />
      <main>
        <h1>About Me</h1>
        <p>Hey, I'm Luciano H. Gomes (@lucianohgo) 👋🏾 </p>
        <Image
          alt={'Me and my girlfriend in the best time of the year'}
          width={1080}
          height={800}
          src="/images/me/me.jpeg"
        />
        <h2>Contact me</h2>
        <ul>
          <li>
            <a href={profiles.twitter}>twitter/@lucianohgo</a>
          </li>
          <li>
            <a href={profiles.linkedIn}>linkedin/lucianohgo</a>
          </li>
        </ul>
        <p>
          I'm not really active in other platforms so use those and I'll be sure
          to respond 🤗
        </p>
        <h2>
          Who am I <span style={hintStyle}>(hint: not Jean Valjean)</span>
        </h2>
        <p>
          <strong>
            👨🏾‍💻 Engineering Manager{' '}
            <a href="https://quintoandar.com.br">@ QuintoAndar</a>
          </strong>
        </p>
        <p>
          I'm a Software Engineer from Fortaleza, Brasil 🇧🇷. Sheer luck has
          placed me in some awesome places and introduced me to how Products are
          built. I absolutely love this world and believe Product-Led companies
          will be called just companies in the future. That everything will be
          built with the customers in the center. That B2B and B2C will be one
          in the same.
        </p>
        <p>Currently I'm focused on:</p>
        <ul>
          <li>UX obsession is built and embedded in companies' cultures.</li>
          <li>
            How to maintain quality and agility during iterative and fast-paced
            development
          </li>
          <li>
            How to grow tech leadership and excellence within the company.
          </li>
        </ul>
        <p>
          I write on a{' '}
          <a href="https://www.getrevue.co/profile/lucianohgo">newsletter</a>{' '}
          and here on my <a href="/">blog</a>. Check them out 👀
        </p>
      </main>
    </Layout>
  );
}
