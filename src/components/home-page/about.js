import { useState } from 'react'
import Image from 'next/image'

function About() {
  const [more, setMore] = useState(false)
  const subTitle = `text-[18px] leading-[32px] text-secondary uppercase text-[#a6852b]`
  const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-primary mb-[35px] lg:max-w-[460px]`
  const desc = `text-[14px] leading-[25px] text-[#fff] mb-[80px] lg:max-w-[490px]`
  const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`
  return (
    <div id='about' className='about-area md:pt-[150px] pt-[50px]'>
      <div className='container max-lg:max-w-full fixed-lg:pr-0'>
        <div className='lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse'>
          <div className='about-content max-md:pt-10'>
            <span className={subTitle}>About</span>
            <h2 className={title}>Over 4 years leading and deeps in immigration and visit</h2>
            <h3 className='text-azure text-2xl mb-12'>
              We know that good solution means <br /> good journey
            </h3>
            <p className={desc}>
              Kun Consultancy – an influential name in the field of immigration, foreign education, spouse settlement and visit
              since 2018. We are the top study abroad and immigration consultant in Pakistan for the last 4 years. <br />
              <br />
              The portfolio of 100’s settling families as immigrants to Australia, Canada, the USA, Europe,the UK and countless
              students quenching their thirst for knowledge all across the world is the assurance of our deliverance and
              commitment
            </p>

            {more && (
              <p className={desc}>
                We started its operations for public in Haripur,Pakistan following the concept of navigating COV-EXIT. The concept
                of COV-EXIT is launched by HIS HIGHNESS SHEIKH MUHAMMAD BIN RASHID AL MAKTOUM, VICE PRESIDENT OF UAE AND THE RULER
                OF DUBAI to re-shape the economy and stabilize the damage caused by the pandemic. <br />
                <br />
                We are a one stop solution for all kinds of Business license and consultation. the motive of KunConsultancy is to
                provide assistance to all their customers to overcome the current situation caused by the pandemic while also
                saving precious time and money.
              </p>
            )}
            <button onClick={() => setMore(!more)} className='boxed-btn text-[18px] leading-[30px]'>
              {!more ? 'More About Us' : 'Less About Us'}
            </button>
          </div>
          <div className={aboutImage}>
            <Image
              src='/images/pics/24.jpg'
              alt='Service Image'
              width={390}
              height={760}
              quality={70}
              layout='fixed'
              objectFit='cover'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
