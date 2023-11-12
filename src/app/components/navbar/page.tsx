"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function ContactUs({
    isDisplayed = false,
    onClose,
}: {
    isDisplayed: boolean;
    onClose: () => void;
}) {
    return (
        <>
            <Transition show={isDisplayed} as={Fragment}>
                <Dialog as="div" className="relative z-30" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
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
                                <Dialog.Panel className="w-full max-w-sm md:max-w-md xl:max-w-xl transform overflow-hidden rounded-2xl bg-yellow-400 border-2 border-amber-500 p-6 shadow-xl transition-all">
                                    <div className="text-right">
                                        <button
                                            type="button"
                                            className="text-white font-extrabold fixed top-4 right-4 drop-shadow"
                                            onClick={onClose}
                                        >
                                            <XMarkIcon className="block h-6 w-6 " />
                                        </button>
                                    </div>
                                    <Dialog.Title as="h3" className="text-2xl md:text-3xl lg:text-4xl text-center font-medium text-white drop-shadow">
                                        Contact Us
                                    </Dialog.Title>
                                    <div className="mt-8">
                                        <div className="mx-16 my-4">
                                            <Link href={"https://wa.link/w2n28j"}>
                                                <div className="flex items-center justify-center">
                                                    <div>
                                                        <Image src={"/logo/icons8-whatsapp.svg"} height={48} width={48} alt='google-maps-new' className="drop-shadow"></Image>
                                                    </div>
                                                    <p className="text-base md:text-lg xl:text-xl text-white ml-2 drop-shadow">
                                                        Ms Hawa
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="mx-16 my-4">
                                            <Link href={"https://wa.link/b8ig6f"}>
                                                <div className="flex items-center text-center justify-center">
                                                    <div>
                                                        <Image src={"/logo/icons8-whatsapp.svg"} height={48} width={48} alt='google-maps-new' className="drop-shadow"></Image>
                                                    </div>
                                                    <p className="text-base md:text-lg xl:text-xl text-white ml-2 drop-shadow">
                                                        Bu Yekti
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}


const poppins = Poppins({
    weight: '600',
    subsets: ['latin'],
});

export default function Navbar() {
    const [isShowing, setIsShowing] = useState(false);
    return (
        <>
            <Disclosure>
                {({ open }) => (
                    <>
                        {open && (
                            <div className='w-screen min-h-screen z-10 bg-black/30 fixed lg:hidden'></div>
                        )}
                        <div className='md:sticky top-0 bg-white z-20'>
                            <div className={poppins.className}>
                                <div className='h-16 md:h-24 bg-white max-w-screen-xl xl:mx-auto relative px-6 z-20'>
                                    <div className='flex justify-between'>
                                        <div className='relative h-16 md:h-24 w-24 md:w-40'>
                                            <Link href={"/"}>
                                                <Image
                                                    src="/nurfahmi-logo-transparent.png"
                                                    alt="Logo"
                                                    fill
                                                    style={{ objectFit: "contain" }}
                                                />
                                            </Link>
                                        </div>
                                        <div className='hidden lg:flex my-auto space-x-8 items-center'>
                                            <Link className='text-zinc-600' href={"/about-us-page"}>
                                                About Us
                                            </Link>
                                            <Link className='text-zinc-600' href={"/programs-page"}>
                                                Programs
                                            </Link>
                                            <button className='text-zinc-600' onClick={() => setIsShowing(!isShowing)}>Contact Us</button>
                                            <Link className='py-2 px-4 rounded-xl text-white bg-amber-500' href={"/under-construction-page"}>
                                                Student Login
                                            </Link>
                                        </div>
                                        <div className='lg:hidden items-center my-auto'>
                                            <Disclosure.Button>
                                                {open ? (
                                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-blue-300 lg:hidden rounded-b-3xl absolute w-full z-20 text-center'>
                                    <Disclosure.Panel className="text-gray-500 mx-8 py-4">
                                        <a href='/about-us-page'>
                                            <div className='py-1 px-4 my-2 text-slate-600'>
                                                About Us
                                            </div>
                                        </a>
                                        <a href='/programs-page'>
                                            <div className='py-1 px-4 my-2 text-slate-600'>
                                                Programs
                                            </div>
                                        </a>
                                        <div className='py-1 my-2'>
                                            <button className='text-zinc-600' onClick={() => setIsShowing(!isShowing)}>Contact Us</button>
                                                
                                        </div>
                                        <div className='my-4'>
                                            <Link className='py-2 px-4 rounded-xl text-white bg-amber-500' href={"/under-construction-page"}>
                                                Student Login
                                            </Link>
                                        </div>
                                    </Disclosure.Panel>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
            <ContactUs isDisplayed={isShowing} onClose={() => setIsShowing(false)} />
        </>
    );
}
