function AboutDetails() {
  const desc = `md:text-[19px] text-[16px] leading-[35px] text-[#fff] w-[100%] lg:w-[70%] align-center justify-center m-auto`
  return (
    <div id='services' className='service-area p-[30px]'>
      <div className='container max-w-full lg:p-[70px] text-center flex flex-col'>
        <h2 className='title text-primary lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>About Us</h2>
        <h3 className='text-[#c9ad1a] text-2xl mb-12'>What kind of services do we offer?</h3>
        <p className={desc}>
          We are a one-stop solution for all kinds of Business licenses and consultations. The motive of Kun Consulting is to
          assist all its customers in overcoming the current situation caused by the pandemic while also saving precious time and
          money. We have started operations for the public in Pakistan, KSA, Qatar, and UAE. We help grow individual creative
          solutions for businesses and start-ups globally. We create for you a unique brand identity that makes your brand
          versatile & competitive.
          <br />
          <br /> Our support team at Kun Consulting is extremely interactive with our clients to ensure we address all our clients
          concerns as a high priority. Moreover, we provide consistent support throughout the day and take active measures to
          guarantee our clients necessities are actively monitored 24/7.
        </p>
      </div>
    </div>
  )
}

export default AboutDetails
