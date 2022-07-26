import Head from 'next/head'
import React, { Fragment } from 'react'
import HeaderOne from '../../components/header/header-1'
import PageBannerServiceDetails from '../../components/page-banner/index-3'
import { RiHotelFill } from 'react-icons/ri'
import { MdFamilyRestroom, MdPerson } from 'react-icons/md'

function Accommodation() {
  const desc = `md:text-[19px] text-[16px] leading-[35px] text-[#fff] w-[100%] lg:w-[70%] align-center justify-center m-auto`
  return (
    <Fragment>
      <Head>
        <title>Accommodation</title>
      </Head>
      <HeaderOne />
      <PageBannerServiceDetails />
      <>
        <div id='services' className='service-area p-[30px]'>
          <div className='container max-w-full lg:p-[70px] text-center flex flex-col'>
            <h2 className='title text-primary lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>Accommodation (UAE)</h2>
            <p className={desc}>
              Kun Consulting helps people with accommodations in the United Arab Emirates. We provide hotel packages, bed spaces,
              furnished apartments for bachelors and Temporary accommodation, and furnished apartments for Families
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
                            <RiHotelFill />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Hotel Packages</h3>
                            <p className='desc '>Accommodation in best Hotel</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <MdPerson />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Bachelors</h3>
                            <ul>
                              <li className='desc '>Bed space</li>
                              <li className='desc '>Furnished Apartment</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='service-box'>
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <MdFamilyRestroom />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-[#fff]'>Family</h3>
                            <ul>
                              <li className='desc '>Temporary Accommodation</li>
                              <li className='desc '>Furnished Apartment</li>
                            </ul>
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

export default Accommodation
