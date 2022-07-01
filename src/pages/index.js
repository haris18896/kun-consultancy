import { Fragment } from 'react'
import Head from 'next/head'
import { getAllItems, getFeaturedItems } from '../lib/items-util'
import HeaderOne from '../components/header/header-1'
import Hero from '../components/home-page/hero'
import Services from '../components/home-page/services'
import About from '../components/home-page/about'
import PricingTab from '../components/home-page/pricing-tab'
import Testimonial from '../components/home-page/testimonial'
// import Brand from '../components/home-page/brand'
// import FeaturedPost from '../components/home-page/featured-post'
// import LatestProject from '../components/home-page/latest-project'

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
      <Testimonial testimonialItems={props.testimonialItems} />
    </Fragment>
  )
}

export function getStaticProps() {
  const heroItems = getAllItems('heros')
  const posts = getAllItems('posts')
  const services = getAllItems('services')
  const testimonialItems = getAllItems('testimonial')

  return {
    props: {
      heroItems,
      services,
      testimonialItems
    }
  }
}

export default HomePage
