import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = pageProps.blueBg ? 'blue-bg' : '';
  });
  return (
    <>
      <Head>
        <title>Kochure - Web</title>
        <meta name="description" content="Kochure Web" />
        <meta name="theme-color" content="#1d38e4" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
