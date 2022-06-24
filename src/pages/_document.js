import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='scroll-smooth'>
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' />
        </Head>
        <body className='font-inter relative'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
