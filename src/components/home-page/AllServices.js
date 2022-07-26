import { useRouter } from 'next/router'

import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as GrIcons from 'react-icons/gr'
import * as RiIcons from 'react-icons/ri'
import * as SiIcons from 'react-icons/si'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import * as VscIcons from 'react-icons/vsc'
import Link from 'next/link'

function AllServices({ services }) {
  const router = useRouter()
  return (
    <div id='services' className='service-area md:pt-160 pt-[60px]'>
      <div className='container max-w-full lg:pr-0 text-center'>
        <span className='sub-title text-[#fff] text-[18px] leading-[32px] uppercase mb-[25px] block'>What We Do!</span>
        <h2 className='title text-primary lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>Our Services</h2>
        <h3 className='text-[#fff] text-2xl mb-12'>
          It will be our immense pleasure to consult you in your vision and future goals.
        </h3>
        <div className='text-left  flex flex-col-reverse'>
          <div className='lg:col-span-4 max-md:pt-[50px]'>
            <div className='service-content grid'>
              <div className='fixed-md:grid fixed-md:grid-cols-2 fixed-lg:grid fixed-lg:grid-cols-3 fixed-xl:grid fixed-xl:grid-cols-3 fixed-xxl:grid fixed-xxl:grid-cols-5 gap-[25px]'>
                {services?.map(service => {
                  const Icon =
                    AiIcons[service?.icon] ||
                    GiIcons[service?.icon] ||
                    GrIcons[service?.icon] ||
                    RiIcons[service?.icon] ||
                    VscIcons[service?.icon] ||
                    SiIcons[service?.icon] ||
                    FaIcons[service?.icon] ||
                    MdIcons[service?.icon]
                  return (
                    <div
                      className='service-box'
                      key={service?.title}
                      onClick={() => {
                        if (service?.href) {
                          router.push(`${service?.href}`)
                        }
                      }}
                    >
                      <div className='service-box-inner border-none'>
                        <div className='service-list flex-col text-center'>
                          <div className='icon text-primary mb-[12px] m-auto'>
                            <Icon />
                          </div>
                          <div className='contentServices'>
                            <h3 className='title text-primary'>
                              <Link href={service?.href}>
                                <a className='hover:underline'>{service?.title}</a>
                              </Link>
                            </h3>
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
