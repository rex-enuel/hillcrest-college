'use client'

import Link from 'next/link'

interface CTAButtonProps {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary'
}

export function CTAButton({ children, href, variant = 'primary' }: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-200"
  
  const styles = variant === 'primary' 
    ? "bg-[#d4af37] text-primary-900 hover:scale-105 hover:shadow-xl"
    : "border-2 border-primary-600 text-primary-700 hover:bg-primary-50"

  return (
    <Link href={href} className={`${baseStyles} ${styles}`}>
      {children}
    </Link>
  )
}