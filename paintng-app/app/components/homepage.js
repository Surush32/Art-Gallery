"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingCart, UserCircle } from 'lucide-react';

export default function Homepage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  const images = [
    { src: '/images/animal-3546613_1280.jpg', alt: "Animal", title: "Wildlife Wonders" },
    { src: '/images/ai-generated-8578998_1280.png', alt: "AI Generated", title: "AI Artistry" },
    { src: '/images/artist-3013762_1280.jpg', alt: "Artist", title: "Master Creators" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Reduced speed of animation

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold text-gray-800 hover:text-gray-900 transition duration-300">
              ArtVista
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {['Gallery', 'Artists', 'Exhibitions', 'About'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 font-medium transition duration-300">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300" />
              <UserCircle className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300" />
              <Menu className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300 md:hidden" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Discover Art That Speaks to Your Soul
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              Immerse yourself in a world of creativity, from timeless masterpieces to cutting-edge contemporary works. Let ArtVista be your guide to the extraordinary.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="/gallery"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Gallery
              </Link>
              <Link
                href="/artists"
                className="inline-block bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Meet Artists
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeImageIndex 
                    ? 'fade-out-left' 
                    : index === nextImageIndex
                      ? 'fade-in-right'
                      : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">{image.title}</h3>
                  <p className="text-xs mt-1 text-gray-300">Explore {image.alt} Art</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
