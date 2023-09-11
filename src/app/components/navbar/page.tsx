import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: '600',
    subsets: ['latin'],
})

export default function navbar() {
    return (
        <><div className='sticky top-0 bg-white z-10'>
            <div className={poppins.className}>
                <div className='h-24 bg-white max-w-screen-xl mx-auto relative'>
                    <div className='flex justify-between'>
                        <div className='relative h-24 w-40'>
                            <Link href={"https://google.com"}>
                                <Image
                                    src="/nurfahmi-logo.png"
                                    alt="Logo"
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </Link>

                        </div>
                        <div className='my-auto flex space-x-8 items-center'>
                            <Link className='text-zinc-600' href={"https://google.com"}>About Us</Link>
                            <Link className='text-zinc-600' href={"https://google.com"}>Programs</Link>
                            <Link className='text-zinc-600' href={"https://google.com"}>Contact Us</Link>
                            <Link className='py-2 px-4 rounded-xl text-white bg-amber-500' href={"https://google.com"}>Student Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}