/**
 * Common utilities for Hillcrest College project
 */

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function calculateAge(birthDate: string): number {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  
  return age
}

export function getGradeLevel(studentId: string): string {
  // Map student ID patterns to grades
  const gradeMap: Record<string, string> = {
    'JS1': 'Junior Secondary 1',
    'JS2': 'Junior Secondary 2',
    'JS3': 'Junior Secondary 3',
    'SS1': 'Senior Secondary 1',
    'SS2': 'Senior Secondary 2',
    'SS3': 'Senior Secondary 3'
  }
  
  return gradeMap[studentId] || studentId
}

export function isValidWhatsAppNumber(phone: string): boolean {
  // Nigerian WhatsApp validation
  const whatsappRegex = /^\+234(80|81|82|83|84|85|86|87|88|89)\d{7}$/
  return whatsappRegex.test(phone)
}

export function getDayName(date: Date): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[date.getDay()]
}