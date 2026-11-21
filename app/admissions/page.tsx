import Link from 'next/link'
import { CTAButton } from '@/components/CTAButton'

const admissionSteps = [
  { number: 1, title: 'Inquiry', description: 'Submit an inquiry form or contact our admissions office to express interest and receive our prospectus.' },
  { number: 2, title: 'Campus Tour', description: 'Schedule a visit to experience our hilltop campus, meet faculty, and see our facilities firsthand.' },
  { number: 3, title: 'Application', description: 'Complete the online application with required documents: birth certificate, academic records, and references.' },
  { number: 4, title: 'Assessment', description: 'Age-appropriate entrance assessment to understand your child\'s academic level and learning style.' },
  { number: 5, title: 'Enrollment', description: 'Receive offer letter, complete enrollment formalities, and join the Hillcrest family for orientation.' },
]

const requirements = [
  { category: 'All Applicants', items: ['Completed application form', 'Birth certificate', 'Passport photographs (4)', 'Immunization records', 'Previous school reports (if applicable)'] },
  { category: 'Transfer Students', items: ['Transfer certificate', 'Character reference from previous school', 'Academic transcripts (last 2 years)', 'Disciplinary clearance'] },
  { category: 'Boarding Applicants', items: ['Medical fitness certificate', 'Boarding house preference form', 'Guardian consent (if parents abroad)', 'Personal effects list'] },
]

