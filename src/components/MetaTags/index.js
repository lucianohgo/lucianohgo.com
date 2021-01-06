import Head from 'next/head';

export default function MetaTags({ title, description, image }) {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:site" content="@lucianohgo" />
      <meta name="twitter:creator" content="@lucianohgo" />
      {image ? (
        <>
          <meta property="og:image" content={image.src} />
          <meta name="twitter:image:alt" content={image.alt} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
    </Head>
  );
}
