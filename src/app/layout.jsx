import '../index.css'

export const metadata = {
  metadataBase: new URL('https://salmananik.vercel.app'),
  title: 'Salman Anik — CSE Student | Data Science Enthusiast',
  description:
    'Salman Anik is a Computer Science student at East West University in Dhaka, building a foundation in Python, SQL, and Data Science.',
  openGraph: {
    type: 'website',
    title: 'Salman Anik — Computer Science & Data Science',
    description:
      'CSE student at East West University, exploring data science and building practical skills in Python and SQL.',
    images: ['/profile.jpg'],
  },
  verification: {
    google: 'an8rV3cmmY3A4FEYYgX4TbErkZP5C_EiZTJ_-p4waC4',
  },
}

export const viewport = {
  themeColor: '#f5f7fb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
