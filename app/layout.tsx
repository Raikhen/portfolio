import './global.css'
import Head from 'next/head'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Dylan Fridman',
    template: '%s | Dylan Fridman',
  },
  description: 'Dylan Fridman\' Website.',
  openGraph: {
    title: 'Dylan Fridman',
    description: 'Dylan Fridman\' Website.',
    url: baseUrl,
    siteName: 'Dylan Fridman',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-white bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <Head>
        <link rel="preload" href="/images/dylan.png" as="image" />
        <link rel="preload" href="/projects/chesslet.png" as="image" />
        <link rel="preload" href="/projects/crack-trainer-website.png" as="image" />
      </Head>
      <body className="antialiased max-w-xl px-4 mt-8 m-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
