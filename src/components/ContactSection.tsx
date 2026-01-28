import { Mail, Phone, CheckSquare } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-20 bg-white scroll-mt-[100px]" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left Column: Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 leading-relaxed">
                Punya pertanyaan tentang produk kami atau ingin konsultasi kebutuhan sekolah Anda? Tim kami siap membantu.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info[at]nafaarts.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100">
            <form className="space-y-6">

              {/* Row 1: Name, Email, Phone */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" placeholder="email@sekolah.id" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">No. Telepon</label>
                  <input type="tel" id="phone" placeholder="+62..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white" />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Nama Sekolah/Instansi</label>
                <input type="text" id="company" placeholder="Nama Sekolah/Instansi" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white" />
              </div>

              {/* Row 2: Address */}
              <div className="space-y-3">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
                <input type="text" id="address" placeholder="Nama Jalan, Gedung, No. Rumah" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white" />
              </div>


              {/* Row 5: Textarea */}
              <div className="space-y-3">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan Anda</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white resize-none" placeholder="Ceritakan kebutuhan sekolah Anda..."></textarea>
              </div>

              {/* Row 6: File Upload */}
              {/* <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Lampiran</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:border-orange-300 transition-all group">
                  <Upload className="w-8 h-8 text-gray-400 group-hover:text-orange-500 mb-2 transition-colors" />
                  <p className="text-sm text-gray-500"><span className="text-orange-600 font-medium">Klik untuk upload</span> atau drag & drop file</p>
                  <p className="text-xs text-gray-400 mt-1">PDF, DOC, JPG up to 10MB</p>
                </div>
              </div> */}

              {/* Row 7: Captcha & Submit */}
              <div className="pt-4 flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Mock Captcha */}
                <div className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center cursor-pointer">
                    {/* Checkbox state can be added later */}
                  </div>
                  <span className="text-sm text-gray-600">I'm not a robot</span>
                  <div className="ml-2 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    <CheckSquare className="w-4 h-4 text-blue-500" />
                  </div>
                </div>

                <button type="submit" className="w-full md:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 cursor-loading" disabled>
                  Kirim Pesan
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
