import { ArrowRight, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductSection() {
  const products = [
    {
      id: 1,
      title: 'Tracer Study & Bursa Kerja',
      description: 'Khusus SMK Negeri',
      isComingSoon: true,
      image: 'https://placehold.co/400x400/e5e7eb/a3a3a3?text=Tracer+Study',
    },
    {
      id: 2,
      title: 'Perpustakaan Digital',
      description: 'Manajemen Buku & Pustaka',
      isComingSoon: true,
      image: 'https://placehold.co/400x400/e5e7eb/a3a3a3?text=Perpustakaan',
    },
    {
      id: 3,
      title: 'Absensi Online',
      description: 'Untuk Pegawai dan Siswa',
      isComingSoon: true,
      image: 'https://placehold.co/400x400/e5e7eb/a3a3a3?text=Absensi',
    },
    {
      id: 4,
      title: 'Aplikasi Ujian CBT',
      description: 'Ujian Berbasis Komputer',
      isComingSoon: true,
      image: 'https://placehold.co/400x400/e5e7eb/a3a3a3?text=CBT',
    },
    {
      id: 5,
      title: 'PPDB Sekolah',
      description: 'Penerimaan Peserta Baru',
      isComingSoon: true,
      image: 'https://placehold.co/400x400/e5e7eb/a3a3a3?text=PPDB',
    },
  ]

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  }

  return (
    <section
      id="products"
      className="py-20 bg-white dark:bg-gray-950 overflow-hidden scroll-mt-[100px] transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Produk Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-500 dark:text-gray-400 text-xs md:text-base"
          >
            Solusi digital siap pakai untuk kebutuhan sekolah Anda
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Product Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group relative rounded-2xl bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/80 flex flex-col transition-colors duration-300"
              >
                <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 overflow-hidden transition-transform duration-300 relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`w-full h-full object-cover ${product.isComingSoon ? 'grayscale opacity-70' : ''}`}
                  />
                  {product.isComingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 dark:bg-black/40">
                      <span className="bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 leading-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">
                  {product.description}
                </p>

                {product.isComingSoon ? (
                  <div className="text-gray-400 dark:text-gray-500 font-medium text-sm flex items-center gap-1 cursor-not-allowed">
                    Segera Hadir
                  </div>
                ) : (
                  <button className="text-orange-500 font-medium text-xs md:text-sm flex items-center gap-1 group-hover:gap-2 transition-all self-start">
                    Lihat Detail <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            ))}
            {/* Custom App CTA (Side) */}
            <motion.div
              variants={itemVariants}
              className="h-full rounded-2xl border-2 border-dashed border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-900/20 p-6 flex flex-col justify-center items-center text-center hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:border-orange-300 dark:hover:border-orange-700 transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3">
                Butuh Aplikasi Kustom?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Kami siap membangun sistem sesuai kebutuhan spesifik sekolah
                Anda.
              </p>
              <button className="w-full py-2 md:py-3 bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400 rounded-lg font-semibold shadow-sm hover:shadow-md hover:border-orange-400 dark:hover:border-orange-500 transition-all text-xs md:text-base">
                Konsultasi Gratis
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
