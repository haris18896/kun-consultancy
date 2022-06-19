import React from 'react'
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

const name = 'Kun Consultancy'
export const siteTitle = 'Kun Consultancy'

function Layout({ children, title }) {
  return (
    <div className='Layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Kun Consultancy' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
