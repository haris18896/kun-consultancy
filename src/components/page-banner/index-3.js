import Link from 'next/link'

function PageBannerServiceDetails() {
  return (
    <div className='page-banner bg-page-banner-3 flex items-end justify-start lg:h-[950px] h-[550px] bg-fixed bg-center bg-cover relative before:absolute before:bg-black before:opacity-40 before:w-full before:h-full'>
      <div className='container'>
        <div className='banner-content pb-[80px] relative'>
          <span className='text-[18px] leading-[29px] text-white uppercase max-w-[225px] block'>Kun Consulting Services</span>
          <h4 className='sm:text-[60px] text-[24px] sm:leading-[60px] text-white'>Services Details</h4>
          <div className='info text-white hover:text-primary transition-all text-[14px] pt-[15px] uppercase block lm:hidden'>
            <a href='mailto:info@kunconsultingservices.com'>info@kunconsultingservices.com</a>
          </div>
        </div>
        <div className='info text-white hover:text-primary transition-all text-[14px] uppercase absolute bottom-[100px] xl:right-[70px] right-[15px] z-[2] hidden lm:block'>
          <a href='mailto:info@kunconsultingservices.com'>info@kunconsultingservices.com</a>
        </div>
      </div>
    </div>
  )
}

export default PageBannerServiceDetails
