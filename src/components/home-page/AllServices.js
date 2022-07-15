import Link from 'next/link'
import * as AiIcons from 'react-icons/ai'
import * as TiIcons from 'react-icons/ti'
import * as FaIcons from 'react-icons/fa'
import * as TbIcons from 'react-icons/tb'
import * as MdIcons from 'react-icons/md'
import * as SiIcons from 'react-icons/si'
import * as RiIcons from 'react-icons/ri'
import * as IoIcons from 'react-icons/io5'

function AllServices({ services }) {
  return (
    <div id='services' className='service-area md:pt-160 pt-[60px]'>
      <div className='container max-w-full lg:pl-[70px] lg:pr-0 text-center'>
        <span className='sub-title text-[#fff] text-[18px] leading-[32px] uppercase mb-[25px] block'>What We Do!</span>
        <h2 className='title text-primary lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>Our Services</h2>
        <h3 className='text-[#fff] text-2xl mb-12'>
          It will be our immense pleasure to consult you in your vision and future goals.
        </h3>
        <div className='text-left  flex flex-col-reverse'>
          <div className='lg:col-span-4 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]'>
            <div className='service-content grid'>
              <div className='fixed-md:grid fixed-md:grid-cols-2 fixed-xl:grid fixed-xl:grid-cols-3 gap-[25px]'>
                {services?.map(service => {
                  const Icon =
                    AiIcons[service?.icon] ||
                    TiIcons[service?.icon] ||
                    FaIcons[service?.icon] ||
                    TbIcons[service?.icon] ||
                    MdIcons[service?.icon] ||
                    SiIcons[service?.icon] ||
                    RiIcons[service?.icon] ||
                    IoIcons[service?.icon]
                  return (
                    <div className='service-box' key={service?.title}>
                      <div className='service-box-inner'>
                        <div className='service-list'>
                          <div className='icon text-primary'>
                            <Icon />
                          </div>
                          <div className='content'>
                            <h3 className='title text-primary'>{service?.title}</h3>
                            <p className='desc '>{service?.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllServices
