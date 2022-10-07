import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.cdnfonts.com/css/noblesville'
            rel='stylesheet'
          />
          <link
            href='https://fonts.cdnfonts.com/css/neue-reman-sans'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
