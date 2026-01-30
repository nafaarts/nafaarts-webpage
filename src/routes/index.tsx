import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ClientLogos from '../components/ClientLogos'
import ProductSection from '../components/ProductSection'
import MidCtaSection from '../components/MidCtaSection'
import ContactSection from '../components/ContactSection'
import ScrollToTop from '../components/ScrollToTop'
import { ThemeProvider } from '../components/ThemeProvider'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="font-poppins text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950 min-h-screen flex flex-col transition-colors duration-300">
         <Navbar />
         <main className="flex-grow">
           <HeroSection />
           <ClientLogos />
           <ProductSection />
           <MidCtaSection />
           <ContactSection />
         </main>
         <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}
