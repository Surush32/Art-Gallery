import './globals.css'
import { Playfair_Display, Lato } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' })

export const metadata = {
  title: 'ArtVista - Contemporary Art Gallery',
  description: 'Discover and explore contemporary masterpieces from renowned artists around the globe.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>{children}</body>
    </html>
  )
}
