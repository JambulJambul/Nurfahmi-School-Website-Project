import './globals.css'
import Navbar from './components/navbar/page'
import Footer from './components/footer/page'
import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nurfahmi Daycare',
  description: 'Nurfahmi Daycare 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={baloo.className}><Navbar/>{children}<Footer/></body>
    </html>
  )
}
