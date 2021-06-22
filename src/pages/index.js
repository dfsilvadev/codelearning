import Head from 'next/head'

import useAuth from '../hooks/useAuth'

export default function Home() {
  const { user, signIn } = useAuth();

  console.log(user)

  return (
    <>
      <Head>
        <title>Home | codelearning.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to codelearning!
        </h1>        
        <button onClick={() => signIn()}>Entrar</button>
      </main>
    </>
  )
}
