import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      url: 'https://ezan-vakti.vercel.app',
      name: 'Ezan Vakti',
      description: 'Yaşadığınız bölgenin ezan vakitlerini gösterir.',
      author: '@ademilter'
    }

    return (
      <Html>
        <Head>
          <meta name="application-name" content={meta.name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={meta.name} />
          <meta name="description" content={meta.description} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/icon-apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/icon-favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/icon-favicon-16x16.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/icon-safari-pinned-tab.svg"
            color="#5bbad5"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={meta.url} />
          <meta name="twitter:title" content={meta.name} />
          <meta name="twitter:description" content={meta.description} />
          {/*<meta*/}
          {/*  name="twitter:image"*/}
          {/*  content="https://yourdomain.com/static/icons/android-chrome-192x192.png"*/}
          {/*/>*/}
          <meta name="twitter:creator" content={meta.author} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={meta.name} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:site_name" content={meta.name} />
          <meta property="og:url" content={meta.url} />
          {/*<meta*/}
          {/*  property="og:image"*/}
          {/*  content="https://yourdomain.com/static/icons/apple-touch-icon.png"*/}
          {/*/>*/}
        </Head>

        <body className="antialiased bg-gray-900 text-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
