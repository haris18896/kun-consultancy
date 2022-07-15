import Head from 'next/head'
import { Fragment } from 'react'
import HeaderOne from '../components/header/header-1'
import { getAllItems } from '../lib/items-util'
import PageBanner from '../components/page-banner/index'
import AboutDetails from '../components/home-page/aboutDetails'

function AboutPage(props) {
  return (
    <Fragment>
      <Head>
        <title>About</title>
      </Head>
      <HeaderOne />
      <PageBanner />
      <AboutDetails />
    </Fragment>
  )
}

export function getStaticProps() {
  return {
    props: {}
  }
}

export default AboutPage
