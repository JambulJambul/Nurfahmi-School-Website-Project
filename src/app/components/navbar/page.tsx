"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ContactUs } from '@/app/(homepage)/contact-us-modal/page';


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
                                                    src="/nurfahmi-logo.png"
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
                                            <Link className='text-zinc-600' href={"/under-construction-page"}>
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
                                        <a href='/under-construction-page'>
                                            <div className='py-1 px-4 my-2 text-slate-600'>
                                                About Us
                                            </div>
                                        </a>
                                        <a href='/under-construction-page'>
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
