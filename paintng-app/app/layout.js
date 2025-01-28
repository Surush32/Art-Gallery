import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata = {
  title: "Evocative Artistry | Original Paintings by Jane Doe",
  description:
    "Discover the captivating world of Jane Doe's original paintings. Immerse yourself in vibrant colors and emotive brushstrokes that bring stories to life on canvas.",
  keywords: "original paintings, contemporary art, Jane Doe, vibrant artwork, emotive paintings",
  openGraph: {
    title: "Evocative Artistry | Original Paintings by Jane Doe",
    description:
      "Discover the captivating world of Jane Doe's original paintings. Immerse yourself in vibrant colors and emotive brushstrokes that bring stories to life on canvas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        width: 2340,
        height: 1560,
        alt: "Jane Doe's Signature Painting",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans bg-background text-foreground">{children}</body>
    </html>
  )
}

