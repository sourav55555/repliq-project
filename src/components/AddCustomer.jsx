
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronLeft, CircleUserRound, Plus, PlusCircle } from 'lucide-react';
const AddCustomer = () => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }
    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className='flex items-center justify-between bg-primary secondary mt-6 py-4 px-5 rounded-md font-semibold text-lg cursor-pointer'>
                <p className='flex items-center gap-4'>
                    <CircleUserRound />
                    Steve Jobs
                </p>
                <PlusCircle />
            </div>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="md:text-3xl text-xl font-medium leading-6 text-gray-900 flex justify-between items-center mb-12"
                                    >
                                        <ChevronLeft className='cursor-pointer' onClick={() => setIsOpen(false)} />
                                        Add New Customer
                                        <span></span>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form action="" className='w-full space-y-6'>
                                            <input
                                                className='w-full  block border-b-2 outline-none py-1'
                                                type="text"
                                                name="name"
                                                placeholder='Name'
                                            />
                                            <input
                                                className='w-full  block border-b-2 outline-none py-1'
                                                type="email"
                                                name="email"
                                                placeholder='Email'
                                            />
                                            <input
                                                className='w-full  block border-b-2 outline-none py-1'
                                                type="text"
                                                name="phone"
                                                placeholder='Phone'
                                            />
                                            <input
                                                className='w-full  block border-b-2 outline-none py-1'
                                                type="text"
                                                name="currenc
                                            y" placeholder='Currency'
                                            />
                                            <input
                                                className='w-full block border-b-2 outline-none py-1'
                                                type="text"
                                                name=""
                                                placeholder='TAX ID'
                                            />
                                            <button className='flex items-center gap-2 text-blue-600'>
                                                <Plus className='w-4 h-4 font-semibold' />
                                                Add More Details
                                            </button>
                                            <button className='bg-blue-500 w-full text-xl text-white py-3'>Update</button>
                                        </form>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default AddCustomer;