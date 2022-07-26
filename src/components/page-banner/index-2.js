import Link from 'next/link'

function PageBannerTwo() {
  return (
    <div className='page-banner bg-page-banner-2 flex items-end justify-start lg:h-[950px] h-[550px] bg-fixed bg-center bg-cover relative before:absolute before:bg-black before:opacity-40 before:w-full before:h-full'>
      <div className='container'>
        <div className='banner-content pb-[80px] relative'>
          <span className='text-[18px] leading-[29px] text-white uppercase max-w-[225px] block'>Kun Consultancy</span>
          <h4 className='sm:text-[60px] text-[24px] sm:leading-[60px] text-white'>Services</h4>
          <div className='info text-white hover:text-primary transition-all text-[14px] pt-[15px] uppercase block lm:hidden'>
            <Link href='mailto:info@kunconsultingservices.com'>info@kunconsultingservices.com</Link>
          </div>
        </div>
        <div className='info text-white hover:text-primary transition-all text-[14px] uppercase absolute bottom-[100px] xl:right-[70px] right-[15px] z-[2] hidden lm:block'>
          <Link href='mailto:info@kunconsultingservices.com'>info@kunconsultingservices.com</Link>
        </div>
      </div>
    </div>
  )
}

export default PageBannerTwo
