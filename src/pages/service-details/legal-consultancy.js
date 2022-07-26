import Head from 'next/head'
import React, { Fragment } from 'react'
import HeaderOne from '../../components/header/header-1'
import PageBannerServiceDetails from '../../components/page-banner/index-3'
import { RiFilePaper2Fill, RiVisaFill } from 'react-icons/ri'
import { GiViola, GiCancel } from 'react-icons/gi'
import { IoBan } from 'react-icons/io5'

function LegalConsultation() {
  const desc = `md:text-[19px] text-[16px] leading-[35px] text-[#fff] w-[100%] lg:w-[70%] align-center justify-center m-auto`
  return (
    <Fragment>
      <Head>
        <title>Legal Consultation</title>
      </Head>
      <HeaderOne />
      <PageBannerServiceDetails />
      <>
        <div id='services' className='service-area p-[30px]'>
          <div className='container max-w-full lg:p-[70px] text-center flex flex-col'>
            <h2 className='title text-primary lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>
              Legal Consultation (UAE){' '}
            </h2>
            <p className={desc}>
              At Kun Consulting, we offer legal consultation within UAE to all individuals. If you are looking for a specialist to
              help with any litigation, this is the place to go. We have the knowledge and experience required to provide
              top-notch service without delay
            </p>
          </div>
        </div>
        <div className='container max-w-full lg:pl-[70px] lg:pr-0 text-center'>
          <div className='text-left  flex flex-col-reverse'>
            <div className='lg:col-span-4 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]'>
              <div className='service-content grid'>
                <div className='fixed-md:grid fixed-md:grid-cols-2 fixed-lg:grid fixed-lg:grid-cols-3 fixed-xl:grid fixed-xl:grid-cols-3 fixed-xxl:grid fixed-xxl:grid-cols-5 gap-[25px]'>
                  <>
                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <RiFilePaper2Fill />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Federal Tax Authority</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <RiVisaFill />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Visit Visa Extension</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <GiCancel />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Blacklist Check</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <IoBan />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Ban Solution</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <GiViola />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Visa Violation Discount</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Fragment>
  )
}

export default LegalConsultation
