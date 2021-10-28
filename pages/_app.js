import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (<>
        <Head>
          <title>LemonGrassCloud</title>
          <link href="../node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
  );
}

export default App
