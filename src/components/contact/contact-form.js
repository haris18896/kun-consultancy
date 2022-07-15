import { AiOutlineRight } from 'react-icons/ai'
import Link from 'next/link'

function ContactForm() {
  return (
    <div className='contact-area md:pt-[145px] pt-[45px] border-[#595959] border-opacity-30 border-b md:pb-160 pb-[60px]'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-5'>
          <div className='contact-info lg:col-span-2 lg:pr-[15px]'>
            <h2 className='text-[48px] left-[58px] md:pb-[55px] pb-[35px] text-primary'>Contact</h2>
            <h3 className='text-3xl leading-9 font-semibold text-primary'>
              Haripur, <span className='text-[#fff]'>Pakistan</span>
            </h3>
            <ul className='text-[14px] leading-[27px] text-azure pt-6'>
              <li className='pb-[15px] max-w-[300px]'>new building, office# 42, Haripur, Hazara, PK</li>
              <li className='pb-[15px]'>
                <Link href='tel:+070-3689-56-56-56'>
                  <a>(+92) 311 9524434</a>
                </Link>
              </li>
              <li>
                <Link href='mailto:contact@nordicstudio.co'>
                  <a>kun@consultancy.com</a>
                </Link>
              </li>
            </ul>
            {/* <div className='button-wrap pt-[95px]'>
              <Link href='/contact'>
                <a className='inline-flex items-center text-[14px] leading-[30px] p-[11px_32px] transition duration-[0.4s] border border-[#969696] uppercase hover:border-black hover:bg-black hover:text-white'>
                  Map Direction
                  <div className='ml-[5px]'>
                    <AiOutlineRight />
                  </div>
                </a>
              </Link>
            </div> */}
          </div>
          <div className='contact-form lg:col-span-3 max-md:pt-[50px]'>
            <h2 className='text-[18px] leading-[22px] text-azure uppercase md:mb-[75px] mb-[35px]'>Send a message for us</h2>
            <form>
              <div>
                <div className='lm:flex'>
                  <input
                    className='w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black p-[15px] lm:mr-[20px]'
                    placeholder='Name'
                    type='text'
                    id='name'
                    required
                  />
                  <input
                    className='w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black p-[15px]'
                    placeholder='Email'
                    type='email'
                    id='email'
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  className='w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black p-[15px] mt-[35px]'
                  placeholder='Here goes your message'
                  id='message'
                  rows='6'
                  required
                ></textarea>
              </div>

              <div className='mt-[55px]'>
                <button className='boxed-btn text-[14px] leading-[30px]'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
