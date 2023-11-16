'use client'
import React, { useState } from 'react';
import Footer from '@/app/components/footer/page';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginFailure, setLoginFailure] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login', formData);

            if (response.data.authenticated) {
                console.log('Authentication successful');
                setLoginSuccess(true);
                setLoginFailure(false);
                router.push('/');
            } else {
                console.log('Authentication failed');
                setLoginSuccess(false);
                setLoginFailure(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setLoginSuccess(false);
            setLoginFailure(true);
        }
    };

    return (
        <>
            <header>
                <title>Login Page - Nurfahmi Daycare</title>
            </header>
            <div className='text-center pt-20 md:pt-40 bg-white'>
                <div className='relative h-24 md:h-36 mx-auto'>
                    <Image
                        className="mx-auto"
                        src="/nurfahmi-logo.png"
                        alt="hero"
                        fill
                        style={{ objectFit: "contain" }}
                    ></Image>
                </div>
                <div className='my-10'>
                    <form onSubmit={handleFormSubmit}>
                        <div className='my-2'>
                            <input
                                type="text"
                                className='bg-[#fbff10] outline-none w-48 md:w-96 px-4 md:px-8 py-3 md:py-6 rounded-xl text-sm md:text-xl border-amber-300 border-2 text-amber-600 placeholder-amber-600'
                                placeholder='Username'
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            /> </div>
                        <div className='my-2'>
                            <input
                                type="password"
                                className='bg-[#fbff10] outline-none w-48 md:w-96 px-4 md:px-8 py-3 md:py-6 rounded-xl text-sm md:text-xl border-amber-300 border-2 text-amber-600 placeholder-amber-600'
                                placeholder='Password'
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            /></div>
                        <button type="submit" className='my-4 text-center py-2 px-10 rounded-xl text-base md:text-xl mx-auto text-white bg-blue-500'>Login</button>
                        <div>
                            <Link className='underline text-sm' href={'#'}>Forgot Password</Link>
                        </div>
                    </form>
                </div>
                {loginSuccess && <div className="text-green-500">Login successful!</div>}
                {loginFailure && <div className="text-red-500">Login failed. Please try again.</div>}
            </div>
            <div className='absolute bottom-0 w-full'>
                <Footer></Footer>
            </div>
        </>
    );
}
