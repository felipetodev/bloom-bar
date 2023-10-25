import { Fragment, useEffect, useState } from 'react'
import DishPreviewExample from '../ui/DishPreviewExample'
import { Dialog, Transition } from '@headlessui/react'

export default function DialogPromo () {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const openDialog = setTimeout(() => {
      setIsOpen(true)
    }, 3000)
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
          <div className='fixed inset-0 bg-black bg-opacity-50' />
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
              <Dialog.Panel className='border-2 border-bloom-softGray-100 w-full drop-shadow-md rounded-md max-w-[300px] md:max-w-[400px] transform overflow-hidden p-[10px] bg-bloom-darkGreen-100 text-left align-middle shadow-xl transition-all font-gopher'>
                <div className='flex flex-col gap-4 md:gap-10 p-[10px] md:px-[15px]'>

                  <div className='w-full flex justify-end text-bloom-gray-100'>
                    <button
                      className='flex items-center hover:opacity-70 border border-transparent focus:outline-none'
                      type='button'
                      onClick={closeModal}
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                      >
                        <path fill='currentColor' d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
                      </svg>
                    </button>
                  </div>
                  <div className='flex flex-col'>
                    <Dialog.Title
                      as='h3'
                      className='uppercase font-bold text-bloom-gray-100 leading-tight tracking-[0.15em] md:text-[22px] text-center mb-2'
                    >
                      ¡Ahora puedes ver tu plato en la carta!
                    </Dialog.Title>
                    <h2 className='uppercase text-center text-bloom-orange-50 text-sm md:text-[14px]'>
                      haz click en el ícono al costado de cada plato para ver LA IMAGEN.
                    </h2>
                  </div>
                  <div className='w-full flex flex-col'>
                    <div className='relative border-2 rounded-md border-[#3C513E] bg-black overflow-hidden mb-[20px]'>
                      <DishPreviewExample />
                    </div>
                    <button className='bg-bloom-softGray-100 w-full md:w-fit m-auto px-14 py-2 rounded-md hover:bg-white/70 transition-colors' onClick={closeModal}>
                      BACÁN 🤤
                    </button>
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
