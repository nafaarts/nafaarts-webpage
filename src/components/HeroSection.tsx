export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-poppins">
              Wujudkan <span className="text-orange-500">Sekolah Digital</span>{' '}
              dalam satu klik
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              Tinggalkan proses manual. Hadirkan solusi digital yang cepat, stabil, dan efesien
              untuk kebutuhan operasional anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-orange-200 text-center">
              Jadwalkan Demo
            </a>
            <a href="#contact" className="border-2 border-orange-100 hover:border-orange-500 hover:text-orange-500 text-gray-600 px-8 py-4 rounded-xl font-semibold transition-all bg-orange-50/50 hover:bg-white text-center">
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <div className="relative z-10 rounded-3xl overflow-hidden">
            <img
              src="/images/hero.webp"
              alt="Ilustrasi Sekolah Digital"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
        </div>
      </div>
    </section>
  )
}
