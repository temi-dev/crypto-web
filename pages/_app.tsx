import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = pageProps.blue ? 'blue-bg' : '';
  });
  return (
    <>
      <title>Kochure - Web</title>
      <meta name="description" content="Kochure Web" />
      <meta name="theme-color" content="#1d38e4" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
