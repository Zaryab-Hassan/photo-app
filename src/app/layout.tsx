import Navbar from '@/components/nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideMenu from '@/components/sidemenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className = "dark">
      <body className={inter.className}>
        <div>
          <Navbar/>
        </div>
        <div className = "flex mt-5">
          <SideMenu/>
          {children}
        </div>
        </body>
    </html>
  )
}
