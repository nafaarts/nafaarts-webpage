import { ArrowRight, Settings } from 'lucide-react'

export default function ProductSection() {
  const products = [
    {
      id: 1,
      title: 'Tracer Study & Bursa Kerja',
      description: 'Khusus SMK Negeri',
      isComingSoon: true,
      image: 'https://placehold.co/400x400/e5e7eb/a3a3a3?text=Tracer+Study'
    },
    {
      id: 2,
      title: 'Perpustakaan Digital',
      description: 'Manajemen Buku & Pustaka',
      isComingSoon: false,
      image: 'https://placehold.co/400x400/e5e7eb/a3a3a3?text=Perpustakaan'
    },
    {
      id: 3,
      title: 'Absensi Online',
      description: 'Untuk Pegawai dan Siswa',
      isComingSoon: true,
      image: 'https://placehold.co/400x400/e5e7eb/a3a3a3?text=Absensi'
    },
    {
      id: 4,
      title: 'Aplikasi Ujian CBT',
      description: 'Ujian Berbasis Komputer',
      isComingSoon: true,
      image: 'https://placehold.co/400x400/e5e7eb/a3a3a3?text=CBT'
    },
    {
      id: 5,
      title: 'PPDB Sekolah',
      description: 'Penerimaan Peserta Baru',
      isComingSoon: false,
      image: 'https://placehold.co/400x400/e5e7eb/a3a3a3?text=PPDB'
    }
  ]

  return (
    <section id="products" className="py-20 bg-white overflow-hidden scroll-mt-[100px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Kami</h2>
          <p className="text-gray-500">
            Solusi digital siap pakai untuk kebutuhan sekolah Anda
          </p>
        </div>

        {/* <div className="flex flex-col lg:flex-row gap-8 items-stretch"> */}
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
            {products.map((product) => (
              <div key={product.id} className="group relative rounded-2xl bg-white hover:bg-gray-50 flex flex-col">
                <div className="aspect-square bg-gray-200 rounded-xl mb-4 overflow-hidden transition-transform duration-300 relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`w-full h-full object-cover ${product.isComingSoon ? 'grayscale opacity-70' : ''}`}
                  />
                  {product.isComingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <span className="bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1 leading-tight">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">{product.description}</p>
                
                {product.isComingSoon ? (
                   <div className="text-gray-400 font-medium text-sm flex items-center gap-1 cursor-not-allowed">
                     Segera Hadir
                   </div>
                ) : (
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all self-start">
                    Lihat Detail <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}

            <div className="h-full rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50/50 p-6 flex flex-col justify-center items-center text-center hover:bg-orange-50 hover:border-orange-300 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Butuh Aplikasi Kustom?</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Kami siap membangun sistem sesuai kebutuhan spesifik sekolah Anda.
              </p>
              <button className="w-full py-3 bg-white border border-orange-200 text-orange-600 rounded-lg font-semibold shadow-sm hover:shadow-md hover:border-orange-400 transition-all">
                Konsultasi Gratis
              </button>
            </div>
          </div>

          {/* Custom App CTA (Side) */}
        {/* </div> */}
      </div>
    </section>
  )
}
