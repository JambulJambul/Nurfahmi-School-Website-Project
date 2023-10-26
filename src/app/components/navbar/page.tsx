'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const poppins = Poppins({
    weight: '600',
    subsets: ['latin'],
})

export default function navbar() {
    return (
        <>
            <div className='md:sticky top-0 bg-white z-10'>
                <div className={poppins.className}>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <div className='h-16 md:h-24 bg-white max-w-screen-xl xl:mx-auto relative mx-6'>
                                    <div className='flex justify-between'>
                                        <div className='relative h-16 md:h-24 w-24 md:w-40'>
                                            <Link href={"https://google.com"}>
                                                <Image
                                                    src="/nurfahmi-logo.png"
                                                    alt="Logo"
                                                    fill
                                                    style={{ objectFit: "contain" }}
                                                />
                                            </Link>
                                        </div>
                                        <div className='hidden lg:flex my-auto space-x-8 items-center'>
                                            <Link className='text-zinc-600' href={"https://google.com"}>About Us</Link>
                                            <Link className='text-zinc-600' href={"https://google.com"}>Programs</Link>
                                            <Link className='text-zinc-600' href={"https://google.com"}>Contact Us</Link>
                                            <Link className='py-2 px-4 rounded-xl text-white bg-amber-500' href={"/login-page"}>Student Login</Link>
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
                                <div className='bg-blue-300 lg:hidden rounded-b-3xl absolute w-full z-10 text-center'>
                                    <Disclosure.Panel className="text-gray-500 mx-8 py-4">
                                        <a href='https://google.com'>
                                            <div className='py-1 px-4 my-2 text-slate-600'>
                                                About Us
                                            </div>
                                        </a>
                                        <a href='https://google.com'>
                                            <div className='py-1 px-4 my-2 text-slate-600'>
                                                Programs
                                            </div>
                                        </a>
                                        <a href='https://google.com'>
                                            <div className='py-1 px-4 my-2 text-slate-600'>
                                                Contact Us
                                            </div>
                                        </a>
                                        <div className='my-4'>
                                            <Link className='py-2 px-4 rounded-xl text-white bg-amber-500' href={"/login-page"}>Student Login</Link>
                                        </div>
                                    </Disclosure.Panel>
                                </div>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </>
    );
}