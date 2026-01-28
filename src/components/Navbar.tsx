import { Link } from '@tanstack/react-router'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-orange-500 font-poppins"
        >
          <img src="/images/logo.png" alt="Nafaarts" className="h-[25px]" />
        </Link>

        <div className="flex items-center gap-8">
          <a href="#products" className="text-gray-600 hover:text-orange-500 font-medium transition-colors cursor-pointer hidden md:block">
            Produk Digital
          </a>
          <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
            Book Demo
          </a>
        </div>

      </div>
    </nav>
  )
}
