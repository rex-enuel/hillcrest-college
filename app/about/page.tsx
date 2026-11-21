import { Timeline } from '@/components/Timeline'
import { HillVisual } from '@/components/HillVisual'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Video Background - Visual Only */}
      <section id="about-hero" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" aria-labelledby="about-hero-title">
        <div className="absolute inset-0 z-0">
          <HillVisual />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-transparent z-10" />
      </section>

      {/* Story Section - Dedicated Content Below Hero */}
      <section id="about-story" className="section" aria-labelledby="story-title">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="section-tag" style={{ color: '#F45B5B' }}>Our Story</span>
            <h1 id="story-title" className="font-display hero-title mt-4 text-gray-900">
              Four Decades of Educational Excellence
            </h1>
            <p className="hero-subtitle delay-1 max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
              From a family home serving special needs children to Calabar's premier educational institution — our journey reflects Nigeria's evolving educational landscape.
            </p>
            {/* Button Group Layout */}
            <div className="mt-12 animate-fade-in-up delay-2">
              <Link href="#timeline" className="btn btn-primary text-lg px-10 py-4 w-full sm:w-auto mx-auto block mb-4">
                Explore Our History
              </Link>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/admissions" className="btn btn-accent text-lg px-8 py-3">
                  Join Our Legacy
                </Link>
                <button className="btn btn-ghost text-lg px-8 py-3" style={{ borderColor: '#0A3D3C', color: '#0A3D3C' }}>
                  Watch Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section id="mission" className="section" aria-labelledby="mission-title">
        <div className="container">
          <header className="section-header animate-fade-in-up">
            <span className="section-tag">Who We Are</span>
            <h2 id="mission-title" className="section-title font-display">Guided by Purpose</h2>
          </header>
          <div className="feature-grid">
            <article className="feature-card animate-fade-in-up delay-1">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #0A3D3C, #145452)' }}>
                <svg className="w-8 h-8" fill="none" stroke="#A8C9C8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="feature-title">Our Mission</h3>
              <p className="feature-text">To nurture every child's unique potential through inclusive, values-based education that builds character, inspires lifelong learning, and prepares global citizens rooted in Nigerian heritage.</p>
            </article>
            <article className="feature-card animate-fade-in-up delay-2">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #F45B5B, #FF6B00)' }}>
                <svg className="w-8 h-8" fill="none" stroke="#FEF8F0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="feature-title">Our Vision</h3>
              <p className="feature-text">To be Nigeria's benchmark for holistic education — where academic excellence meets cultural pride, and every graduate carries the Hillcrest spirit of leadership, compassion, and innovation into the world.</p>
            </article>
            <article className="feature-card animate-fade-in-up delay-3">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #0077FF, #00B4FF)' }}>
                <svg className="w-8 h-8" fill="none" stroke="#FEF8F0" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="feature-title">Our Values</h3>
              <ul className="feature-text space-y-2" style={{ listStyle: 'none', padding: 0 }}>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: '#F45B5B' }} /> Excellence in all endeavors</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: '#F45B5B' }} /> Integrity as our foundation</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: '#F45B5B' }} /> Inclusivity in every classroom</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: '#F45B5B' }} /> Heritage as our compass</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="section bg-gray-50" aria-labelledby="timeline-title">
        <div className="container">
          <header className="section-header animate-fade-in-up">
            <span className="section-tag">Heritage</span>
            <h2 id="timeline-title" className="section-title font-display">Our Journey Through Time</h2>
          </header>
          <Timeline />
        </div>
      </section>

      {/* Campus Visualization */}
      <section id="campus-visual" className="section" aria-labelledby="campus-title">
        <div className="container">
          <header className="section-header animate-fade-in-up">
            <span className="section-tag">Campus</span>
            <h2 id="campus-title" className="section-title font-display">Elevated Learning Environment</h2>
          </header>
          <div className="max-w-6xl mx-auto animate-fade-in-up delay-1">
            <HillVisual />
          </div>
        </div>
      </section>

      {/* Leadership Placeholder */}
      <section id="leadership" className="section bg-gray-50" aria-labelledby="leadership-title">
        <div className="container">
          <header className="section-header animate-fade-in-up">
            <span className="section-tag">Leadership</span>
            <h2 id="leadership-title" className="section-title font-display">Guiding the Next Generation</h2>
          </header>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Principal', name: 'Dr. (Mrs.) E. A. Bassey', desc: '30+ years educational leadership' },
              { title: 'Vice Principal (Academic)', name: 'Mr. O. Ekpo', desc: 'Curriculum & assessment excellence' },
              { title: 'Vice Principal (Admin)', name: 'Mrs. I. Ogar', desc: 'Operations & student welfare' },
              { title: 'Head of Junior School', name: 'Mrs. A. Edet', desc: 'Early years & foundation specialist' },
            ].map((leader, i) => (
              <article key={leader.title} className="bg-white rounded-xl p-6 border border-gray-200 text-center animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-2xl" style={{ background: 'linear-gradient(135deg, #0A3D3C, #145452)' }}>
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{leader.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-2">{leader.title}</p>
                <p className="text-gray-600 text-sm">{leader.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" aria-labelledby="cta-title">
        <div className="container text-center">
          <h2 id="cta-title" className="section-title font-display animate-fade-in-up">Ready to Be Part of Our Story?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 mb-10 animate-fade-in-up delay-1">
            Join a community that has shaped leaders for four decades. Your child's journey starts here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-2">
            <Link href="/admissions" className="btn btn-primary text-lg px-10 py-4">Start Application</Link>
            <Link href="/contact" className="btn btn-ghost text-lg px-10 py-4">Schedule a Visit</Link>
          </div>
        </div>
      </section>
    </main>
  )
}