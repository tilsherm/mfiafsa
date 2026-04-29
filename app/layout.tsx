import React from "react"
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { FooterWrapper } from '@/components/footer-wrapper'
import { ScrollToTop } from '@/components/scroll-to-top'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ['300', '400', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Military Family Institute | Equipping Military Spouses with Leadership Tools',
  description: 'Military Family Institute is a nonprofit organization dedicated to strengthening military families through leadership development, training, and community support.',
  keywords: ['military family', 'military spouse', 'leadership training', 'nonprofit', 'military community', 'family support'],
  authors: [{ name: 'Military Family Institute' }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Military Family Institute',
    description: 'Equipping military spouses with leadership tools that strengthen families, units, and communities.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#066779',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${merriweather.variable} font-sans antialiased`} suppressHydrationWarning>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <FooterWrapper />
        <Analytics />
      </body>
    </html>
  )
}
