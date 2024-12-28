import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import BackToTop from '@/components/ui/BackToTop'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Forgeweb - Web Services Company',
  description: 'Professional web services for your business needs',
  icons: {
    icon: '/logo-head.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}

