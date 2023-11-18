'use client'

import Navbar from '@/app/components/navbar/page'
import { Baloo_2 } from 'next/font/google'
import Footer from '@/app/components/footer/page'

const baloo = Baloo_2({
    subsets: ['latin'],
})

function ProgramCards({ link, title, category, colorIs }: { link: string, title: string, category: string, colorIs: boolean }) {
    return (
        <>
            <div className={`${colorIs ? 'bg-amber-400' : 'bg-orange-500'}`}>
                <div>
                    <img src={link} alt="" className="h-56 w-full object-cover" />
                </div>
                <div className={`${colorIs ? 'bg-amber-400' : 'bg-orange-500'}  text-white pt-4 lg:pt-7 px-4 pb-6 lg:pb-12`}>
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
            <header>
                <title>Programs - Nurfahmi Daycare</title>
            </header>
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
                        <ProgramCards link={'/programs/diarypagi.jpg'} title={'Diary Pagi'} category={'DAILY PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/circletime.jpg'} title={'Circle Time'} category={'DAILY PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/bermain.jpg'} title={'Bermain'} category={'DAILY PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/snackbuah.jpg'} title={'Snack Buah'} category={'DAILY PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/tidursiang.jpg'} title={'Tidur Siang'} category={'DAILY PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/shalatberjamaah.jpg'} title={'Shalat Berjamaah'} category={'DAILY PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/makansiang.jpg'} title={'Makan Siang'} category={'DAILY PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/hafalansurat.jpg'} title={'Hafalan Surat'} category={'DAILY PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/makansore.jpg'} title={'Makan Sore'} category={'DAILY PROGRAM'} colorIs={true}></ProgramCards>
                    </div>
                </div>
                <div className='max-w-screen-xl mx-2 xl:mx-auto my-16'>
                    <div className='text-amber-400  text-2xl md:text-3xl xl:text-4xl font-semibold'>
                        <hr className='w-16 border-2 md:border-4 border-orange-500' />
                        <h3 className='mt-1 md:mt-3'>EXCELLENCE PROGRAMS</h3>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-3 xl:gap-x-5 gap-y-10 mt-5 xl:mt-10'>
                        <ProgramCards link={'/programs/funcooking.jpg'} title={'Fun Cooking'} category={'EXCELLENCE PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/berkebun.jpg'} title={'Berkebun'} category={'EXCELLENCE PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/marketday.jpg'} title={'Market Day'} category={'EXCELLENCE PROGRAM'} colorIs={true}></ProgramCards>
                        <ProgramCards link={'/programs/sentrabahanalam.jpg'} title={'Sentra Bahan Alam'} category={'EXCELLENCE PROGRAM'} colorIs={false}></ProgramCards>
                        <ProgramCards link={'/programs/calistung.jpg'} title={'Calistung'} category={'EXCELLENCE PROGRAM'} colorIs={true}></ProgramCards>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}