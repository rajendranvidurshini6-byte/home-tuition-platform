import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-[var(--background-soft)] flex">
      
      {/* 1. Left Sidebar (Teacher Menu) */}
      <aside className="w-64 bg-[var(--navy-deep)] text-white min-h-screen hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700 flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--gold-accent)] rounded flex items-center justify-center text-white text-lg">h</div>
          hometuition<span className="text-[var(--gold-accent)]">.lk</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 text-sm">
          <Link href="/dashboard/teacher" className="block px-4 py-3 bg-[var(--teal-primary)] rounded-lg font-semibold">
            Dashboard
          </Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">My Classes</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Upload Resources (LMS)</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Mark Attendance</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Create Exam</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Student Progress</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Earnings</Link>
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 p-6 md:p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[var(--navy-deep)]">Welcome, Mr. Kamal! 👨‍🏫</h1>
            <p className="text-sm text-[var(--text-light)]">Here is your teaching overview for today.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[var(--navy-deep)]">Mr. Kamal Perera</span>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center text-xl">👨‍🎓</div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Total Students</p>
              <h3 className="text-2xl font-bold text-[var(--navy-deep)]">45</h3>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-lg flex items-center justify-center text-xl">💻</div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Classes Today</p>
              <h3 className="text-2xl font-bold text-[var(--navy-deep)]">3</h3>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center text-xl">⭐</div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Average Rating</p>
              <h3 className="text-2xl font-bold text-[var(--navy-deep)]">4.8</h3>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center text-xl">💰</div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Monthly Earnings</p>
              <h3 className="text-2xl font-bold text-[var(--navy-deep)]">LKR 45k</h3>
            </div>
          </div>
        </div>

        {/* Middle Section: Schedule & Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Today's Schedule */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[var(--navy-deep)]">Today's Class Schedule</h2>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div>
                  <h3 className="font-bold text-[var(--navy-deep)]">Grade 10 Mathematics</h3>
                  <p className="text-xs text-gray-500">04:00 PM - 06:00 PM | 30 Students Expected</p>
                </div>
                <button className="btn-teal text-sm py-2 px-4 shadow-sm">Start Zoom Class</button>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div>
                  <h3 className="font-bold text-[var(--navy-deep)]">O/L Revision Class</h3>
                  <p className="text-xs text-gray-500">07:00 PM - 09:00 PM | 45 Students Expected</p>
                </div>
                <button className="bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-lg text-sm">Starts Later</button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-[var(--navy-deep)] mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition flex justify-between items-center">
                Upload Notes / Past Papers <span>→</span>
              </button>
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition flex justify-between items-center">
                Mark Today's Attendance <span>→</span>
              </button>
              <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition flex justify-between items-center">
                Send Message to Parents <span>→</span>
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}