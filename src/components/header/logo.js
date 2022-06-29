import Link from 'next/link'
import Image from 'next/image'

function Logo() {
  return (
    <Link href='/'>
      <a className='inline-block align-middle leading-[1]'>
        <Image src='/images/logo/logos/Color_70.png' alt='Logo' width={70} height={70} />
      </a>
    </Link>
  )
}

export default Logo
