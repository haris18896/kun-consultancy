import Head from 'next/head'
import React, { Fragment } from 'react'
import HeaderOne from '../../components/header/header-1'
import PageBannerServiceDetails from '../../components/page-banner/index-3'

import { TbLicense } from 'react-icons/tb'
import { FaMemory, FaRegCheckCircle, FaPeopleCarry, FaMoneyBillAlt, FaRegBuilding } from 'react-icons/fa'
import { IoNewspaperSharp } from 'react-icons/io5'
import { RiBankLine } from 'react-icons/ri'
import { SiGithubsponsors } from 'react-icons/si'
import { MdAppRegistration } from 'react-icons/md'

function BusinessSetup() {
  const desc = `md:text-[19px] text-[16px] leading-[35px] text-[#fff] w-[100%] lg:w-[70%] align-center justify-center m-auto`

  const businessItems = [
    {
      title: 'Trade License',
      icon: <TbLicense />
    },
    {
      title: 'VAT Registration',
      icon: <MdAppRegistration />
    },
    {
      title: 'Local Sponsor',
      icon: <SiGithubsponsors />
    },
    {
      title: 'Ejari',
      icon: <FaMoneyBillAlt />
    },
    {
      title: 'Bank Assistance',
      icon: <RiBankLine />
    },
    {
      title: 'Legal Consultation',
      icon: <FaPeopleCarry />
    },
    {
      title: 'Municipality Approval',
      icon: <FaRegCheckCircle />
    },
    {
      title: 'Power of Attorney',
      icon: <IoNewspaperSharp />
    },
    {
      title: 'Memorandum of Association',
      icon: <FaMemory />
    },
    {
      title: 'Approvals from all Government Departments',
      icon: <FaRegBuilding />
    }
  ]

  return (
    <Fragment>
      <Head>
        <title>Business Setup</title>
      </Head>
      <HeaderOne />
      <PageBannerServiceDetails />
      <>
        <div id='services' className='service-area p-[30px]'>
          <div className='container max-w-full lg:p-[70px] text-center flex flex-col'>
            <h2 className='title text-primary lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>
              Business Setup (Dubai-UAE)
            </h2>
            <p className={desc}>
              At Kun Consulting, we provide a wide range of business setup services in Dubai for start-ups, medium enterprises,
              and large business concerns
            </p>
          </div>
        </div>
        <div className='container max-w-full lg:pl-[70px] lg:pr-0 text-center'>
          <div className='text-left  flex flex-col-reverse'>
            <div className='lg:col-span-4 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]'>
              <div className='service-content grid'>
                <div className='fixed-md:grid fixed-md:grid-cols-2 fixed-lg:grid fixed-lg:grid-cols-3 fixed-xl:grid fixed-xl:grid-cols-3 fixed-xxl:grid fixed-xxl:grid-cols-5 gap-[25px]'>
                  <>
                    {businessItems.map((item, index) => (
                      <div className='service-box' key={index}>
                        <div className='service-box-inner border-none'>
                          <div className='service-list flex-col text-center'>
                            <div className='icon text-primary mb-[12px] m-auto'>{item?.icon}</div>
                            <div className='contentServices'>
                              <h3 className='title text-[#fff]'>{item?.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default BusinessSetup
