import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ArtHome
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Featured Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600">
            © 2024 ArtHome. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

