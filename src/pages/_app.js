import '../styles/globals.css'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

import Layout from '../components/layout/layout'

import { wrapper } from '../redux/store'
import { ScrollToTop } from '../components/scroll'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
    
    Router.events.on('routeChangeStart', url => {
    NProgress.start(url)
  })
  Router.events.on('routeChangeComplete', url => {
    NProgress.done(url)
  })

  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='../favicon.png' />
      </Head>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
