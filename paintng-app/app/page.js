"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown, Instagram, Mail } from "lucide-react"

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-foreground hover:text-primary transition duration-300">
    {children}
  </Link>
)

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="bg-background shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-playfair text-2xl text-primary">
              Jane Doe
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <NavLink href="#about">
                <div className="block py-2">About</div>
              </NavLink>
              <NavLink href="#gallery">
                <div className="block py-2">Gallery</div>
              </NavLink>
              <NavLink href="#contact">
                <div className="block py-2">Contact</div>
              </NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex items-center bg-gradient-to-br from-secondary/20 to-background pt-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
              Emotions Captured in Color
            </h1>
            <p className="font-lato text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
              Step into Jane Doe's world of vibrant artistry. Each painting is a journey through color and emotion,
              inviting you to explore the depths of human experience captured on canvas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2 rounded-md text-lg font-semibold hover:bg-primary/90 transition duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-6 py-2 rounded-md text-lg font-semibold hover:bg-secondary/90 transition duration-300"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Vibrant abstract painting by Jane Doe"
              width={500}
              height={375}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jane Doe",
            url: "https://www.janedoe.com",
            sameAs: ["https://www.instagram.com/janedoe", "https://www.facebook.com/janedoe"],
            jobTitle: "Artist",
            description:
              "Jane Doe is a contemporary artist known for her vibrant and emotive paintings that capture the essence of human emotion through color and form.",
          }),
        }}
      />
    </div>
  )
}

