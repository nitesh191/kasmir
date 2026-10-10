import { Cormorant_Garamond, Inter, Cormorant } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-accent',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Kashir Wath — Soulful Journeys Through Kashir',
    template: '%s | Kashir Wath',
  },
  description:
    'Kashir Wath curates soulful, premium journeys through Kashmir — rooted in Kashmiri Pandit heritage, open to all who seek to discover Kashir beyond conventional tourism.',
  keywords: [
    'Kashmir travel',
    'Kashmir tours',
    'Kashmiri Pandit heritage',
    'Kashmir cultural tours',
    'premium Kashmir journeys',
    'Kashmir pilgrimage',
    'sacred Kashmir',
    'Kashmir experiences',
  ],
  openGraph: {
    title: 'Kashir Wath — Soulful Journeys Through Kashir',
    description:
      'Rooted in heritage, open to discovery. Premium curated journeys through Kashmir.',
    siteName: 'Kashir Wath',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kashir Wath — Soulful Journeys Through Kashir',
    description:
      'Rooted in heritage, open to discovery. Premium curated journeys through Kashmir.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
