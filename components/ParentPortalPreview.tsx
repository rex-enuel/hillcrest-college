'use client'

import { GraduationCap, Calendar, FileText, MessageCircle } from 'lucide-react'

const portalFeatures = [
  { icon: GraduationCap, title: 'Student Results', description: 'Real-time grade updates and progress tracking' },
  { icon: Calendar, title: 'Daily Schedule', description: 'Never miss an event or deadline' },
  { icon: FileText, title: 'Attendance', description: 'Weekly attendance reports and notifications' },
  { icon: MessageCircle, title: 'Direct Messaging', description: 'Secure communication with teachers and administration' },
]

export function ParentPortalPreview() {
  return (
    <div className="max-w-4xl mx-auto">
      <div 
        className="bg-gradient-to-br from-[#fef8f0] to-[#e8f4f8] rounded-3xl p-8 shadow-2xl"
        style={{ animation: 'fadeIn 0.6s ease-out forwards' }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          {portalFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-lg"
              style={{ 
                animation: `fadeIn 0.6s ease-out forwards`,
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4a9da8] rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-serif text-primary-700 mb-2">{feature.title}</h3>
              <p className="text-primary-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-12 text-center p-6 bg-white rounded-xl shadow-lg"
          style={{ 
            animation: 'fadeIn 0.6s ease-out forwards',
            animationDelay: '0.6s',
            animationFillMode: 'both'
          }}
        >
          <p className="text-lg font-medium text-primary-800 mb-2">
            📱 Available on WhatsApp & Web
          </p>
          <p className="text-primary-600">
            Parents receive instant notifications for results, schedules, and important announcements
          </p>
        </div>
      </div>
    </div>
  )
}
