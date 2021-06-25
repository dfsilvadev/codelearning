import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | codelearning.</title>
      </Head>

      <Layout>
        <h1>Index</h1>
      </Layout>
    </>
  );
}

// export const getStaticProps = async () => ({
//   props: {},
//   revalidate: 3600,
// });
