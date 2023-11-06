import Navbar from '@/app/components/navbar/page'
import Image from 'next/image'

export default function underConstruction() {
    return (
        <>
            <header>
                <title>About Us - Nurfahmi Daycare</title>
            </header>
            <Navbar></Navbar>
            <main>
                <div className='max-w-screen-xl mx-auto text-center'>
                    <div className='pt-24 md:pt-36 lg:pt-48'>
                        <div className='bg-yellow-400 xl:rounded-xl py-8'>
                            
                            <div className='relative mx-auto w-[100px] h-[100px] md:w-[150px] md:h-[150px]'>
                                <img src="/crane-svgrepo-com.svg" alt="website under construction" className='fill-white'/>
                            </div>
                            <div className='pt-6 text-xl'>
                                <h2>Page Is Under Construction</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}