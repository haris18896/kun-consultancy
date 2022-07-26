import Head from 'next/head'
import React, { Fragment } from 'react'
import HeaderOne from '../../components/header/header-1'
import PageBannerServiceDetails from '../../components/page-banner/index-3'

import { FaFlagCheckered } from 'react-icons/fa'
import { AiFillFlag, AiOutlineFlag } from 'react-icons/ai'
import { IoMdFlag } from 'react-icons/io'

function VisaConsultancy() {
  const desc = `md:text-[19px] text-[16px] leading-[35px] text-[#fff] w-[100%] lg:w-[70%] align-center justify-center m-auto`
  return (
    <Fragment>
      <Head>
        <title>Visa Consultancy</title>
      </Head>
      <HeaderOne />
      <PageBannerServiceDetails />
      <>
        <div id='services' className='service-area p-[30px]'>
          <div className='container max-w-full lg:p-[70px] text-center flex flex-col'>
            <h2 className='title text-primary lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>Visa Consultancy</h2>
            <p className={desc}>
              Kun Consulting deals with visa processing in the United Arab Emirates, Kingdom of Saudi Arabia, Qatar, Canada,
              United States of America, and Schengen Countries. We also guide clients with any uncertainties or discrepancies
              associated with visa processing and documentation.
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
                            <AiOutlineFlag />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>United Arab Emirate</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <IoMdFlag />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Kingdom of Saudi Arabia</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <AiFillFlag />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Qatar</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <FaFlagCheckered />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Canada</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <IoMdFlag />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>United States of America</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <AiFillFlag />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Schengen Countrie</h3>
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

export default VisaConsultancy
