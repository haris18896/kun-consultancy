import { Fragment } from 'react'
import Head from 'next/head'
import { getAllItems } from '../lib/items-util'
import HeaderOne from '../components/header/header-1'
import Hero from '../components/home-page/hero'
import Services from '../components/home-page/services'
import About from '../components/home-page/about'

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Kun Consultancy</title>
        <meta name='description' content='Kun Consultancy ' />
      </Head>
      <HeaderOne />
      <Hero heroItems={props.heroItems} />
      <Services services={props.services} />
      <About />
    </Fragment>
  )
}

export function getStaticProps() {
  const heroItems = getAllItems('heros')
  const services = getAllItems('services')

  return {
    props: {
      heroItems,
      services
    }
  }
}

export default HomePage
