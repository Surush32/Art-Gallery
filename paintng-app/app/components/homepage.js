import Image from "next/image"
import { Palette, Brush, Frame } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Colorful Abstract Art"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Magic of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">ArtHome</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Immerse yourself in a world of creativity, color, and expression
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <FeatureIcon icon={Palette} text="Unique Styles" />
            <FeatureIcon icon={Brush} text="Expert Artists" />
            <FeatureIcon icon={Frame} text="Custom Framing" />
          </div>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Our Gallery
          </button>
        </div>
      </section>
    </div>
  )
}

function FeatureIcon({ icon: Icon, text }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white bg-opacity-20 p-3 rounded-full mb-2">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-sm">{text}</span>
    </div>
  )
}

