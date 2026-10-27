import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-[var(--background-soft)] p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-[var(--navy-deep)]">Teacher Dashboard</h1>
            <p className="text-[var(--text-light)]">Welcome, Teacher!</p>
          </div>
          <Link href="/" className="btn-teal text-sm">Back to Home</Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Total Students</p>
            <h3 className="text-3xl font-bold text-[var(--teal-primary)]">45</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Classes Today</p>
            <h3 className="text-3xl font-bold text-[var(--navy-deep)]">3</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Average Rating</p>
            <h3 className="text-3xl font-bold text-[var(--gold-accent)]">4.8 ⭐</h3>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[var(--navy-deep)] mb-4">Today's Schedule</h2>
          <div className="p-4 bg-gray-50 rounded-lg flex justify-between items-center mb-3">
            <div>
              <p className="font-semibold text-[var(--navy-deep)]">Grade 10 Maths - 4:00 PM</p>
              <p className="text-sm text-gray-500">30 Students Expected</p>
            </div>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold">Start Class</button>
          </div>
        </div>

      </div>
    </div>
  );
}