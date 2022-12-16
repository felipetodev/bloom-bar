import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import BlazeIcon from '../ui/BlazeIcon'
import useDeviceDetect from '../hooks/useDevice'

export default function DialogPromo () {
  const isMobile = useDeviceDetect()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const openDialog = setTimeout(() => {
      setIsOpen(true)
    }, 6000)
    return () => clearTimeout(openDialog)
  }, [])

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-[999]' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-[300px] md:max-w-[570px] transform overflow-hidden p-[10px] bg-bloom-dark-100 text-left align-middle shadow-xl transition-all font-gopher bg-modal bg-cover'>
                <div className='border border-solid border-[#DAA948]'>
                  <div className='flex flex-col gap-4 md:gap-[25px] p-[10px] md:px-[15px]'>

                    <div className='w-full flex justify-end text-bloom-gray-100'>
                      <button
                        className='flex items-center hover:opacity-70 border border-transparent focus:outline-none'
                        type='button'
                        onClick={closeModal}
                      >
                        <span className='text-[10px] md:text-[16px] mr-1'>
                          CERRAR
                        </span>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                        >
                          <path fill='currentColor' d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
                        </svg>
                      </button>
                    </div>
                    <div className='flex justify-center h-[70px]'>
                      <Image
                        width={31.53}
                        height={45.77}
                        src='/b-logo-gold.svg'
                        alt='bloom bar logo'
                      />
                    </div>
                    <Dialog.Title
                      as='h3'
                      className='uppercase font-bold text-[#DAA948] tracking-[0.15em] md:text-[25px] text-center'
                    >
                      ¡Vive este año nuevo
                      en el mejor lugar
                      de la V costa!
                    </Dialog.Title>
                    <div>
                      <ul className='flex flex-col items-center text-center text-[12px] md:text-[16px] text-bloom-gray-100'>
                        <li>CENA DE 5 TIEMPOS</li>
                        <li className='text-[#DAA948] md:my-[6px]'>
                          <BlazeIcon />
                        </li>
                        <li>OPCIÓN DE MENÚ PARA NIÑOS</li>
                        <li className='text-[#DAA948] md:my-[6px]'>
                          <BlazeIcon />
                        </li>
                        <li>BARRA ABIERTA DESDE LAS 12:30</li>
                        <li className='text-[#DAA948] md:my-[6px]'>
                          <BlazeIcon />
                        </li>
                        <li>VISTA EXCLUSIVA A FUEGOS ARTIFICIALES</li>
                        <li className='text-[#DAA948] md:my-[6px]'>
                          <BlazeIcon />
                        </li>
                        <li>VALOR: $100.000 POR PERSONA</li>
                      </ul>
                    </div>

                    <div className='text-center'>
                      <h3 className='text-[#DAA948] text-[12px] md:text-[25px] font-bold tracking-widest uppercase'>
                        dj Richy - Hits Bailables
                      </h3>
                    </div>

                    <div className='flex justify-center'>
                      <a
                        href='https://walink.co/cbc08a'
                        rel='noopener noreferrer'
                        target={isMobile ? '_self' : '_blank'}
                        className='animate-border inline-block bg-[#DAA948] from-[#cd9b37] via-[#9f7b34] to-[#DAA948] bg-[length:400%_400%] text-[13px] md:text-[16px] text-bloom-gray-100 font-bold hover:bg-gradient-to-r px-[35px] py-[5px] rounded-md tracking-wide'
                      >
                        RESERVA AHORA
                      </a>
                    </div>

                    <div className='text-center mb-[20px]'>
                      <span className='text-bloom-gray-100 text-[10px] md:text-[16px] tracking-widest'>
                        SOLO 100 CUPOS
                      </span>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
