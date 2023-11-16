import Navbar from '@/app/components/navbar/page'
import { Baloo_2 } from 'next/font/google'
import Image from 'next/image'
import Footer from '@/app/components/footer/page'

const baloo = Baloo_2({
    subsets: ['latin'],
})

export default function aboutUs() {
    return (
        <>
            <header>
                <title>About Us - Nurfahmi Daycare</title>
            </header>
            <Navbar></Navbar>
            <main className={baloo.className}>
                <div className="mx-auto max-w-screen-xl">
                    <h1 className='mt-8 md:mt-12 text-center text-4xl lg:text-6xl text-amber-400 font-bold'>
                        About Us
                    </h1>
                </div>
                <div className='bg-stone-100'>
                    <div className='max-w-screen-xl text-center mx-auto mt-8 py-8 md:mt-16 md:py-16'>
                        <p className='text-amber-500 text-sm sm:text-base md:text-xl leading-loose mx-8 xl:mx-0'>
                            Nurfahmi Daycare berawal sebagai Sekolah Nurfahmi berdiri sejak tahun 2011, merupakan sekolah yang bertransformasi menjadi penitipan anak (Daycare), yang bertujuan untuk memenuhi kebutuhan pengasuhan dan pendidikan anak usia 2 - 6 tahun. Anak difasilitasi dengan berbagai Alat Peraga Edukasi sesuai tahap usianya dan didampingi oleh guru-guru yang kompeten.
                        </p>
                        <div className='flex my-8'>
                            <div className='relative mx-auto w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] bg-white rounded-full overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-amber-500'>
                                <Image
                                    className='overflow-visible'
                                    src="/about-us/nurfahmi-daycare-outing1.jpeg"
                                    alt="nurfahmi daycare outing 1"
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <div className='relative mx-auto w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] bg-white rounded-full overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-amber-500'>
                                <Image
                                    className='overflow-visible'
                                    src="/about-us/nurfahmi-daycare-outing2.jpeg"
                                    alt="nurfahmi daycare outing 2"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className='relative mx-auto w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] bg-white rounded-full overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-amber-500'>
                                <Image
                                    className='overflow-visible'
                                    src="/about-us/nurfahmi-daycare-outing3.jpeg"
                                    alt="nurfahmi daycare outing 3"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                        <p className='text-amber-500 text-sm sm:text-base md:text-xl leading-loose mx-8 xl:mx-0'>
                            Diharapkan anak akan siap secara mental, emosi, dan intelegen untuk memasuki Sekolah Dasar. Sehari-hari Nurfahmi Daycare menyediakan anak-anak snack, makan siang, dan makan sore yang sehat. Guru-guru memberi Laporan Harian dan Laporan Perkembangan Anak setiap 3 bulan. Mulai tahun 2023 ini, Nurfahmi Daycare insya Allah akan didukung teknologi informasi (IT) dalam komunikasinya dengan orang tua.
                        </p>
                    </div>
                </div>
                <div className="bg-[url('/orange-bubbles-background.png')] bg-repeat bg-cover pb-16">
                    <div className='max-w-screen-xl text-center mx-auto py-8 md:py-16'>
                        <h1 className='mt-8 md:mt-12 text-center text-4xl lg:text-6xl text-white font-bold'>
                            Our Journey
                        </h1>
                    </div>
                    <div className='grid grid-cols-2 mx-auto'>
                        {/* Kolom Kiri */}
                        <div className='text-center border-r-2 border-white w-full pb-24 md:pb-36'>
                            <div className='md:flex md:justify-center md:items-center'>
                                <div className='mx-auto md:mx-4 lg:mx-8 relative my-3 md:my-0 w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-white'>
                                    <Image
                                        className='overflow-visible'
                                        src="/about-us/nurfahmi-daycare-banner.jpg"
                                        alt="nurfahmi daycare old banner"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className='text-white md:text-left'>
                                    <h3 className='text-base md:text-xl lg:text-3xl font-bold'>Juni 2011</h3>
                                    <h4 className='text-base md:text-xl lg:text-3xl'>Grand Opening</h4>
                                </div>
                            </div>
                            <div className='md:flex md:justify-center md:items-center mt-36 md:mt-72'>
                                <div className='mx-auto md:mx-4 lg:mx-8 relative my-3 md:my-0 w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-white'>
                                    <Image
                                        className='overflow-visible'
                                        src="/about-us/field-trip-nurfahmi-daycare1.jpg"
                                        alt="nurfahmi daycare field trip taman lalu lintas"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className='text-white md:text-left'>
                                    <h3 className='text-base md:text-xl lg:text-3xl font-bold'>Januari 2014</h3>
                                    <h4 className='text-base md:text-xl lg:text-3xl'>Field Trip Taman Lalu Lintas</h4>
                                </div>
                            </div>
                            <div className='md:flex md:justify-center md:items-center mt-36 md:mt-72'>
                                <div className='mx-auto md:mx-4 lg:mx-8 relative my-3 md:my-0 w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-white'>
                                    <Image
                                        className='overflow-visible'
                                        src="/about-us/akhirusannah-nurfahmi-daycare2.jpg"
                                        alt="nurfahmi daycare akhirusannah 2018"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className='text-white md:text-left'>
                                    <h3 className='text-base md:text-xl lg:text-3xl font-bold'>Mei 2018</h3>
                                    <h4 className='text-base md:text-xl lg:text-3xl'>Akhirusannah 2017/2018</h4>
                                </div>
                            </div>
                            <div className='md:flex md:justify-center md:items-center mt-36 md:mt-72'>
                                <div className='mx-auto md:mx-4 lg:mx-8 relative my-3 md:my-0 w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-white'>
                                    <Image
                                        className='overflow-visible'
                                        src="/about-us/nurfahmi-daycare-teacher2023.jpg"
                                        alt="nurfahmi daycare teacher 2023"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className='text-white md:text-left'>
                                    <h3 className='text-base md:text-xl lg:text-3xl font-bold'>Agustus 2023</h3>
                                    <h4 className='text-base md:text-xl lg:text-3xl'>Reopening Nurfahmi Daycare</h4>
                                </div>
                            </div>
                        </div>
                        {/* Kolom Kanan */}
                        <div className='text-center border-l-2 border-white w-full pb-24 md:pb-36'>
                            <div className='md:flex md:justify-center md:items-center mt-36 md:mt-48'>
                                <div className='text-white hidden md:block md:text-right'>
                                    <h3 className='text-base md:text-xl lg:text-3xl font-bold'>Oktober 2013</h3>
                                    <h4 className='text-base md:text-xl lg:text-3xl'>Manasik Haji</h4>
                                </div>
                                <div className='mx-auto md:mx-4 lg:mx-8 relative my-3 md:my-0 w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-white'>
                                    <Image
                                        className='overflow-visible'
                                        src="/about-us/manasik-haji-nurfahmi-daycare.jpg"
                                        alt="manasik haji nurfahmi daycare"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className='text-white md:hidden md:text-right'>
                                    <h3 className='text-base md:text-xl lg:text-3xl font-bold'>Oktober 2013</h3>
                                    <h4 className='text-base md:text-xl lg:text-3xl'>Manasik Haji</h4>
                                </div>
                            </div>
                            <div className='md:flex md:justify-center md:items-center mt-36 md:mt-72'>
                                <div className='text-white hidden md:block md:text-right'>
                                    <h3 className='text-base md:text-xl lg:text-3xl font-bold'>Mei 2017</h3>
                                    <h4 className='text-base md:text-xl lg:text-3xl'>Akhirusannah 2016/2017</h4>
                                </div>
                                <div className='mx-auto md:mx-4 lg:mx-8 relative my-3 md:my-0 w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-white'>
                                    <Image
                                        className='overflow-visible'
                                        src="/about-us/akhirusannah-nurfahmi-daycare1.jpg"
                                        alt="nurfahmi daycare akhirusannah 2017"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className='text-white md:hidden md:text-right'>
                                    <h3 className='text-base md:text-xl lg:text-3xl font-bold'>Mei 2019</h3>
                                    <h4 className='text-base md:text-xl lg:text-3xl'>Akhirusannah 2018/2019</h4>
                                </div>
                            </div>
                            <div className='md:flex md:justify-center md:items-center mt-36 md:mt-72'>
                                <div className='text-white hidden md:block md:text-right'>
                                    <h3 className='text-base md:text-xl lg:text-3xl font-bold'>Mei 2017</h3>
                                    <h4 className='text-base md:text-xl lg:text-3xl'>Akhirusannah 2016/2017</h4>
                                </div>
                                <div className='mx-auto md:mx-4 lg:mx-8 relative my-3 md:my-0 w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-white'>
                                    <Image
                                        className='overflow-visible'
                                        src="/about-us/akhirusannah-nurfahmi-daycare3.jpg"
                                        alt="nurfahmi daycare akhirusannah 2017"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className='text-white md:hidden md:text-right'>
                                    <h3 className='text-base md:text-xl lg:text-3xl font-bold'>Mei 2019</h3>
                                    <h4 className='text-base md:text-xl lg:text-3xl'>Akhirusannah 2018/2019</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}