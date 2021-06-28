import Head from 'next/head';

function Player() {
  return (
    <div>
      <Head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie || !document.cookie.includes('codelearning.auth')) {
                window.location.href = "/"
              }
            `,
          }}
        />
      </Head>
      player
    </div>
  );
}

export default Player;
