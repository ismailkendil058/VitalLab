import type { Metadata, Viewport } from 'next'
import { Inter, Outfit, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'VitalLab | Digital Agency for Health & Wellness',
  description:
    'VitalLab transforms your digital presence into a powerful tool for attracting clients. Premium web design and development.',
  icons: {
    icon: '/VitalWeb.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2051DB',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
