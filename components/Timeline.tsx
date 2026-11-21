'use client'

const timelineEvents = [
  { year: 1983, title: "School's Origin", description: "Hillcrest Junior Special Needs School begins from a family home named after a tragic loss. Opened to public for mothers with special needs children." },
  { year: 1998, title: "Secondary Arm Born", description: "October 1998 - The secondary school arm launched, expanding from special needs focus to full academic spectrum." },
  { year: 2013, title: "Hillcrest College Established", description: "Renamed Hillcrest College Calabar at permanent hilltop location - majestically positioned for learning." },
  { year: 2024, title: "STEM Partnership", description: "Collaboration with Imperial College London - 35 attendees at girls-focused coding and renewable energy event." }
]

export function Timeline() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="relative py-12">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d4af37]/50 -translate-x-1/2" />
        
        {timelineEvents.map((event, index) => (
          <div key={event.year} className="relative mb-16">
            {/* Event Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10" />
            
            {/* Event Content */}
            <div className="ml-8 md:ml-0 md:flex md:items-center">
              <div className="bg-white rounded-xl p-6 shadow-lg max-w-xl">
                <h3 className="text-2xl font-serif text-primary-700 mb-2 hover:scale-105 transition-transform">
                  {event.year} — {event.title}
                </h3>
                <p className="text-primary-600">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}