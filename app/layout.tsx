import './globals.css'
import { Outfit, Cormorant_Garamond, Lobster } from 'next/font/google'
import Link from 'next/link'
import { MobileHeader } from '@/app/components/MobileHeader'

// Use local font loading with preload: false for offline builds
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: false,
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: false,
})

const lobster = Lobster({
  subsets: ['latin'],
  variable: '--font-lobster',
  weight: ['400'],
  display: 'swap',
  preload: false,
})

export const metadata = {
  title: 'Hillcrest College Calabar',
  description: '40 years of excellence in Calabar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0A3D3C" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <header className="site-header" id="site-header">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="logo-mark">HC</div>
              <span className="font-display logo-text">Hillcrest</span>
            </Link>
            <nav className="hidden md:flex">
              <ul className="nav-list">
                <li role="none"><Link href="/" className="nav-link">Home</Link></li>
                <li role="none"><Link href="/about" className="nav-link">About Us</Link></li>
                <li role="none"><Link href="/admissions" className="nav-link">Admissions</Link></li>
                <li role="none"><Link href="/news" className="nav-link">News</Link></li>
                <li role="none"><Link href="/portal/results" className="nav-link">Portal</Link></li>
                <li role="none"><Link href="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </nav>
            <MobileHeader />
          </div>
        </header>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <footer className="site-footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/">Hillcrest</Link>
              <p>40 years of excellence</p>
            </div>
            <nav className="footer-nav">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/admissions">Admissions</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Hillcrest College Calabar</p>
          </div>
        </footer>
      </body>
    </html>
  )
}