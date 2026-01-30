import { CheckSquare, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section
      className="py-20 bg-white dark:bg-gray-950 scroll-mt-[100px] transition-colors duration-300"
      id="contact"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Hubungi Kami
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs md:text-base">
                Punya pertanyaan tentang produk kami atau ingin konsultasi
                kebutuhan sekolah Anda? Tim kami siap membantu.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 h-3 md:w-5 md:h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-xs md:text-base">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    info[at]nafaarts.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 md:w-5 md:h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-xs md:text-base">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +62 812-3456-7890
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 bg-gray-50 dark:bg-gray-900 rounded-3xl p-3 md:p-8 border border-gray-100 dark:border-gray-800 transition-colors duration-300"
          >
            <form className="space-y-6">
              {/* Row 1: Name, Email, Phone */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-xs md:text-base"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-xs md:text-base"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email@sekolah.id"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-xs md:text-base"
                  >
                    No. Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+62..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-xs md:text-base"
                >
                  Nama Sekolah/Instansi
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Nama Sekolah/Instansi"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              {/* Row 2: Address */}
              <div className="space-y-3">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-xs md:text-base"
                >
                  Alamat Lengkap
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Nama Jalan, Gedung, No. Rumah"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              {/* Row 5: Textarea */}
              <div className="space-y-3">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-xs md:text-base"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  placeholder="Ceritakan kebutuhan sekolah Anda..."
                ></textarea>
              </div>

              {/* Row 6: File Upload */}
              {/* <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-xs md:text-base">Lampiran</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all group">
                  <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500 group-hover:text-orange-500 mb-2 transition-colors" />
                  <p className="text-sm text-gray-500 dark:text-gray-400"><span className="text-orange-600 dark:text-orange-400 font-medium">Klik untuk upload</span> atau drag & drop file</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">PDF, DOC, JPG up to 10MB</p>
                </div>
              </div> */}

              {/* Row 7: Captcha & Submit */}
              <div className="pt-4 flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Mock Captcha */}
                <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                  <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 rounded flex items-center justify-center cursor-pointer">
                    {/* Checkbox state can be added later */}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    I'm not a robot
                  </span>
                  <div className="ml-2 w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <CheckSquare className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 cursor-loading text-sm md:text-base"
                  disabled
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
