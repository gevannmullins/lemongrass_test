import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
