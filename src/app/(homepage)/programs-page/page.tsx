'use client'

import Navbar from '@/app/components/navbar/page'
import { Baloo_2 } from 'next/font/google'
import Footer from '@/app/components/footer/page'

const baloo = Baloo_2({
    subsets: ['latin'],
})

function ProgramCards({ link, title, category, colorIs }: {link:string, title: string, category: string, colorIs: boolean}) {
    return (
        <>
            <div className={`${colorIs?'bg-amber-400':'bg-orange-500'}`}>
                <div>
                    <img src={link} alt="" className="h-56 w-full object-cover" />
                </div>
                <div className={`${colorIs?'bg-amber-400':'bg-orange-500'}  text-white pt-4 lg:pt-7 px-4 pb-6 lg:pb-12`}>
                    <div className="text-sm lg:text-base font-light">
                        {category}
                    </div>
                    <div className="text-xl lg:text-3xl mt-3">
                        {title}
                    </div>
                </div>
            </div>
        </>
    )
}

/*
PROGRAM

Dengan basic Bermain sambil Belajar (Play & Learn) program harian dimulai dengan 
* Diary Pagi, Brain Gym dan Dzikir Pagi
* Opening / Circle Time, Ikrar, dan Hafalan Do'a, Surat dan Hadits.
* Sholat Duha dan Asmaul Husna.
* Snack time
pengenalan Life Skill melalui Pramuka Cilik, Fun Cooking, Berkebun, Market Day, maupun pengenalan dan peningkatan Calistung.
* Wudhu dan Sholat Dzuhur bersama
* Makan Siang Bersama
* Istirahat siang (sikat gigi, cuci kaki, ganti baju tidur), baca Do'a, dan tidur siang.
* Snack Buah
* Mandi Sore
* Sholat Ashar, Dzikir Petang, 
* Makan Sore
* Diary Sore
 */

export default function programsPage() {
    return (
        <>
            <Navbar></Navbar>
            <main className={baloo.className}>
                <div className="mx-auto max-w-screen-xl">
                    <h1 className='mt-8 md:mt-12 text-center text-4xl xl:text-6xl text-amber-400 font-bold'>
                        Programs
                    </h1>
                </div>
                <div className='max-w-screen-xl mx-2 xl:mx-auto my-16'>
                    <div className='text-amber-400 text-2xl md:text-3xl xl:text-4xl font-semibold'>
                        <hr className='w-10 md:w-16 border-2 md:border-4 border-orange-500' />
                        <h3 className='mt-1 md:mt-3'>DAILY PROGRAMS</h3>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-3 xl:gap-x-5 gap-y-10 mt-5 xl:mt-10'>
                        <ProgramCards link={'/programs/diarypagi.png'} title={'Diary Pagi'} category={'DAILY PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/circletime.png'} title={'Circle Time'} category={'DAILY PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/bermain.png'} title={'Bermain'} category={'DAILY PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/snackbuah.png'} title={'Snack Buah'} category={'DAILY PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/tidursiang.png'} title={'Tidur Siang'} category={'DAILY PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/shalatberjamaah.png'} title={'Shalat Berjamaah'} category={'DAILY PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/makansiang.png'} title={'Makan Siang'} category={'DAILY PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/hafalansurat.png'} title={'Hafalan Surat'} category={'DAILY PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/makansore.png'} title={'Makan Sore'} category={'DAILY PROGRAM'} colorIs={true}></ProgramCards>
                    </div>
                </div>
                <div className='max-w-screen-xl mx-2 xl:mx-auto my-16'>
                    <div className='text-amber-400  text-2xl md:text-3xl xl:text-4xl font-semibold'>
                        <hr className='w-16 border-2 md:border-4 border-orange-500' />
                        <h3 className='mt-1 md:mt-3'>EXCELLENCE PROGRAMS</h3>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-3 xl:gap-x-5 gap-y-10 mt-5 xl:mt-10'>
                        <ProgramCards link={'/programs/funcooking.png'} title={'Fun Cooking'} category={'EXCELLENCE PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/berkebun.png'} title={'Berkebun'} category={'EXCELLENCE PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/marketday.png'} title={'Market Day'} category={'EXCELLENCE PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/sentrabahanalam.png'} title={'Sentra Bahan Alam'} category={'EXCELLENCE PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/calistung.png'} title={'Calistung'} category={'EXCELLENCE PROGRAM'} colorIs={true}></ProgramCards>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}