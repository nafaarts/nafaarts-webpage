import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ClientLogos from '../components/ClientLogos'
import ProductSection from '../components/ProductSection'
import MidCtaSection from '../components/MidCtaSection'
import ContactSection from '../components/ContactSection'
import ScrollToTop from '../components/ScrollToTop'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="font-poppins text-gray-900 bg-white min-h-screen flex flex-col">
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
  )
}
