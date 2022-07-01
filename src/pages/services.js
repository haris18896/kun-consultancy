import Head from 'next/head'
import { Fragment } from 'react'
import HeaderOne from '../components/header/header-1'
import PageBannerTwo from '../components/page-banner/index-2'
import { getAllItems } from '../lib/items-util'

function allItemsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Services</title>
      </Head>
      <HeaderOne />
      <PageBannerTwo />
    </Fragment>
  )
}

export function getStaticProps() {
  return {
    props: {
    }
  }
}

export default allItemsPage
