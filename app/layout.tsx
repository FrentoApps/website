import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata = {
  title: 'Introducing Frento',
  description: 'An innovative agency comprised of forward-thinking developers dedicated to revolutionizing the landscape of web applications worldwide',
  metadataBase: new URL('https://frento.us.to'),
  openGraph: {
    title: 'Frento',
    description: 'An innovative agency comprised of forward-thinking developers dedicated to revolutionizing the landscape of web applications worldwide',
    url: 'https://frento.us.to',
    siteName: 'Frento',
  },
  twitter: {
    title: 'Introducing Frento',
    description: 'An innovative agency comprised of forward-thinking developers dedicated to revolutionizing the landscape of web applications worldwide',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}

