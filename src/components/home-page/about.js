import Image from 'next/image'

function About() {
  const subTitle = `text-[18px] leading-[32px] text-secondary uppercase text-[#c9ad1a]`
  const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-primary mb-[35px] lg:max-w-[460px]`
  const desc = `text-[16px] leading-[25px] text-[#fff] mb-[80px] lg:max-w-[490px]`
  const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`
  return (
    <div id='about' className='about-area md:pt-[150px] pt-[50px]'>
      <div className='container max-lg:max-w-full fixed-lg:pr-0'>
        <div className='lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse'>
          <div className='about-content max-md:pt-10'>
            <span className={subTitle}>About</span>
            <h2 className={title}>We know that good solution means good journey</h2>

            <p className={desc}>
               We are a one-stop solution for all kinds of Business licenses and consultations. The motive of Kun Consulting is to assist all its customers in overcoming the current situation caused by the pandemic while also saving precious time and money. We have started operations for the public in Pakistan, KSA, Qatar, and UAE. We help grow individual creative solutions for businesses and start-ups globally. We create for you a unique brand identity that makes your brand versatile & competitive.<br />
              <br />
              Our support team at Kun Consulting is extremely interactive with our clients to ensure we address all our clients concerns as a high priority. Moreover, we provide consistent support throughout the day and take active measures to guarantee our clients necessities are actively monitored 24/7.
            </p>
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
