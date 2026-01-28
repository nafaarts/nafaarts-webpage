import { Calendar } from 'lucide-react'

export default function MidCtaSection() {
  return (
    <section className="py-24 bg-[#FFF5E6]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Siap Beralih ke <span className="text-orange-500">Sekolah Digital?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Bergabunglah dengan ratusan sekolah yang telah meningkatkan efisiensi manajemen dan kualitas pembelajaran bersama Nafaarts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1">
              <Calendar className="w-5 h-5" />
              Jadwalkan Demo Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
