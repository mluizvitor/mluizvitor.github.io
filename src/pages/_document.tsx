import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta name="theme-color" content="#9F63D4" />
          <meta
            name="description"
            content={
              'Sou apaixonado por tecnologia e entusiasta do mundo Linux desde meus ' +
              '12~13 anos. Desde 2019 tenho estudado programação, especialmente focado ' +
              'no Front-end onde quero seguir carreira.'
            }
          />
          <link href="/inter_web/inter.css" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
