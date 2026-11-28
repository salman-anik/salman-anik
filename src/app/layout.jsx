import '../index.css'

export const metadata = {
  metadataBase: new URL('https://salmananik.vercel.app'),
  title: 'Salman Anik — CSE Student | Data Science Enthusiast',
  description:
    'Salman Anik is a Computer Science student at East West University in Dhaka, building a foundation in Python, SQL, and Data Science.',
  icons: {
    icon: [
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon-48.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Salman Anik',
    title: 'Salman Anik — Computer Science & Data Science',
    description:
      'CSE student at East West University, exploring data science and building practical skills in Python and SQL.',
    images: ['/profile.jpg'],
  },
  verification: {
    google: 'an8rV3cmmY3A4FEYYgX4TbErkZP5C_EiZTJ_-p4waC4',
  },
}

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Salman Anik',
  url: 'https://salmananik.vercel.app',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f5f7fb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
