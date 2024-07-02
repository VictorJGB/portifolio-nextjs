import Footer from '@/components/Footer'
import Header from '@/components/header'
import type { Metadata } from 'next'
import { Sen } from 'next/font/google'
import './globals.css'

const sen = Sen({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portifolio Nextjs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={sen.className}>
        <div className="grid grid-rows-[80px_auto_auto]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
