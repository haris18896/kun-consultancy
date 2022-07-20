import Link from 'next/link'
import Image from 'next/image'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as GrIcons from 'react-icons/gr'
import { useRouter } from 'next/router'
function Services({ services }) {
  const router = useRouter()
  return (
    <div
      id='services'
      // style={{ backgroundColor: '#152535' }}
      className='service-area  md:pt-160 pt-[60px] relative before:bg-pattern-1 before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]'
    >
      <div className='container max-w-full lg:pl-[70px] lg:pr-0'>
        <div className='lg:grid lg:grid-cols-12 flex flex-col-reverse'>
          <div className='lg:col-span-6 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]'>
            <div className='service-content xl:w-[490px] w-full ml-auto'>
              <span className='sub-title text-[#c9ad1a] text-[18px] leading-[32px] uppercase mb-[25px] block'>Services</span>
              <h2 className='title text-primary lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>
                Best solutions for <br /> your dream.
              </h2>
              <div className='fixed-md:grid fixed-md:grid-cols-2 grid max-md:gap-[25px]'>
                {services.slice(0, 3)?.map(service => {
                  const Icon = AiIcons[service?.icon] || GiIcons[service?.icon] || GrIcons[service?.icon]
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
                      <div className='service-box-inner'>
                        <div className='service-list'>
                          <div className='icon text-primary'>
                            <Icon />
                          </div>
                          <div className='content'>
                            <h3 className='title text-primary'>
                              <Link href='/services'>
                                <a className='hover:underline'>{service?.title}</a>
                              </Link>
                            </h3>
                            <p className='desc'>{service?.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='lg:col-span-6'>
            <div className='service-image flex justify-end w-full lg:h-full h-[679px] relative'>
              <Image src='/images/pics/18.jpg' alt='Service Image' quality={70} layout='fill' objectFit='cover' priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
