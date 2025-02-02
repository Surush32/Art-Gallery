import Image from "next/image"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User } from "lucide-react"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl sm:text-3xl font-playfair font-bold text-amber-800">
            ArtVista
          </Link>
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link href="/gallery" className="text-amber-700 hover:text-amber-900 font-sans transition duration-300">
              Gallery
            </Link>
            <Link href="/artists" className="text-amber-700 hover:text-amber-900 font-sans transition duration-300">
              Artists
            </Link>
            <Link href="/exhibitions" className="text-amber-700 hover:text-amber-900 font-sans transition duration-300">
              Exhibitions
            </Link>
            <Link href="/about" className="text-amber-700 hover:text-amber-900 font-sans transition duration-300">
              About
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-amber-700 cursor-pointer hover:text-amber-900 transition duration-300" />
            <ShoppingBag className="w-5 h-5 text-amber-700 cursor-pointer hover:text-amber-900 transition duration-300" />
            <User className="w-5 h-5 text-amber-700 cursor-pointer hover:text-amber-900 transition duration-300" />
            <Menu className="w-5 h-5 text-amber-700 cursor-pointer hover:text-amber-900 transition duration-300 md:hidden" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 lg:pt-0 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-4 sm:mb-6 font-playfair leading-tight">
              Discover the Beauty of Fine Art
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-amber-800 mb-6 sm:mb-8 font-sans">
              Explore our curated collection of timeless masterpieces and contemporary wonders.
            </p>
            <Link
              href="/gallery"
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition duration-300 shadow-lg inline-block"
            >
              Explore Our Collection
            </Link>
          </div>
          <div className="lg:w-1/2 w-full max-w-2xl lg:max-w-none mx-auto">
            <div className="grid grid-cols-6 grid-rows-5 gap-2 sm:gap-4 h-[400px] sm:h-[500px] lg:h-[600px]">
              <div className="col-span-4 row-span-3 relative group">
                <div className="absolute inset-0 bg-amber-900 opacity-20 group-hover:opacity-10 transition-opacity duration-300 z-10 rounded-lg"></div>
                <Image
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2045&q=80"
                  alt="The Starry Night by Vincent van Gogh"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white z-20">
                  <h3 className="text-base sm:text-xl font-bold font-playfair">The Starry Night</h3>
                  <p className="text-xs sm:text-sm">Vincent van Gogh</p>
                </div>
              </div>
              <div className="col-span-2 row-span-5 relative group">
                <div className="absolute inset-0 bg-orange-900 opacity-20 group-hover:opacity-10 transition-opacity duration-300 z-10 rounded-lg"></div>
                <Image
                  src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Abstract Composition"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white z-20">
                  <h3 className="text-base sm:text-xl font-bold font-playfair">Abstract Composition</h3>
                  <p className="text-xs sm:text-sm">Modern Art Collection</p>
                </div>
              </div>
              <div className="col-span-4 row-span-2 relative group">
                <div className="absolute inset-0 bg-yellow-900 opacity-20 group-hover:opacity-10 transition-opacity duration-300 z-10 rounded-lg"></div>
                <Image
                  src="https://images.unsplash.com/photo-1578926288207-a90a5366759d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
                  alt="The Persistence of Memory by Salvador Dalí"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white z-20">
                  <h3 className="text-base sm:text-xl font-bold font-playfair">The Persistence of Memory</h3>
                  <p className="text-xs sm:text-sm">Salvador Dalí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

