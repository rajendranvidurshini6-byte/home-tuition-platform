import Link from "next/link";

const myCourses = [
  { id: 1, name: "O/L Mathematics", teacher: "Mr. Kamal Perera", feeStatus: "Paid", nextClass: "Today, 4:00 PM", progress: 85, color: "bg-blue-500", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop" },
  { id: 2, name: "A/L Physics", teacher: "Ms. Nimali Silva", feeStatus: "Pending", nextClass: "Tomorrow, 2:00 PM", progress: 60, color: "bg-purple-500", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop" },
  { id: 3, name: "Spoken English", teacher: "Ms. Sarah", feeStatus: "Paid", nextClass: "Friday, 5:00 PM", progress: 95, color: "bg-teal-500", image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=500&auto=format&fit=crop" },
];

export default function MyCourses() {
  return (
    <div className="min-h-screen bg-[#f4f7f6] flex">
      <aside className="w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen hidden md:flex flex-col shadow-2xl z-10">
        <div className="p-6 text-2xl font-bold border-b border-gray-700/50 flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-tr from-[#0f766e] to-[#14b8a6] rounded-xl flex items-center justify-center text-white text-lg shadow-lg">h</div>
          <span className="tracking-tight">hometuition<span className="text-[#14b8a6]">.lk</span></span>
        </div>
        <nav className="flex-1 p-4 space-y-2 text-sm font-medium mt-4">
          <Link href="/dashboard/student" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition"><span className="text-lg">📊</span> Dashboard</Link>
          <Link href="/dashboard/student/courses" className="flex items-center gap-3 px-4 py-3 bg-[#0f766e] rounded-xl font-semibold shadow-lg text-white"><span className="text-lg">📚</span> My Courses</Link>
          <Link href="/dashboard/student/lms" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition"><span className="text-lg">📂</span> LMS & Papers</Link>
          <Link href="/dashboard/student/live-classes" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition"><span className="text-lg">🎥</span> Live Classes</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0f172a]">My Enrolled Courses</h1>
            <p className="text-sm text-[var(--text-light)] mt-1">Manage your classes and payments here.</p>
          </div>
          <Link href="/courses" className="btn-teal text-sm px-5 py-2">+ Explore New Courses</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {myCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
              <div className="h-32 relative">
                <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{course.name}</h3>
                  <p className="text-xs opacity-90">👨‍🏫 {course.teacher}</p>
                </div>
                <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full shadow-sm ${course.feeStatus === "Paid" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                  {course.feeStatus === "Paid" ? "✅ Fee Paid" : "⚠️ Fee Pending"}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-gray-500">Course Progress</span>
                    <span className="text-[#0f766e]">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full ${course.color}`} style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold mb-1">Next Live Class</p>
                    <p className="text-sm font-bold text-[#0f172a]">{course.nextClass}</p>
                  </div>
                  {course.feeStatus === "Paid" ? (
                    <Link href="/dashboard/student/live-classes" className="bg-[#0f172a] text-white text-sm font-bold py-2 px-6 rounded-lg hover:bg-black transition shadow-md">Join Zoom</Link>
                  ) : (
                    <button className="bg-[#d97706] text-white text-sm font-bold py-2 px-6 rounded-lg hover:bg-[#b45309] transition shadow-md animate-pulse">Pay Fee Now</button>
                  )}
                </div>
                <div className="flex gap-4 mt-6 text-sm font-semibold text-[var(--teal-primary)]">
                  <Link href="/dashboard/student/lms" className="hover:underline">📂 View Notes & Papers</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}