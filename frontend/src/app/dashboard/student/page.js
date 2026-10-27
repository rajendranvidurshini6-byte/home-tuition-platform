import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[var(--background-soft)] flex">
      
      {/* 1. Left Sidebar */}
      <aside className="w-64 bg-[var(--navy-deep)] text-white min-h-screen hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700 flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--teal-primary)] rounded flex items-center justify-center text-white text-lg">h</div>
          hometuition<span className="text-[var(--teal-primary)]">.lk</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 text-sm">
          <Link href="/dashboard/student" className="block px-4 py-3 bg-[var(--teal-primary)] rounded-lg font-semibold">
            Dashboard
          </Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">My Courses</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Live Classes</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Assignments</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Exams & Papers</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Progress & Results</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Schedule</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Messages</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Settings</Link>
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 p-6 md:p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[var(--navy-deep)]">Good Morning, Nimesha! 👋</h1>
            <p className="text-sm text-[var(--text-light)]">Keep going! You're making great progress.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[var(--navy-deep)]">Nimesha Perera</span>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div> {/* Profile Pic Placeholder */}
          </div>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center text-xl">📚</div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Enrolled Courses</p>
              <h3 className="text-2xl font-bold text-[var(--navy-deep)]">6</h3>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-lg flex items-center justify-center text-xl">✅</div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Completed Lessons</p>
              <h3 className="text-2xl font-bold text-[var(--navy-deep)]">28</h3>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center text-xl">📈</div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Average Score</p>
              <h3 className="text-2xl font-bold text-[var(--navy-deep)]">78%</h3>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center text-xl">📅</div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Attendance</p>
              <h3 className="text-2xl font-bold text-[var(--navy-deep)]">92%</h3>
            </div>
          </div>
        </div>

        {/* Middle Section: Live Classes & Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Today's Live Classes (Left Side) */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-[var(--navy-deep)]">Today's Live Classes</h2>
              <Link href="#" className="text-sm text-[var(--teal-primary)] font-semibold hover:underline">View All →</Link>
            </div>
            
            <div className="space-y-3">
              {/* Class 1 */}
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div>
                  <h3 className="font-bold text-[var(--navy-deep)]">Mathematics (O/L)</h3>
                  <p className="text-xs text-gray-500">08:00 AM - 10:00 AM | Teacher: Mr. Kamal</p>
                </div>
                <button className="btn-teal text-sm py-2 px-4 shadow-sm">Join Class</button>
              </div>
              
              {/* Class 2 */}
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div>
                  <h3 className="font-bold text-[var(--navy-deep)]">Physics (A/L)</h3>
                  <p className="text-xs text-gray-500">02:00 PM - 04:00 PM | Teacher: Ms. Nimali</p>
                </div>
                <button className="bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-lg cursor-not-allowed text-sm">Upcoming</button>
              </div>

              {/* Class 3 */}
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div>
                  <h3 className="font-bold text-[var(--navy-deep)]">English (O/L)</h3>
                  <p className="text-xs text-gray-500">05:00 PM - 07:00 PM | Teacher: Ms. Dilani</p>
                </div>
                <button className="bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-lg cursor-not-allowed text-sm">Upcoming</button>
              </div>
            </div>
          </div>

          {/* Your Progress (Right Side) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-[var(--navy-deep)]">Your Progress</h2>
            </div>
            
            {/* Circular Progress (Demo) */}
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-24 h-24 rounded-full border-4 border-[var(--teal-primary)] flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-[var(--navy-deep)]">78%</span>
              </div>
              <p className="text-sm text-gray-500">Overall Progress</p>
            </div>

            {/* Subject Progress Bars */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-600">Mathematics</span>
                  <span className="text-[var(--navy-deep)]">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[var(--teal-primary)] h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-600">Physics</span>
                  <span className="text-[var(--navy-deep)]">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[var(--gold-accent)] h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-600">English</span>
                  <span className="text-[var(--navy-deep)]">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}