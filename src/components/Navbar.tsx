import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo & Theme Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-orange-500 flex items-center gap-2">
            <img src="/images/logo.png" alt="Nafaarts" className="h-[20px] md:h-[25px]" />
            <span className="font-montserrat text-gray-900 dark:text-white">Nafaarts</span>
          </Link>
          <ModeToggle />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium transition-colors cursor-pointer">
            Katalog Produk
          </a>
          <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg text-sm md:text-base">
            Jadwalkan Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-gray-600 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-950 shadow-lg border-t border-gray-100 dark:border-gray-800 p-4 flex flex-col gap-4">
          <a
            href="#products"
            className="text-gray-600 dark:text-gray-300 hover:text-orange-500 font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Katalog Produk
          </a>
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium text-center shadow-md text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Jadwalkan Demo
          </a>
        </div>
      )}
    </header>
  )
}
