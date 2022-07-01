import Head from 'next/head'
import { Fragment } from 'react'
import Breadcrumb from '../../components/breadcrumb'
import HeaderTwo from '../../components/header/header-2'
import AllProjects from '../../components/projects/all-projects'
import { getAllItems } from '../../lib/items-util'

function allItemsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Services</title>
        <meta name='description' content='Kun Consultancy' />
      </Head>
      <HeaderTwo />
    </Fragment>
  )
}

export function getStaticProps() {
  return {
    props: {}
  }
}

export default allItemsPage
