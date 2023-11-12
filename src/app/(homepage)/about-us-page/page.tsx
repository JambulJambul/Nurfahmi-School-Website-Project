import Navbar from '@/app/components/navbar/page'
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({
    subsets: ['latin'],
})

export default function aboutUs() {
    return (
        <>
            <Navbar></Navbar>
            <main className={baloo.className}>
                <div className="mx-auto max-w-screen-xl">
                    <h1 className='mt-8 md:mt-12 text-center text-4xl lg:text-6xl text-amber-400 font-bold'>
                        About Us
                    </h1>
                </div>
                <div className='bg-blue-500'>
                    <div className='max-w-screen-xl text-center mx-auto my-8 py-8 md:my-16 md:py-16'>
                        <p className='text-white text-base md:text-xl leading-loose mx-8 xl:mx-0'>
                            Nurfahmi Daycare berawal sebagai Sekolah Nurfahmi berdiri sejak tahun 2011. Merupakan sekolah yang bertransformasi menjadi penitipan anak (Daycare), yang bertujuan untuk memenuhi kebutuhan pengasuhan dan pendidikan anak usia 2 - 6 tahun. Anak difasilitasi dengan berbagai Alat Peraga Edukasi sesuai tahap usianya dan didampingi oleh guru-guru yang kompeten.<br/><br/>Diharapkan anak akan siap secara mental, emosi dan intelegen untuk memasuki Sekolah Dasar. Sehari-hari Nurfahmi Daycare menyediakan anak-anak snack, makan siang, makan sore yg sehat. Guru-guru memberi Laporan Harian dan Laporan Perkembangan Anak setiap 3 bulan. Mulai tahun 2023 ini Nurfahmi Daycare in syaa Allah akan didukung teknologi informasi (IT) dalam komunikasinya dengan orang tua.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}