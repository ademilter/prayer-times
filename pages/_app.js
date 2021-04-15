import '../styles/global.css'
import Head from 'next/head'
import { useEffect } from 'react'
import { forceScreenSize } from '../lib/helper'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!process.browser) return
    forceScreenSize(390, 600)
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
