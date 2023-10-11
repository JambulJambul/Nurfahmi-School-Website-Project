//loginpage.tsx

import React from 'react';
import Footer from '@/app/components/footer/page'
import Image from 'next/image';
import Link from 'next/link';

export default function loginpage() {
    return (
        <>
            <div className='text-center pt-40 bg-white'>
                <div className='relative h-36 mx-auto'>
                    <Image className="mx-auto"
                        src="/nurfahmi-logo.png"
                        alt="hero"
                        fill
                        style={{ objectFit: "contain" }}
                    ></Image>
                </div>
                <div className='my-10'>
                    <div className='my-2'>
                        <input className='bg-[#fbff10] outline-none w-96 px-8 py-6 rounded-xl text-xl border-amber-300 border-2 text-amber-600 placeholder-amber-600' type="text" name="" id="" placeholder='Username' />
                    </div>
                    <div className='my-2'>
                        <input className='bg-[#fbff10] outline-none w-96 px-8 py-6 rounded-xl text-xl border-amber-300 border-2 text-amber-600 placeholder-amber-600' type="password" name="" id="" placeholder='Password' />
                    </div>
                    <button type="submit" className='my-4 text-center py-2 px-10 rounded-xl text-xl mx-auto text-white bg-blue-500'>Login</button>
                    <div>
                        <Link className='underline' href={'https://google.com'}>Forgot Password</Link>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 w-full'>
                <Footer></Footer >
            </div></>

    )
}