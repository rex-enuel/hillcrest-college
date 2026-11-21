'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (data: FormData) => {
    const newErrors: Record<string, string> = {}
    if (!data.get('name')?.toString().trim()) newErrors.name = 'Name is required'
    if (!data.get('email')?.toString().trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get('email')?.toString() || '')) newErrors.email = 'Invalid email format'
    if (!data.get('phone')?.toString().trim()) newErrors.phone = 'Phone number is required'
    if (!data.get('subject')) newErrors.subject = 'Please select a subject'
    if (!data.get('message')?.toString().trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newErrors = validateForm(formData)

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setFormState('submitting')

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Simulate success (90% success rate)
    if (Math.random() > 0.1) {
      setFormState('success')
      e.currentTarget.reset()
    } else {
      setFormState('error')
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="contact-hero" className="relative min-h-[40vh] flex items-center justify-center overflow-hidden" aria-labelledby="contact-hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary z-0" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/campus-hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 container px-4 py-20 text-center">
          <span className="section-tag" style={{ color: '#F45B5B' }}>Get in Touch</span>
          <h1 id="contact-hero-title" className="font-display hero-title animate-fade-in-up mt-4" style={{ color: '#FEF8F0' }}>
            We'd Love to Hear From You
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-1 max-w-2xl mx-auto" style={{ color: 'rgba(254, 248, 240, 0.9)' }}>
            Whether you're a prospective parent, alumnus, or community member — our doors are always open.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section id="contact-info" className="section -mt-16 pb-0" aria-labelledby="contact-info-title">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '📍', title: 'Visit Our Campus', lines: ['Hillcrest College Calabar', '1 Hillcrest Drive, Calabar', 'Cross River State, Nigeria'], color: '#0A3D3C', bg: '#E8F4F3' },
              { icon: '📞', title: 'Call Us', lines: ['Admissions: +234 800 000 0000', 'General: +234 800 000 0001', 'Mon–Fri: 8:00 AM – 4:00 PM'], color: '#145452', bg: '#E8F4F3' },
              { icon: '✉️', title: 'Email Us', lines: ['Admissions: admissions@hillcrestcollege.edu.ng', 'General: info@hillcrestcollege.edu.ng', 'Principal: principal@hillcrestcollege.edu.ng'], color: '#F45B5B', bg: '#FFF0F0' },
              { icon: '🕐', title: 'Office Hours', lines: ['Monday–Friday: 8:00 AM – 4:00 PM', 'Saturday: 9:00 AM – 1:00 PM', 'Sunday & Holidays: Closed'], color: '#0077FF', bg: '#E8F4FF' },
            ].map((card, i) => (
              <article key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: card.bg }}>{card.icon}</div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: card.color }}>{card.title}</h3>
                <address className="not-italic text-gray-600 space-y-1 text-sm leading-relaxed">
                  {card.lines.map((line, j) => <p key={j}>{line}</p>)}
                </address>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form */}
      <section id="contact-form-section" className="section pt-0" aria-labelledby="contact-form-title">
        <div className="container">
          <header className="section-header animate-fade-in-up">
            <span className="section-tag">Send a Message</span>
            <h2 id="contact-form-title" className="section-title font-display">Contact Form</h2>
          </header>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-1 animate-fade-in-up">
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-full min-h-[400px] relative">
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E8F4F3 0%, #E8F4FF 100%)' }}>
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="#0A3D3C" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Campus Location</h3>
                    <p className="text-gray-600 text-sm mb-4">Hillcrest College Calabar<br/>1 Hillcrest Drive, Calabar<br/>Cross River State, Nigeria</p>
                    <div className="space-y-2">
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium" style={{ background: '#0A3D3C', color: '#FEF8F0' }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                        Open in Google Maps
                      </a>
                      <p className="text-xs text-gray-500">Click for directions to our hilltop campus</p>
                    </div>
                  </div>
                </div>
                {/* Decorative map elements */}
                <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to top, #0A3D3C, transparent)' }} />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up delay-1">
              {formState === 'success' ? (
                <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center animate-scale-in">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0A3D3C, #145452)' }}>
                    <svg className="w-10 h-10" fill="none" stroke="#A8C9C8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">Thank you for reaching out. Our admissions team will respond within 2 business days.</p>
                  <button onClick={() => setFormState('idle')} className="btn btn-primary">Send Another Message</button>
                </div>
              ) : formState === 'error' ? (
                <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center animate-scale-in">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F45B5B, #FF6B00)' }}>
                    <svg className="w-10 h-10" fill="none" stroke="#FEF8F0" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Something Went Wrong</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">Please try again or contact us directly at admissions@hillcrestcollege.edu.ng</p>
                  <button onClick={() => setFormState('idle')} className="btn btn-primary">Try Again</button>
                </div>
              ) : (
                <form className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm" onSubmit={handleSubmit} aria-label="Contact form" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">Full Name <span className="text-accent" aria-hidden="true">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className="form-input"
                        placeholder="John Doe"
                      />
                      {errors.name && <p id="name-error" className="mt-1 text-sm" style={{ color: '#F45B5B' }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">Email Address <span className="text-accent" aria-hidden="true">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className="form-input"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p id="email-error" className="mt-1 text-sm" style={{ color: '#F45B5B' }}>{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number <span className="text-accent" aria-hidden="true">*</span></label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className="form-input"
                        placeholder="+234 800 000 0000"
                      />
                      {errors.phone && <p id="phone-error" className="mt-1 text-sm" style={{ color: '#F45B5B' }}>{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="subject" className="form-label">Subject <span className="text-accent" aria-hidden="true">*</span></label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        className="form-input"
                      >
                        <option value="">Select a topic</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="academic">Academic Information</option>
                        <option value="boarding">Boarding & Facilities</option>
                        <option value="alumni">Alumni Relations</option>
                        <option value="partnerships">Partnerships & Collaborations</option>
                        <option value="media">Media & Press</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && <p id="subject-error" className="mt-1 text-sm" style={{ color: '#F45B5B' }}>{errors.subject}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="form-label">Message <span className="text-accent" aria-hidden="true">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        rows={5}
                        className="form-textarea"
                        placeholder="How can we help you? Please provide details..."
                      />
                      {errors.message && <p id="message-error" className="mt-1 text-sm" style={{ color: '#F45B5B' }}>{errors.message}</p>}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button type="submit" disabled={formState === 'submitting'} className="btn btn-primary text-lg px-10 py-3">
                      {formState === 'submitting' ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    <button type="reset" className="btn btn-ghost text-lg px-8 py-3" disabled={formState === 'submitting'}>Clear Form</button>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-6">By submitting, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a> and <a href="#" className="underline hover:text-primary">Terms of Service</a>.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media / Additional Links */}
      <section className="section bg-gray-50" aria-labelledby="connect-title">
        <div className="container">
          <header className="section-header animate-fade-in-up text-center">
            <span className="section-tag">Connect</span>
            <h2 id="connect-title" className="section-title font-display">Stay Connected</h2>
          </header>
          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Facebook', icon: '📘', color: '#1877F2' },
                { label: 'Twitter', icon: '🐦', color: '#1DA1F2' },
                { label: 'Instagram', icon: '📷', color: '#E4405F' },
                { label: 'LinkedIn', icon: '💼', color: '#0A66C2' },
              ].map((social, i) => (
                <a key={i} href="#" className="flex items-center justify-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="text-2xl">{social.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900">{social.label}</p>
                    <p className="text-xs text-gray-500">Follow us for updates</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-2xl text-center animate-fade-in-up delay-1" style={{ background: 'linear-gradient(135deg, #E8F4F3, #E8F4FF)' }}>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">Get the latest news, events, and admissions updates delivered to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#" method="POST">
                <input type="email" placeholder="your@email.com" required className="form-input flex-1" aria-label="Email address for newsletter" />
                <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}