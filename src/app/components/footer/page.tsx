import React from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export default function footer() {
    return (
        <div className={poppins.className}>
            <div className='py-6 lg:py-8 bg-amber-400'>
                <div className='flex justify-center gap-x-16'>
                    <Link href={"https://facebook.com/Nurfahmi-Daycare-100067115610362/"}><Image src={"/logo/icons8-facebook.svg"} height={48} width={48} alt='google-maps-new'></Image></Link>
                    <Link href={"https://wa.link/b8ig6f"}><Image src={"/logo/icons8-whatsapp.svg"} height={48} width={48} alt='google-maps-new'></Image></Link>
                    <Link href={"https://www.instagram.com/nurfahmi_daycare/"}><Image src={"/logo/icons8-instagram.svg"} height={48} width={48} alt='google-maps-new'></Image></Link>
                </div>
                <div className='mt-4 md:mt-8'>
                    <p className='text-white text-center text-sm md:text-base'>Nurfahmi Daycare 2023 | Developed by Hilman Nurfahmi</p>
                </div>
            </div>
        </div>
    )
}