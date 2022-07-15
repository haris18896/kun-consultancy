import Head from 'next/head'
import { Fragment } from 'react'
import ContactForm from '../components/contact/contact-form'
import HeaderOne from '../components/header/header-1'

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
        <meta name='description' content='Send us your messages!' />
      </Head>
      <HeaderOne />
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage
