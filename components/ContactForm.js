import Image from 'next/image'
import cocktail from '../public/cocktail.jpeg'
import Button from '../ui/Button'
import FlameIcon from '../ui/FlameIcon'

const ContactForm = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 bg-bloom-darkGreen-100'>
      <div className='px-5 pt-[200px] flex flex-col justify-center sm:pt-0 sm:px-10 md:px-14 sm:my-64 lg:my-[300px]'>
        <div className='flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:items-baseline'>
          <span className='text-bloom-orange-100'>
            <FlameIcon />
          </span>
          <h1 className='text-2xl text-bloom-softGray-100 text-center'>PONTE EN CONTACTO CON NOSOTROS</h1>
        </div>
        <form className='flex flex-col gap-5 pt-10 md:pt-16'>
          <div class='relative z-0 mb-6 w-full group'>
            <input type='text' name='floating_name' id='floating_name' class='block py-2.5 px-0 w-full text-md text-bloom-softGray-100 bg-transparent border-0 border-b-2 border-bloom-softGray-100 appearance-none focus:outline-none focus:ring-0 focus:border-bloom-orange-100 peer' placeholder=' ' required />
            <label for='floating_name' class='peer-focus:font-medium absolute text-md text-bloom-softGray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bloom-orange-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Nombre
            </label>
          </div>
          <div class='relative z-0 mb-6 w-full group'>
            <input type='email' name='floating_email' id='floating_email' class='block py-2.5 px-0 w-full text-md text-bloom-softGray-100 bg-transparent border-0 border-b-2 border-bloom-softGray-100 appearance-none focus:outline-none focus:ring-0 focus:border-bloom-orange-100 peer' placeholder=' ' required />
            <label for='floating_email' class='peer-focus:font-medium absolute text-md text-bloom-softGray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bloom-orange-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Email
            </label>
          </div>
          <div class='relative z-0 mb-6 w-full group'>
            <textarea type='email' name='floating_email' id='floating_email' class='block py-2.5 px-0 w-full text-md text-bloom-softGray-100 bg-transparent border-0 border-b-2 border-bloom-softGray-100 appearance-none focus:outline-none focus:ring-0 focus:border-bloom-orange-100 peer' placeholder=' ' required />
            <label for='floating_email' class='peer-focus:font-medium absolute text-md text-bloom-softGray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bloom-orange-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
              Mensaje
            </label>
          </div>
          <div className='text-center'>
            <Button type='submit' variant='secondary'>
              ENVIAR
            </Button>
          </div>
        </form>
      </div>
      <div className='overflow-hidden w-full mt-28 max-h-44 sm:max-h-full sm:mt-0'>
        <Image
          className='object-cover w-full h-full object-bottom sm:object-center'
          alt='bloombar-wave-bg' src={cocktail}
          placeholder='blur'
        />
      </div>
    </div>
  )
}

export default ContactForm
