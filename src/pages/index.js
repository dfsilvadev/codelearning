import Head from "next/head";
import Layout from "../components/Layout";

import useAuth from "../hooks/useAuth";

export default function Home() {
  const { signIn } = useAuth();

  return (
    <>
      <Head>
        <title>Home | codelearning.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Welcome to codelearning!</h1>
        <button type="button" onClick={() => signIn()}>
          Entrar
        </button>
      </Layout>
    </>
  );
}
