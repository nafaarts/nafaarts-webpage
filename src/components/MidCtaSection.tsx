import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MidCtaSection() {
  return (
    <section className="py-20 bg-orange-50 dark:bg-gray-900 border-y border-orange-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Siap Beralih ke{' '}
              <span className="text-orange-500">Sekolah Digital?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mx-auto mt-4">
              Bergabunglah dengan institusi pendidikan yang telah
              bertransformasi bersama kami.
              <br />
              Konsultasikan kebutuhan digital Anda sekarang.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 dark:hover:shadow-orange-900/50 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Jadwalkan Demo Gratis
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
