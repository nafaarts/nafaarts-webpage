import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 font-poppins">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">
        404
      </h1>
      <p className="text-xl md:text-2xl font-semibold mb-2">
        Halaman Tidak Ditemukan
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <a
        href="/"
        className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20"
      >
        Kembali ke Beranda
      </a>
    </div>
  ),
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Nafaarts',
      },
      {
        property: 'og:site_name',
        content: 'Nafaarts',
      },
      {
        property: 'og:locale',
        content: 'id_ID',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'canonical',
        href: 'https://nafaarts.com',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Nafaarts',
          url: 'https://nafaarts.com',
          logo: 'https://nafaarts.com/images/logo.png',
          description: 'Solusi Sekolah Digital & Konsultan IT Terpercaya',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+62-812-3456-7890',
            contactType: 'customer service',
          },
        }),
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
