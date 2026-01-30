import { Calendar } from 'lucide-react'

export default function MidCtaSection() {
  return (
    <section className="py-20 bg-orange-50 dark:bg-gray-900 border-y border-orange-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Siap Beralih ke <span className="text-orange-500">Sekolah Digital?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mx-auto">
            Bergabunglah dengan institusi pendidikan yang telah bertransformasi bersama kami.
            <br />Konsultasikan kebutuhan digital Anda sekarang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 dark:hover:shadow-orange-900/50 transition-all transform hover:-translate-y-1">
              <Calendar className="w-5 h-5" />
              Jadwalkan Demo Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
