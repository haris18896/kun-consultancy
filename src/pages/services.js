import Head from 'next/head'
import { Fragment } from 'react'
import HeaderOne from '../components/header/header-1'
import AllServices from '../components/home-page/AllServices.js'
import Services from '../components/home-page/services'
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
      <AllServices services={props.services} />
    </Fragment>
  )
}

export function getStaticProps() {
  const services = getAllItems('services')
  return {
    props: {
      services
    }
  }
}

export default allItemsPage
