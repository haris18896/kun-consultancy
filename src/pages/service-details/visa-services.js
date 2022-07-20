import Head from 'next/head'
import React, { Fragment } from 'react'
import HeaderOne from '../../components/header/header-1'
import PageBannerServiceDetails from '../../components/page-banner/index-3'
import { RiVisaFill } from 'react-icons/ri'
import { GrVisa } from 'react-icons/gr'
import { SiFreelancer } from 'react-icons/si'

function VisaServices() {
  const desc = `md:text-[19px] text-[16px] leading-[35px] text-[#fff] w-[100%] lg:w-[70%] align-center justify-center m-auto`
  return (
    <Fragment>
      <Head>
        <title>Visa Services</title>
      </Head>
      <HeaderOne />
      <PageBannerServiceDetails />
      <>
        <div id='services' className='service-area p-[30px]'>
          <div className='container max-w-full lg:p-[70px] text-center flex flex-col'>
            <h2 className='title text-primary lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>Visa Services (UAE)</h2>
            <p className={desc}>
              Kun Consulting extends professional visa services on all domains of visas. With an efficient team of visa
              consultants, we deal with all types of visa processing in the UAE. We also guide clients with any uncertainties or
              discrepancies associated with visa processing and documentation.
            </p>
          </div>
        </div>
        <div className='container max-w-full lg:pl-[70px] lg:pr-0 text-center'>
          <div className='text-left  flex flex-col-reverse'>
            <div className='lg:col-span-4 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]'>
              <div className='service-content grid'>
                <div className='fixed-md:grid fixed-md:grid-cols-2 fixed-xl:grid fixed-xl:grid-cols-3 gap-[25px]'>
                  <>
                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <SiFreelancer />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Freelance Visa</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <GrVisa />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Golden Visa</h3>
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
                            <h3 className='title text-[#fff]'>Visit Visa (3 months/outside the country)</h3>
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
                            <h3 className='title text-[#fff]'>Visit Visa (1 month/outside the country)</h3>
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

export default VisaServices
