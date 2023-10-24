//homepage.tsx

'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Baloo_2 } from 'next/font/google'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MainPageMap from '@/app/components/mainmaps/page'
import Navbar from '@/app/components/navbar/page'
import Footer from '@/app/components/footer/page'

const baloo = Baloo_2({
  subsets: ['latin'],
})

export default function Home() {
  return (<>
    {/* Catatan:
            Special Programs:
            - Islamic Learning (iqro, hafalan surat, hadits dan doa pendek, asmaul husna)
            - Pramuka cilik (pra-siaga)
            - Fun cooking
            - Market Day
            - Gardening
            - Field Trip
            Sentra Balok ilang, Movie day ilang.

            Daily Program:
            - Morning Diary
            - Opening
            - Circle time
            - 2 kali snack, 2 kali makan
            - Mandi Sore
            - Evening Diary

            Foto Owner, guru-guru, sertifikat al-falah.

            Deskripsi Harga & Promo

            Usia 18 bulan - 6 tahun

            Laporan harian, Laporan triwulan

            
        */}
    <header>
      <title>Nurfahmi Daycare</title>
    </header>
    <Navbar></Navbar>
    <main className={baloo.className}>
      <div>
        {/* Hero Section */}
        <div className='bg-gradient-to-t from-cyan-400 to-white bg-[length:10000px_430px] md:bg-[length:10000px_415px] xl:bg-[length:10000px_560px] bg-no-repeat'>
          <div className='mx-auto max-w-screen-xl'>
            <h1 className='mt-8 md:mt-12 text-center text-4xl lg:text-6xl text-amber-400 font-bold'>NURFAHMI DAYCARE</h1>
            <p className='text-zinc-600 text-xl md:text-2xl text-center mt-10 mx-12 md:mx-48 font-bold'>We provide your child with nurturing care and valuable knowledge</p>
            <div>
              <div className='w-full text-center mt-12 md:mt-9'>
                <Link className='text-center py-2 px-4 rounded-xl text-xl text-white bg-blue-500'
                  href={"https://docs.google.com/forms/d/e/1FAIpQLScSJeSatDSZGKoqB4M5ghURY5fz41KbqseWU24GMfyQxqs2aw/formResponse"}>Register Now</Link>
              </div>
              <div className='relative mx-auto w-[300px] h-[150px] md:w-[600px] md:h-[300px] xl:w-[1024px] xl:h-[500px]'>
                <Image
                  src="/kindergarten-hero.png"
                  alt="hero"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Visi Misi */}
        <div className='mx-auto max-w-screen-xl'>
          <h2 className='my-12 text-center text-amber-400 text-3xl md:text-4xl lg:text-5xl font-semibold'>Vision</h2>
          <p className='text-zinc-600 text-center mt-10 text-xl mx-12 lg:mx-0 md:text-2xl font-normal'>“Menjadi rumah kedua yang Islami bagi anak untuk tumbuh dan berkembang ditemani guru-guru yang amanah, tulus dan bersungguh-sungguh”</p>
          <h2 className='text-center text-amber-400 text-3xl md:text-4xl lg:text-5xl font-semibold mt-16'>Mission</h2>
          <div className='md:grid md:grid-cols-2 mt-10 text-center md:gap-6 mx-4 xl:mx-0'>
            <div className='text-zinc-600 text-xl md:text-2xl font-normal border-2 border-amber-400 rounded-xl my-2 md:my-0 py-2 px-4 md:py-4 md:px-6'>
              Mengawal pertumbuhan dan perkembangan anak sesuai penambahan usianya.
            </div>
            <div className='text-zinc-600 text-xl md:text-2xl font-normal border-2 border-amber-400 rounded-xl my-2 md:my-0 py-2 px-4 md:py-4 md:px-6'>
              Mengisi kebutuhan anak akan perhatian dan kasih sayang selama orang tua bekerja.
            </div>
            <div className='text-zinc-600 text-xl md:text-2xl font-normal border-2 border-amber-400 rounded-xl my-2 md:my-0 py-2 px-4 md:py-4 md:px-6'>
              Menyediakan lingkungan sosial yang kondusif dan Islami untuk anak.
            </div>
            <div className='text-zinc-600 text-xl md:text-2xl font-normal border-2 border-amber-400 rounded-xl my-2 md:my-0 py-2 px-4 md:py-4 md:px-6'>
              Menyediakan fasilitas bagi anak untuk menemukan dan mengembangkan bakatnya.
            </div>
          </div>
        </div>
        {/* Special Program */}
        <div className='bg-stone-100'>
          <div className='mx-auto max-w-screen-xl mt-16 lg:mt-36 py-12 lg:py-24'>
            <h2 className='text-center text-amber-400 text-3xl md:text-4xl lg:text-5xl font-semibold'>Special Program</h2>
            <div className='mt-24 text-center'>
              <Carousel
                className='mx-12 sm:mx-32 lg:mx-64 inline-block'
                autoPlay={true}
                interval={10000}
                transitionTime={1000}
                selectedItem={1}
                showStatus={false}
                dynamicHeight={false}
                showIndicators={true}
                showThumbs={false}
                infiniteLoop={true}
                showArrows={false}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                  return (
                    <div
                      onClick={onClickHandler}
                      style={{
                        background: isSelected ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)',
                        width: 8,
                        height: 8,
                        display: 'inline-block',
                        margin: '0 4px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        // Adjust the position here to move the indicators as needed
                        position: 'relative',
                        bottom: '80px', // Adjust this value to move the indicator upwards
                      }}
                      title={`${label} ${index + 1}`}
                    />
                  );
                }}
              >
                <div>
                  <img className='rounded-xl h-full object-cover' src="/program-balok.png" />
                  <h3 className='text-center mt-8 text-xl md:text-2xl font-light text-zinc-600'>Sentra Balok</h3>
                </div>
                <div>
                  <img className='rounded-xl h-fp-6 ull object-cover' src="/program-dokter.png" />
                  <p className='text-center mt-8 text-xl md:text-2xl font-light text-zinc-600'>Doctor Visit</p>
                </div>
                <div>
                  <img className='rounded-xl h-full object-cover' src="/program-movie.png" />
                  <p className='text-center mt-8 text-xl md:text-2xl font-light text-zinc-600'>Movie Day</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className='bg-amber-400'>
          <div className='mx-auto max-w-screen-xl py-12 lg:py-24'>
            <h2 className='text-center text-white text-3xl md:text-4xl lg:text-5xl font-semibold'>Testimonials</h2>
            <div className='lg:flex justify-between mt-12 lg:mt-24'>
              <div className='border-white mx-12 p-6 border-2 my-4 lg:my-0 rounded-2xl'>
                <div className='relative mx-auto w-[65px] h-[65px] lg:w-[131px] lg:h-[131px] bg-white rounded-full overflow-hidden'>
                  <Image className='transform translate-y-1 lg:translate-y-4 lg:-translate-x-1'
                    src="/testimony-person.png"
                    alt="hero"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className='text-white mt-6 mx-10 text-center'>
                  <p className='text-base lg:text-xl font-light'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. ”</p>
                  <h3 className='text-base lg:text-xl font-bold mt-6'>Hanif</h3>
                  <p className='text-base lg:text-xl font-light mt-2'>Orang tua murid 2022</p>
                </div>
              </div>
              <div className='border-white mx-12 p-6 border-2 my-4 lg:my-0 rounded-2xl'>
                <div className='relative mx-auto w-[65px] h-[65px] lg:w-[131px] lg:h-[131px] bg-white rounded-full overflow-hidden'>
                  <Image className='transform translate-y-1 lg:translate-y-4 lg:-translate-x-1'
                    src="/testimony-person.png"
                    alt="hero"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className='text-white mt-6 mx-10 text-center'>
                  <p className='text-base lg:text-xl font-light'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. ”</p>
                  <h3 className='text-base lg:text-xl font-bold mt-6'>Hanif</h3>
                  <p className='text-base lg:text-xl font-light mt-2'>Orang tua murid 2022</p>
                </div>
              </div>
              <div className='border-white mx-12 p-6 border-2 my-4 lg:my-0 rounded-2xl'>
                <div className='relative mx-auto w-[65px] h-[65px] lg:w-[131px] lg:h-[131px] bg-white rounded-full overflow-hidden'>
                  <Image className='transform translate-y-1 lg:translate-y-4 lg:-translate-x-1'
                    src="/testimony-person.png"
                    alt="hero"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className='text-white mt-6 mx-10 text-center'>
                  <p className='text-base lg:text-xl font-light'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. ”</p>
                  <h3 className='text-base lg:text-xl font-bold mt-6'>Hanif</h3>
                  <p className='text-base lg:text-xl font-light mt-2'>Orang tua murid 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Location Information */}
        <div className='mx-auto max-w-screen-xl lg:mt-36 py-12 lg:py-24'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-16 items-center mx-4'>
            <div className='col-span-1 lg:col-span-2'>
              <h2 className='text-center lg:text-left text-amber-400 text-3xl md:text-4xl lg:text-5xl font-semibold'>Location</h2>
              <h3 className='text-center lg:text-left my-12 text-zinc-600 text-xl md:text-2xl font-normal'>Jalan Pramuka No. 36
                Dekat Green Pramuka Tower<br /><br />Office hour: 07.00 - 17.30</h3>
              <Link href={"https://goo.gl/maps/T5TZrdyp7SvVj1fm7"}>
                <div className='hover:bg-gray-100 hover:border-gray-600 flex justify-center items-center py-2 px-4 rounded-md border border-gray-500'>
                  <Image src={"/logo/icons8-google-maps.svg"} height={48} width={48} alt='google-maps-new'></Image>
                  <span className='ml-2'>Open in Google Maps</span>
                </div>
              </Link>
            </div>
            <div className='col-span-1 lg:col-span-3 h-[550px]'>
              <MainPageMap />
            </div>
          </div>
        </div>
        {/* Another CTA */}
        <div className='bg-stone-100'>
          <div className='mx-auto max-w-screen-xl lg:mt-36 py-12 lg:py-24'>
            <div>
              <h2 className=' text-center text-amber-400 text-3xl md:text-4xl lg:text-5xl font-semibold'>Start Your Journey</h2>
              <p className='mt-12 text-zinc-600 text-xl md:text-2xl text-center mx-12 lg:mx-48 font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className='mt-12 text-center'>
              <Link className='text-center py-2 px-4 rounded-xl text-xl mx-auto text-white bg-blue-500'
                href={"https://docs.google.com/forms/d/e/1FAIpQLScSJeSatDSZGKoqB4M5ghURY5fz41KbqseWU24GMfyQxqs2aw/formResponse"}>Register Now</Link>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer></Footer>
      </div>
    </main>
  </>
  )
}
