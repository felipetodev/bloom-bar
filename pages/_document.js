import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>
        <link rel='stylesheet' href='https://use.typekit.net/qwn6cbc.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Abel&display=swap' rel='stylesheet' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Marcellus&family=Roboto:wght@100;400;500;700&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
