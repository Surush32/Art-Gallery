"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const images = [
    "/images/betta-7101167_1280.jpg",
    "/images/dog-8024345_1280.jpg",
    "/images/girl-9038822_1280.jpg",
    "/images/winter-5911787_1280.jpg",
  ]

  const navItems = ["Home", "Collection", "Category", "Pricing"]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="py-4 px-6 md:py-6 md:px-8 flex justify-between items-center bg-white shadow-sm">
        <Link href="/" className="text-2xl font-bold tracking-wider text-teal-600">
          Moco.
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-600 hover:text-teal-600 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
        <Link
          href="/login"
          className="hidden md:inline-block px-6 py-2 text-teal-600 border border-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition duration-300"
        >
          Login
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 focus:outline-none">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 md:px-8 md:py-32 flex flex-col md:flex-row items-center min-h-screen">
        {/* Content (moved to top for mobile) */}
        <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center mb-8 md:mb-0 order-1 md:order-2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-800">
            Elevate your home with <span className="text-teal-600">exquisite</span> paintings
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-3">Discover unique artworks that transform your space</p>
          <p className="text-sm md:text-base text-gray-500 mb-6 max-w-xl">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          </p>
          <Link
            href="/gallery"
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition duration-300 text-center max-w-xs shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Gallery
          </Link>
        </div>

        {/* Image Grid */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  index === 1 || index === 3 ? "md:translate-y-32" : ""
                }`}
              >
                <div className="relative h-[200px] sm:h-[250px] md:h-[350px] w-full">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Artwork ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white text-sm font-medium truncate">Artwork {index + 1}</h3>
                      <p className="text-teal-200 text-xs mt-1">Artist Name</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-gray-100 z-20 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-2xl font-bold my-4 text-gray-700 hover:text-teal-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-2xl font-bold my-4 text-gray-700 hover:text-teal-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

