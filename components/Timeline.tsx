'use client'

import { motion } from 'framer-motion'
import { TimelineConnector } from './TimelineConnector'

const timelineEvents = [
  { year: 1983, title: "School's Origin", description: "Hillcrest Junior Special Needs School begins from a family home named after a tragic loss. Opened to public for mothers with special needs children." },
  { year: 1998, title: "Secondary Arm Born", description: "October 1998 - The secondary school arm launched, expanding from special needs focus to full academic spectrum." },
  { year: 2013, title: "Hillcrest College Established", description: "Renamed Hillcrest College Calabar at permanent hilltop location - majestically positioned for learning." },
  { year: 2024, title: "STEM Partnership", description: "Collaboration with Imperial College London - 35 attendees at girls-focused coding and renewable energy event." }
]

export function Timeline() {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Animated Timeline Connector */}
      <div className="relative" style={{ minHeight: '520px' }}>
        <TimelineConnector
          nodeCount={timelineEvents.length}
          variant="snake"
          className="absolute inset-0 z-0"
        />

        {/* Timeline Events */}
        <div className="relative z-10">
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              total={timelineEvents.length}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TimelineEvent({ event, index, total }: {
  event: typeof timelineEvents[0]
  index: number
  total: number
}) {
  const isLast = index === total - 1
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false

  return (
    <motion.div
      className="relative mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.8 + index * 0.15
      }}
    >
      {/* Event Dot - positioned to align with connector path */}
      <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-xl z-20 transition-all duration-300 hover:scale-125">
        <motion.div
          className="absolute inset-0 rounded-full bg-primary-600/30"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.3
          }}
        />
      </div>

      {/* Year marker on mobile */}
      {isMobile && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-24 text-center text-xs font-medium text-primary-600">
          {event.year}
        </div>
      )}

      {/* Event Content - alternating sides on desktop, stacked on mobile */}
      <div className="md:flex md:items-start">
        <div
          className={`w-full md:w-1/2 px-4 ${
            index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
          }`}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg max-w-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 1 + index * 0.15
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                {event.year}
              </span>
              <div className="w-8 h-px bg-gradient-to-r from-primary-400 to-accent" />
            </div>
            <h3 className="text-xl font-serif text-primary-700 mb-2">
              {event.title}
            </h3>
            <p className="text-primary-600 leading-relaxed">
              {event.description}
            </p>
          </motion.div>
        </div>

        {/* Spacer for center alignment on mobile */}
        <div className="md:w-1/2 md:hidden" style={{ minHeight: isLast ? 0 : '80px' }} />
      </div>
    </motion.div>
  )
}