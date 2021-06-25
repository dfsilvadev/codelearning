import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | codelearning.</title>
      </Head>

      <h1>Index</h1>
    </>
  );
}

export const getStaticProps = async () => ({
  props: {},
  revalidate: 3600,
});
