import * as Yup from 'yup'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { useFormik } from 'formik'
import { isObjEmpty } from '../../utils/utils'
import { IoLocationSharp, IoCallSharp, IoMail } from 'react-icons/io5'

function ContactForm() {
  const [mail, setMail] = useState('')

  const MailSchema = Yup.object().shape({
    name: Yup.string().required('Name is a required field!').min(3, 'Name must be at least 3 characters!'),
    email: Yup.string().email('Please enter a valid email address').required('Email is a required field!'),
    subject: Yup.string().required('Subject is a required field!').min(5, 'Subject must be at least 5 characters!'),
    message: Yup.string().required('Message is a required field!').min(15, 'Message must be at least 15 characters!')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: MailSchema,
    onSubmit: values => {
      if (isObjEmpty(formik.errors)) {
        const { name, email, message, subject } = values
        const data = {
          name: name,
          email: email.trim(),
          subject: subject,
          message: message
        }
        try {
          fetch('/api/mail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        } catch (error) {
          if (error) {
            setMail('Error')
          }
        }
      }
    }
  })

  useEffect(() => {
    return () => {
      setMail('')
    }
  }, [])

  return (
    <div className='contact-area md:pt-[145px] pt-[45px] border-[#595959] border-opacity-30 border-b md:pb-160 pb-[60px]'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-5'>
          <div className='contact-info lg:col-span-2 lg:pr-[15px]'>
            <h2 className='text-[48px] left-[58px] md:pb-[55px] pb-[35px] text-primary'>Contact</h2>
            {/* <h3 className='text-3xl leading-9 font-semibold text-primary'>
              Haripur, <span className='text-[#fff]'>Pakistan</span>
            </h3> */}
            <ul className='text-[14px] leading-[27px] text-azure pt-6'>
              <li className='pb-[15px] max-w-[300px] flex flex-row'>
                <IoLocationSharp size={20} color='#ffd700' />
                <span className='ml-[5px]'>Karachi Pakistan</span>
              </li>
              <li className='pb-[15px] flex flex-row'>
                <IoCallSharp size={20} color='#ffd700' />

                <Link href='tel:+923400957323'>
                  <a className='ml-[5px]'>PAK: (+92) 340 09 57 323</a>
                </Link>
              </li>
              <li className='pb-[15px] max-w-[300px] flex flex-row'>
                <IoLocationSharp size={20} color='#ffd700' />
                <span className='ml-[5px]'>Dubai UAE</span>
              </li>
              <li className='pb-[15px] flex flex-row'>
                <IoCallSharp size={20} color='#ffd700' />
                <Link href='tel:+971523073109'>
                  <a className='ml-[5px]'>UAE: (+971) 52 30 73 109</a>
                </Link>
              </li>
              <li className='flex flex-row'>
                <IoMail size={20} color='#ffd700' />
                <Link href='mailto:contact@nordicstudio.co'>
                  <a className='ml-[5px]'>kun@consultancy.com</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='contact-form lg:col-span-3 max-md:pt-[50px]'>
            <h2 className='text-[18px] leading-[22px] text-azure uppercase md:mb-[75px] mb-[35px]'>Send a message for us</h2>
            <form method='post' onSubmit={formik.handleSubmit}>
              <div>
                <div className='lm:flex'>
                  <div className=' m-[5px]'>
                    <input
                      className={classNames({
                        'w-full bg-[#c3c3c3] border-[#595959] border-opacity-70 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-primary p-[15px] lm:mr-[20px]': true,
                        'border-[#f20] border-opacity-100 ': formik.touched.name && formik.errors.name
                      })}
                      placeholder='Name'
                      type='text'
                      id='name'
                      min={3}
                      {...formik.getFieldProps('name')}
                      required
                    />
                    {formik.touched.name && formik.errors.name && <p className='text-[#f20]'>{formik.errors.name}</p>}
                  </div>
                  <div className=' m-[5px] max-sm:mt-[35px]'>
                    <input
                      className={classNames({
                        'w-full bg-[#c3c3c3] border-[#595959] border-opacity-70 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-primary p-[15px]': true,
                        'border-[#f20] border-opacity-100': formik.touched.email && formik.errors.email
                      })}
                      placeholder='Email'
                      type='email'
                      id='email'
                      {...formik.getFieldProps('email')}
                      required
                    />
                    {formik.touched.email && formik.errors.email && <p className='text-[#f20]'>{formik.errors.email}</p>}
                  </div>
                </div>
              </div>
              <div className=' m-[5px]'>
                <input
                  className={classNames({
                    'w-full bg-[#c3c3c3] border-[#595959] border-opacity-70 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-primary p-[15px] mt-[35px]': true,
                    'border-[#f20] border-opacity-100': formik.touched.message && formik.errors.message
                  })}
                  placeholder='Subject'
                  id='subject'
                  min={5}
                  rows={1}
                  {...formik.getFieldProps('subject')}
                  required
                ></input>
                {formik.touched.subject && formik.errors.subject && <p className='text-[#f20]'>{formik.errors.subject}</p>}
              </div>

              <div className=' m-[5px]'>
                <textarea
                  className={classNames({
                    'w-full bg-[#c3c3c3] border-[#595959] border-opacity-70 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-primary p-[15px] mt-[35px]': true,
                    'border-[#f20] border-opacity-100': formik.touched.message && formik.errors.message
                  })}
                  placeholder='Here goes your message'
                  id='message'
                  rows='6'
                  min={15}
                  {...formik.getFieldProps('message')}
                  required
                ></textarea>
                {formik.touched.message && formik.errors.message && <p className='text-[#f20]'>{formik.errors.message}</p>}
              </div>

              <div className='mt-[55px]'>
                <button type='submit' className='boxed-btn text-[14px] leading-[30px]'>
                  Send Message
                </button>
              </div>

              {/* {mail == 'Success' ? (
                <p className='text-[green] mt-[15px]'>Email sent successfully!</p>
              ) : mail == 'Error' ? (
                <p className='text-[#ff2200] mt-[15px]'>Error sending email</p>
              ) : (
                ''
              )} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
