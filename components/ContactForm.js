import { useState } from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
import StarIcon from '../ui/StarIcon'

const DEFAULT_STATE = {
  name: '',
  email: '',
  message: ''
}

const api = {
  sendForm: async (payload) => {
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_FORM_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })
      return await res.json()
    } catch (e) {
      console.error(e)
    }
  }
}

const ContactForm = ({ formPost }) => {
  const [form, setForm] = useState(DEFAULT_STATE)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.name && form.email) {
      const res = await api.sendForm(form)
      console.log(res)
      if (res?.success === 'true') {
        setMessage(formPost.submitMessage)
      } else {
        setMessage(formPost.errorMessage)
      }
      setForm(DEFAULT_STATE)
    }
  }

  const handleInputChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }
  return (
    <div data-scroll-section className='grid grid-cols-1 sm:grid-cols-2 bg-bloom-black-100 lg:max-h-[900px]'>
      <div className='relative px-5 pt-[200px] sm:pt-0 flex flex-col justify-center items-center sm:px-10 md:px-14 sm:my-28 lg:pb-20 lg:pt-24'>
        <div className='flex flex-col items-center gap-5'>
          <span className='text-bloom-orange-100'>
            <Image src='/bien-flama.gif' alt='flame icon' width={16} height={21} />
          </span>
          <h1 className='text-2xl text-bloom-softGray-100 text-center'>
            {formPost?.formTitle}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 pt-10 md:pt-16 w-full'>
          <div className='relative z-0 mb-6 w-full group'>
            <input value={form.name} onChange={handleInputChange} type='text' name='name' id='name' className='block py-2.5 px-0 w-full text-md text-bloom-softGray-100 bg-transparent border-0 border-b-2 border-bloom-softGray-100 appearance-none focus:outline-none focus:ring-0 focus:border-bloom-orange-100' placeholder=' ' required />
            <label htmlFor='name' className='peer-focus:font-medium absolute text-md text-bloom-softGray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bloom-orange-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Nombre
            </label>
          </div>
          <div className='relative z-0 mb-6 w-full group'>
            <input value={form.email} onChange={handleInputChange} type='email' name='email' id='email' className='block py-2.5 px-0 w-full text-md text-bloom-softGray-100 bg-transparent border-0 border-b-2 border-bloom-softGray-100 appearance-none focus:outline-none focus:ring-0 focus:border-bloom-orange-100' placeholder=' ' required />
            <label htmlFor='email' className='peer-focus:font-medium absolute text-md text-bloom-softGray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bloom-orange-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Email
            </label>
          </div>
          <div className='relative z-0 mb-6 w-full group'>
            <textarea value={form.message} onChange={handleInputChange} rows='3' name='message' id='message' className='block py-2.5 px-0 w-full text-md text-bloom-softGray-100 bg-transparent border-0 border-b-2 border-bloom-softGray-100 appearance-none focus:outline-none focus:ring-0 focus:border-bloom-orange-100' placeholder=' ' required />
            <label htmlFor='message' className='w-full bg-bloom-black-100 peer-focus:font-medium absolute text-md text-bloom-softGray-100 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-bloom-orange-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Mensaje
            </label>
          </div>
          <div className='text-center'>
            <Button type='submit' variant='secondary' className='!py-3 sm:!py-[5px] sm:px-[41.5px] hover:border-bloom-orange-100 hover:bg-bloom-orange-100 hover:text-bloom-softGray-100'>
              ENVIAR
            </Button>
          </div>
        </form>
        {message && (
          <div className='absolute flex flex-col justify-center items-center gap-5 top-0 left-0 -bottom-[1px] right-0 bg-bloom-black-100 px-5 sm:px-10 md:px-14'>
            <StarIcon />
            <h1
              className='text-bloom-softGray-100 text-center text-xl'
              dangerouslySetInnerHTML={{
                __html: `
                  ${message}
                `
              }}
            />
          </div>
        )}
      </div>
      <div data-scroll data-scroll-speed='1' className='w-full mt-28 max-h-48 sm:min-h-full sm:mt-0'>
        <Image
          width={1000}
          height={720}
          className='object-cover -mt-[3%] min-h-[130%] sm:min-h-[115%] w-full h-full object-bottom sm:object-center'
          alt={formPost?.image?.title}
          src={formPost?.image?.url}
        />
      </div>
    </div>
  )
}

export default ContactForm