const faqs = [
  { q: 'What age does my child need to be for admission?', a: 'Nursery: 3 years by September. Primary: 5 years by September. Secondary: 10+ years with passing entrance exam.' },
  { q: 'Is there a boarding facility?', a: 'Yes, we offer full boarding for secondary students with modern dormitories, house parents, and 24/7 supervision.' },
  { q: 'What curriculum do you follow?', a: 'We follow the Nigerian curriculum enriched with British elements, preparing students for WAEC, NECO, and Cambridge IGCSE.' },
  { q: 'Are there scholarship opportunities?', a: 'Merit-based scholarships are available for outstanding academic performance and exceptional talent in sports/arts.' },
  { q: 'How do I schedule a campus tour?', a: 'Use the contact form below or call our admissions office at +234 800 000 0000 to book a personalized tour.' },
  { q: 'What is the student-teacher ratio?', a: 'We maintain a 15:1 ratio in primary and 20:1 in secondary to ensure personalized attention for every child.' },
]

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="admissions-hero" className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" aria-labelledby="admissions-hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary z-0" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/campus-hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 container px-4 py-20 text-center">
          <span className="section-tag" style={{ color: '#F45B5B' }}>Admissions Open</span>
          <h1 id="admissions-hero-title" className="font-display hero-title animate-fade-in-up mt-4" style={{ color: '#FEF8F0' }}>
            Join the Hillcrest Family
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-1 max-w-3xl mx-auto" style={{ color: 'rgba(254, 248, 240, 0.9)' }}>
            Applications for the 2025/2026 academic year are now open. Give your child the foundation they deserve at Calabar\'s premier educational institution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10 animate-fade-in-up delay-2">
            <CTAButton href="#apply" variant="primary">Start Application</CTAButton>
            <Link href="/contact" className="btn btn-ghost text-lg px-8 py-3" style={{ borderColor: '#FEF8F0', color: '#FEF8F0' }}>
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section id="process" className="section" aria-labelledby="process-title">
        <div className="container">
          <header className="section-header animate-fade-in-up">
            <span className="section-tag">Process</span>
            <h2 id="process-title" className="section-title font-display">Your Path to Hillcrest</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">A transparent, supportive journey from inquiry to enrollment</p>
          </header>
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, #A8C9C8, #F45B5B)' }} />

            {admissionSteps.map((step, index) => (
              <div key={step.number} className="relative mb-10 md:mb-0">
                <div className="md:flex md:items-center md:w-1/2" style={{
                  justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                  paddingRight: index % 2 === 0 ? 'calc(50% + 28px)' : 0,
                  paddingLeft: index % 2 === 1 ? 'calc(50% + 28px)' : 0,
                }}>
                  <div className="relative z-10 w-full max-w-xs animate-fade-in-up" style={{
                    animationDelay: `${index * 100}ms`,
                    textAlign: index % 2 === 0 ? 'right' : 'left',
                  }}>
                    <div className="relative flex items-center justify-between mb-3">
                      {index % 2 === 0 ? (
                        <>
                          <div className="flex-1 pr-3 text-right">
                            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                            <p className="text-gray-600 mt-0.5 text-sm leading-snug max-w-xs">{step.description}</p>
                          </div>
                          <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full flex-col" style={{ background: 'linear-gradient(135deg, #0A3D3C, #145452)' }}>
                            <span className="text-xl font-bold text-white">{step.number}</span>
                            <span className="text-xs text-primary-lighter uppercase tracking-wider">STEP</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full flex-col" style={{ background: 'linear-gradient(135deg, #0A3D3C, #145452)' }}>
                            <span className="text-xl font-bold text-white">{step.number}</span>
                            <span className="text-xs text-primary-lighter uppercase tracking-wider">STEP</span>
                          </div>
                          <div className="flex-1 pl-3">
                            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                            <p className="text-gray-600 mt-0.5 text-sm leading-snug max-w-xs">{step.description}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="section bg-gray-50" aria-labelledby="requirements-title">
        <div className="container">
          <header className="section-header animate-fade-in-up">
            <span className="section-tag">Requirements</span>
            <h2 id="requirements-title" className="section-title font-display">What You'll Need</h2>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, i) => (
              <div key={req.category} className="bg-white rounded-xl p-6 border border-gray-200 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #0A3D3C, #145452)' }}>
                    {i + 1}
                  </span>
                  {req.category}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#F45B5B" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Card - Inspired by Queens College */}
      <section id="virtual-tour" className="section" aria-labelledby="virtual-tour-title">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A3D3C 0%, #145452 50%, #0077FF 100%)' }}>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/campus-hero.jpg")', backgroundSize: 'cover' }} />
              <div className="relative p-8 md:p-12 md:flex md:items-center md:justify-between">
                <div className="max-w-md">
                  <h2 id="virtual-tour-title" className="font-display text-3xl md:text-4xl mb-4" style={{ color: '#FEF8F0' }}>Experience Hillcrest Virtually</h2>
                  <p className="text-lg mb-6" style={{ color: 'rgba(254, 248, 240, 0.8)' }}>Explore our hilltop campus, classrooms, labs, and sports facilities from anywhere in the world.</p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="#" className="btn btn-accent text-lg px-8 py-3">Take Virtual Tour</Link>
                    <Link href="/contact" className="btn btn-ghost text-lg px-8 py-3" style={{ borderColor: '#FEF8F0', color: '#FEF8F0' }}>Book In-Person Visit</Link>
                  </div>
                </div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-8 md:mt-0">
                  <div className="absolute inset-0 rounded-full border-4 border-primary-lighter/30 animate-ping" />
                  <div className="relative w-full h-full rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(168, 201, 200, 0.2), rgba(244, 91, 91, 0.1))' }}>
                    <button className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: '#F45B5B', boxShadow: '0 0 40px rgba(244, 91, 91, 0.5)' }}>
                      <svg className="w-8 h-8 ml-1" fill="#FEF8F0" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section bg-gray-50" aria-labelledby="apply-title">
        <div className="container">
          <header className="section-header animate-fade-in-up">
            <span className="section-tag">Apply Now</span>
            <h2 id="apply-title" className="section-title font-display">Start Your Application</h2>
          </header>
          <div className="max-w-3xl mx-auto">
            <form className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm animate-fade-in-up delay-1" action="#apply" method="POST" aria-label="Admissions application form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="childName" className="form-label">Child's Full Name <span className="text-accent" aria-hidden="true">*</span></label>
                  <input type="text" id="childName" name="childName" required aria-required="true" className="form-input" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="form-label">Date of Birth <span className="text-accent" aria-hidden="true">*</span></label>
                  <input type="date" id="dateOfBirth" name="dateOfBirth" required aria-required="true" className="form-input" />
                </div>
                <div>
                  <label htmlFor="gender" className="form-label">Gender <span className="text-accent" aria-hidden="true">*</span></label>
                  <select id="gender" name="gender" required aria-required="true" className="form-input">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="entryLevel" className="form-label">Entry Level <span className="text-accent" aria-hidden="true">*</span></label>
                  <select id="entryLevel" name="entryLevel" required aria-required="true" className="form-input">
                    <option value="">Select entry level</option>
                    <option value="nursery">Nursery (Age 3+)</option>
                    <option value="primary">Primary (Age 5+)</option>
                    <option value="jss1">JSS 1 (Age 10+)</option>
                    <option value="jss2">JSS 2</option>
                    <option value="ss1">SS 1</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="parentName" className="form-label">Parent/Guardian Full Name <span className="text-accent" aria-hidden="true">*</span></label>
                  <input type="text" id="parentName" name="parentName" required aria-required="true" className="form-input" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email Address <span className="text-accent" aria-hidden="true">*</span></label>
                  <input type="email" id="email" name="email" required aria-required="true" className="form-input" placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number <span className="text-accent" aria-hidden="true">*</span></label>
                  <input type="tel" id="phone" name="phone" required aria-required="true" className="form-input" placeholder="+234 800 000 0000" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="form-label">Residential Address</label>
                  <textarea id="address" name="address" rows={3} className="form-textarea" placeholder="123 Street, City, State" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="previousSchool" className="form-label">Previous School (if applicable)</label>
                  <input type="text" id="previousSchool" name="previousSchool" className="form-input" placeholder="School name, location, years attended" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="whyHillcrest" className="form-label">Why Hillcrest College? <span className="text-accent" aria-hidden="true">*</span></label>
                  <textarea id="whyHillcrest" name="whyHillcrest" required aria-required="true" rows={4} className="form-textarea" placeholder="Tell us what draws you to Hillcrest College..." />
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <button type="submit" className="btn btn-primary text-lg px-10 py-4">Submit Application</button>
                <button type="reset" className="btn btn-ghost text-lg px-8 py-4">Clear Form</button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">Our admissions team will contact you within 2 business days to guide you through the next steps.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section" aria-labelledby="faq-title">
        <div className="container">
          <header className="section-header animate-fade-in-up">
            <span className="section-tag">FAQ</span>
            <h2 id="faq-title" className="section-title font-display">Frequently Asked Questions</h2>
          </header>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 pr-8">{faq.q}</h3>
                  <svg className="w-5 h-5 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-labelledby="admissions-cta-title">
        <div className="container text-center">
          <h2 id="admissions-cta-title" className="section-title font-display animate-fade-in-up">Questions? We're Here to Help</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 mb-10 animate-fade-in-up delay-1">
            Our admissions team is ready to answer any questions and guide you through the process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-2">
            <Link href="/contact" className="btn btn-primary text-lg px-10 py-4">Contact Admissions</Link>
            <a href="tel:+2348000000000" className="btn btn-ghost text-lg px-10 py-4">Call: +234 800 000 0000</a>
          </div>
        </div>
      </section>
    </main>
  )
}