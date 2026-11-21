import Link from 'next/link'
import { NewsFeed } from '@/components/NewsFeed'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title" className="font-display hero-title animate-fade-in-up">
            Where Every Child Finds Their Place
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-1">
            40 years of excellence in Calabar. Nurturing potential, building character, and inspiring lifelong learning.
          </p>
          <div className="hero-actions animate-fade-in-up delay-2">
            <Link href="#apply" className="btn btn-primary">Start Application</Link>
            <Link href="#about" className="btn btn-ghost">Learn More</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container">
          <header className="section-header">
            <span className="section-tag">About Us</span>
            <h2 id="about-title" className="section-title font-display">Four Decades of Educational Excellence</h2>
          </header>
          <div className="feature-grid">
            <article className="feature-card animate-fade-in-up delay-1">
              <div className="feature-icon" aria-hidden="true">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="feature-title">Academic Excellence</h3>
              <p className="feature-text">Rigorous curriculum preparing students for global opportunities.</p>
            </article>
            <article className="feature-card animate-fade-in-up delay-2">
              <div className="feature-icon" aria-hidden="true">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Character Development</h3>
              <p className="feature-text">Values-based education shaping responsible global citizens.</p>
            </article>
            <article className="feature-card animate-fade-in-up delay-3">
              <div className="feature-icon" aria-hidden="true">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="feature-title">Modern Facilities</h3>
              <p className="feature-text">State-of-the-art labs, libraries, and sports complexes.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Admissions CTA Section */}
      <section id="admissions" className="section bg-gray-50" aria-labelledby="admissions-title">
        <div className="container text-center">
          <header className="section-header">
            <span className="section-tag">Admissions Open</span>
            <h2 id="admissions-title" className="section-title font-display">Join the Hillcrest Family</h2>
          </header>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in-up">
            Applications for the 2025/2026 academic year are now open. Give your child the foundation they deserve.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-1">
            <Link href="#apply" className="btn btn-primary text-lg px-10 py-4">Apply Now</Link>
            <Link href="#contact" className="btn btn-ghost text-lg px-10 py-4">Schedule a Visit</Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="section" aria-labelledby="news-title">
        <div className="container">
          <header className="section-header">
            <span className="section-tag">Latest Updates</span>
            <h2 id="news-title" className="section-title font-display">News & Announcements</h2>
          </header>
          <div className="news-feed">
            <NewsFeed />
          </div>
          <div className="text-center mt-12">
            <Link href="/news" className="btn btn-ghost">View All News</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" aria-labelledby="contact-title">
        <div className="container">
          <header className="section-header">
            <span className="section-tag">Get in Touch</span>
            <h2 id="contact-title" className="section-title font-display">We&apos;d Love to Hear From You</h2>
          </header>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-4">Visit Our Campus</h3>
              <address className="not-italic text-gray-600 space-y-3">
                <p>Hillcrest College Calabar</p>
                <p>1 Hillcrest Drive, Calabar</p>
                <p>Cross River State, Nigeria</p>
              </address>
              <div className="mt-6 space-y-3">
                <a href="tel:+2348000000000" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors duration-fast">
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+234 800 000 0000</span>
                </a>
                <a href="mailto:info@hillcrestcollege.edu.ng" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors duration-fast">
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@hillcrestcollege.edu.ng</span>
                </a>
              </div>
            </div>
            <form className="animate-fade-in-up delay-1" action="#apply" method="POST" aria-label="Contact form">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="form-label">Full Name <span className="text-accent" aria-hidden="true">*</span></label>
                  <input type="text" id="name" name="name" required aria-required="true" className="form-input" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email Address <span className="text-accent" aria-hidden="true">*</span></label>
                  <input type="email" id="email" name="email" required aria-required="true" className="form-input" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" rows={4} className="form-textarea" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="btn btn-primary w-full md:w-auto">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}