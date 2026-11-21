'use client'

const dailySchedule = [
  { day: 'Monday', time: '9:50 AM', activity: "Line Head's/House Assembly" },
  { day: 'Tuesday', time: '9:50 AM', activity: "Chapel Service" },
  { day: 'Wednesday', time: '9:50 AM', activity: "Tutor Period / Hymn Singing" },
  { day: 'Thursday', time: '9:50 AM', activity: "Principal's Assembly" },
  { day: 'Friday', time: '9:50 AM', activity: "Tutor Period (Life Skills)" },
]

export function DailySchedule() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-primary-50">
              <th className="px-6 py-4 text-left font-serif text-primary-700">Day</th>
              <th className="px-6 py-4 text-left font-serif text-primary-700 hidden md:table-cell">Time</th>
              <th className="px-6 py-4 text-left font-serif text-primary-700">Activity</th>
            </tr>
          </thead>
          <tbody>
            {dailySchedule.map((item, index) => (
              <tr
                key={item.day}
                className="border-t border-primary-100 hover:bg-primary-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-primary-800">{item.day}</td>
                <td className="px-6 py-4 hidden md:table-cell text-primary-600">{item.time}</td>
                <td className="px-6 py-4">{item.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-center text-primary-600 text-sm">
        <p>Students gather at 9:50 AM sharp for the day's first activity</p>
      </div>
    </div>
  )
}