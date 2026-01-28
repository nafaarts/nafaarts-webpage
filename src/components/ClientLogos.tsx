export default function ClientLogos() {
    const clients = [
        { name: 'Bina Nusa', logo: '/images/clients/bina-nusa.webp' },
        { name: 'Dinas Pendidikan', logo: '/images/clients/dinas-pendidikan.webp' },
        { name: 'JKREVI', logo: '/images/clients/jkrevi.webp' },
        { name: 'Muhammadiyah', logo: '/images/clients/muhammadiyah.webp' },
        { name: 'Musano', logo: '/images/clients/musano.webp' },
        { name: 'Panti Muhammadiyah', logo: '/images/clients/panti-muhammadiyah.webp' },
        { name: 'PEM Akamigas', logo: '/images/clients/pem-akamigas.webp' },
        { name: 'SMK 2 Banda Aceh', logo: '/images/clients/smk2bandaaceh.webp' },
        { name: 'Yakesma', logo: '/images/clients/yakesma.webp' },
    ]

    return (
        <section className="py-12 border-y border-gray-50 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <p className="text-gray-500 font-medium mb-12">Dipercaya oleh berbagai sekolah, organisasi dan perusahaan</p>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="h-12 px-4 flex items-center justify-center"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-full w-auto object-contain max-w-[150px]"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
