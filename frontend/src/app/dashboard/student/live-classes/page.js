"use client";

import Link from "next/link";

const liveClasses = [
  { id: 1, subject: "O/L Mathematics", teacher: "Mr. Kamal Perera", time: "Today, 4:00 PM - 6:00 PM", status: "Live Now", zoomLink: "#", color: "bg-red-500" },
  { id: 2, subject: "A/L Physics", teacher: "Ms. Nimali Silva", time: "Today, 7:00 PM - 9:00 PM", status: "Upcoming", zoomLink: "#", color: "bg-[#d97706]" },
  { id: 3, subject: "Spoken English", teacher: "Ms. Sarah", time: "Tomorrow, 5:00 PM - 6:30 PM", status: "Upcoming", zoomLink: "#", color: "bg-[#0f766e]" },
];

export default function LiveClasses() {
  return (
    <div className="min-h-screen bg-[#f4f7f6] flex">
      <aside className="w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen hidden md:flex flex-col shadow-2xl z-10">
        <div className="p-6 text-2xl font-bold border-b border-gray-700/50 flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-tr from-[#0f766e] to-[#14b8a6] rounded-xl flex items-center justify-center text-white text-lg shadow-lg">h</div>
          <span className="tracking-tight">hometuition<span className="text-[#14b8a6]">.lk</span></span>
        </div>
        <nav className="flex-1 p-4 space-y-2 text-sm font-medium mt-4">
          <Link href="/dashboard/student" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition"><span className="text-lg">📊</span> Dashboard</Link>
          <Link href="/dashboard/student/courses" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition"><span className="text-lg">📚</span> My Courses</Link>
          <Link href="/dashboard/student/lms" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition"><span className="text-lg">📂</span> LMS & Papers</Link>
          <Link href="/dashboard/student/live-classes" className="flex items-center gap-3 px-4 py-3 bg-[#0f766e] rounded-xl font-semibold shadow-lg text-white"><span className="text-lg">🎥</span> Live Classes</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0f172a]">Live Classes 🎥</h1>
            <p className="text-sm text-[var(--text-light)] mt-1">Join your scheduled Zoom classes here.</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-[#d97706] p-4 mb-8 rounded-r-xl shadow-sm flex items-start gap-4">
          <div className="text-2xl">🔔</div>
          <div>
            <h3 className="font-bold text-[#0f172a]">Reminder: Upcoming Class</h3>
            <p className="text-sm text-gray-600 mt-1">Your <strong>O/L Mathematics</strong> class with Mr. Kamal starts in <strong>15 minutes</strong>. Please be ready.</p>
          </div>
        </div>

        <div className="space-y-4">
          {liveClasses.map((cls) => (
            <div key={cls.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition">
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl shadow-md ${cls.color}`}>🎥</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a]">{cls.subject}</h3>
                  <p className="text-sm text-gray-500 font-medium">👨‍🏫 {cls.teacher}</p>
                  <p className="text-xs text-gray-400 mt-1">⏰ {cls.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${cls.status === "Live Now" ? "bg-red-100 text-red-600 animate-pulse" : "bg-gray-100 text-gray-600"}`}>
                  {cls.status === "Live Now" ? "🔴 Live Now" : "Upcoming"}
                </span>
                <button className={`px-6 py-2.5 rounded-xl text-sm font-bold shadow-md transition ${cls.status === "Live Now" ? "btn-teal" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}>
                  {cls.status === "Live Now" ? "Join Zoom Class" : "Waiting..."}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-2">Missed a class?</p>
          <Link href="/dashboard/student/lms" className="text-[#0f766e] font-bold hover:underline">Watch Recorded Videos in LMS →</Link>
        </div>
      </main>
    </div>
  );
}