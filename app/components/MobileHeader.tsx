'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const mobileMenuBtnRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)
  const headerApplyBtnRef = useRef<HTMLAnchorElement>(null)
  const pathname = usePathname()

  // Check if mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Header Scroll Effect
  useEffect(() => {
    const siteHeader = document.getElementById('site-header')
    if (!siteHeader) return

    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 20) {
        siteHeader.classList.add('scrolled')
      } else {
        siteHeader.classList.remove('scrolled')
      }
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [pathname])

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        mobileMenuBtnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Sync header Apply Now visibility with menu state on mobile
  useEffect(() => {
    if (headerApplyBtnRef.current && isMobile) {
      headerApplyBtnRef.current.style.display = isMenuOpen ? 'none' : 'inline-flex'
    } else if (headerApplyBtnRef.current) {
      headerApplyBtnRef.current.style.display = 'inline-flex'
    }
  }, [isMenuOpen, isMobile])

  const toggleMenu = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)

    // Focus management
    if (newState) {
      setTimeout(() => {
        const firstFocusable = mobileNavRef.current?.querySelector('a, button') as HTMLElement
        firstFocusable?.focus()
      }, 100)
    } else {
      mobileMenuBtnRef.current?.focus()
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    mobileMenuBtnRef.current?.focus()
  }

  return (
    <>
      {/* Header Actions */}
      <div className="header-actions flex items-center gap-3">
        {/* CTA Button - visible on all sizes, hidden via state when mobile menu opens */}
        <Link
          ref={headerApplyBtnRef}
          href="/admissions#apply"
          className="btn btn-accent"
          aria-label="Apply to Hillcrest College"
          id="header-apply-btn"
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button - far right */}
        <button
          ref={mobileMenuBtnRef}
          className="mobile-menu-btn"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          id="mobile-menu-btn"
          onClick={toggleMenu}
        >
          <span className="hamburger" aria-hidden="true"></span>
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Menu'}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        ref={mobileNavRef}
        id="mobile-nav"
        className="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
      >
        <ul className="nav-list flex flex-col gap-2" role="menubar">
          <li role="none"><Link href="/" className="nav-link py-3 px-4 text-lg font-medium block" role="menuitem" onClick={closeMenu}>Home</Link></li>
          <li role="none"><Link href="/about" className="nav-link py-3 px-4 text-lg font-medium block" role="menuitem" onClick={closeMenu}>About Us</Link></li>
          <li role="none"><Link href="/admissions" className="nav-link py-3 px-4 text-lg font-medium block" role="menuitem" onClick={closeMenu}>Admissions</Link></li>
          <li role="none"><Link href="/news" className="nav-link py-3 px-4 text-lg font-medium block" role="menuitem" onClick={closeMenu}>News & Announcements</Link></li>
          <li role="none"><Link href="/portal/results" className="nav-link py-3 px-4 text-lg font-medium block" role="menuitem" onClick={closeMenu}>Student Portal</Link></li>
          <li role="none"><Link href="/contact" className="nav-link py-3 px-4 text-lg font-medium block" role="menuitem" onClick={closeMenu}>Contact Us</Link></li>
          <li role="none"><Link href="/admissions#apply" className="btn btn-accent w-full text-center mt-4 py-3" role="menuitem" onClick={closeMenu}>Apply Now</Link></li>
        </ul>
      </nav>
    </>
  )
}