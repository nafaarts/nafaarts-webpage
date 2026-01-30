import { motion } from 'framer-motion'

export default function ClientLogos() {
    const clients = [
        { name: 'Bina Nusa', logo: '/images/clients/bina-nusa.webp' },
        { name: 'Dinas Pendidikan', logo: '/images/clients/dinas-pendidikan.webp' },
        { name: 'JKREVI', logo: '/images/clients/jkrevi.webp' },
        { name: 'Muhammadiyah', logo: '/images/clients/muhammadiyah.webp' },
        { name: 'Musano', logo: '/images/clients/musano.webp' },
        {
            name: 'Panti Muhammadiyah',
            logo: '/images/clients/panti-muhammadiyah.webp',
        },
        { name: 'PEM Akamigas', logo: '/images/clients/pem-akamigas.webp' },
        { name: 'SMK 2 Banda Aceh', logo: '/images/clients/smk2bandaaceh.webp' },
        { name: 'Yakesma', logo: '/images/clients/yakesma.webp' },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    }

    return (
        <section className="py-12 border-y border-gray-50 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-xs md:text-base text-gray-500 dark:text-gray-400 font-medium mb-12">
                    Dipercaya oleh berbagai sekolah, organisasi dan perusahaan
                </motion.h2>

                {/* Desktop View (Grid) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="hidden md:flex flex-wrap justify-center items-center gap-12"
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-12 px-4 flex items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500 dark:invert hover:invert-0"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-full w-auto object-contain max-w-[150px] "
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile View (Infinite Scroll Marquee) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:hidden relative overflow-hidden w-full grayscale hover:grayscale-0"
                >
                    {/* Gradient Overlay Left */}
                    <div className="absolute top-0 left-0 z-10 w-20 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 via-gray-50/80 dark:via-gray-900/80 to-transparent"></div>

                    {/* Gradient Overlay Right */}
                    <div className="absolute top-0 right-0 z-10 w-20 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 via-gray-50/80 dark:via-gray-900/80 to-transparent"></div>

                    <div className="flex w-max animate-scroll gap-8 opacity-70">
                        {/* Original + Duplicate for seamless loop */}
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={index}
                                className="h-10 flex-shrink-0 flex items-center justify-center"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-full w-auto object-contain max-w-[120px] dark:invert"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
