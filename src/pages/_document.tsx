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
            content="Um local para mostrar minhas habilidades."
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
