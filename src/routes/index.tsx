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
  head: () => ({
    meta: [
      {
        title: 'Nafaarts - Solusi Sekolah Digital & Konsultan IT',
      },
      {
        name: 'description',
        content:
          'Wujudkan sekolah digital dalam satu klik bersama Nafaarts. Layanan konsultan IT terpercaya untuk transformasi digital pendidikan dan bisnis Anda.',
      },
      {
        name: 'keywords',
        content:
          'sekolah digital, konsultan IT, aplikasi sekolah, website sekolah, nafaarts, transformasi digital, sistem informasi sekolah',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'Nafaarts - Solusi Sekolah Digital & Konsultan IT',
      },
      {
        property: 'og:description',
        content:
          'Wujudkan sekolah digital dalam satu klik bersama Nafaarts. Solusi digital terpercaya untuk pendidikan.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://nafaarts.com', // Placeholder URL
      },
      {
        property: 'og:image',
        content: '/images/hero.png', // Using hero image as fallback
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Nafaarts - Solusi Sekolah Digital',
      },
      {
        name: 'twitter:description',
        content: 'Transformasi digital sekolah Anda dengan solusi Nafaarts.',
      },
      {
        name: 'twitter:image',
        content: '/images/hero.png',
      },
    ],
  }),
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
