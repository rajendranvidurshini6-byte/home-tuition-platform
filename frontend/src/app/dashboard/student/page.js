import Link from "next/link";

const myCourses = [
  { id: 1, name: "O/L Mathematics", teacher: "Mr. Kamal", progress: 85, nextClass: "Today, 4:00 PM", color: "bg-blue-500" },
  { id: 2, name: "A/L Physics", teacher: "Ms. Nimali", progress: 60, nextClass: "Tomorrow, 2:00 PM", color: "bg-purple-500" },
  { id: 3, name: "Spoken English", teacher: "Ms. Sarah", progress: 95, nextClass: "Friday, 5:00 PM", color: "bg-teal-500" },
];

const monthlyMarksheet = [
  { id: 1, subject: "O/L Mathematics", exam: "Model Paper 1", date: "Oct 15, 2026", marks: "85/100", grade: "A" },
  { id: 2, subject: "A/L Physics", exam: "Monthly Test", date: "Oct 12, 2026", marks: "72/100", grade: "B" },
  { id: 3, subject: "Spoken English", exam: "Quiz 1", date: "Oct 10, 2026", marks: "95/100", grade: "A+" },
];

const attendanceData = [
  1, 1, 2, 1, 1, 0, 0, 1, 1, 1, 
  0, 0, 1, 2, 1, 1, 1, 0, 0, 1, 
  1, 1, 1, 3, 1, 0, 0, 1, 1, 1
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#f4f7f6] flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen hidden md:flex flex-col shadow-2xl z-10">
        <div className="p-6 text-2xl font-bold border-b border-gray-700/50 flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-tr from-[#0f766e] to-[#14b8a6] rounded-xl flex items-center justify-center text-white text-lg shadow-lg">h</div>
          <span className="tracking-tight">hometuition<span className="text-[#14b8a6]">.lk</span></span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 text-sm font-medium mt-4">
          <Link href="/dashboard/student" className="flex items-center gap-3 px-4 py-3 bg-[#0f766e] rounded-xl font-semibold shadow-lg text-white">
            <span className="text-lg">📊</span> Dashboard
          </Link>
          <Link href="/dashboard/student/courses" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition">
            <span className="text-lg">📚</span> My Courses
          </Link>
          <Link href="/dashboard/student/lms" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition">
            <span className="text-lg">📂</span> LMS & Papers
          </Link>
          <Link href="/dashboard/student/live-classes" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition">
            <span className="text-lg">🎥</span> Live Classes
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-700/50">
          <Link href="/" className="text-center block text-sm text-gray-400 hover:text-white transition">← Back to Website</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#0f172a]">Good Morning, Nimesha! 👋</h1>
            <p className="text-[#475569] text-sm">Here is your monthly progress report.</p>
          </div>
          <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <span className="text-sm font-bold text-[#0f172a]">Nimesha Perera</span>
            <div className="w-10 h-10 bg-[#0f766e] text-white rounded-full flex items-center justify-center font-bold">N</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 font-bold uppercase mb-1">Enrolled</p>
            <h3 className="text-3xl font-extrabold text-[#0f172a]">3</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 font-bold uppercase mb-1">Avg Score</p>
            <h3 className="text-3xl font-extrabold text-[#0f172a]">84%</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 font-bold uppercase mb-1">Attendance</p>
            <h3 className="text-3xl font-extrabold text-[#0f172a]">92%</h3>
          </div>
          <div className="bg-gradient-to-r from-[#0f766e] to-[#0d9488] p-6 rounded-2xl shadow-lg text-white">
            <p className="text-xs text-teal-100 font-bold uppercase mb-1">Next Class</p>
            <h3 className="text-xl font-extrabold">Today, 4 PM</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h2 className="text-lg font-bold text-[#0f172a]">📝 Monthly Marksheet (October)</h2>
                <button className="text-xs font-bold text-[#0f766e] bg-teal-50 px-3 py-1 rounded-full hover:bg-teal-100">Download PDF</button>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs text-gray-500 uppercase bg-white">
                    <th className="p-4 font-semibold">Subject</th>
                    <th className="p-4 font-semibold">Exam</th>
                    <th className="p-4 font-semibold">Marks</th>
                    <th className="p-4 font-semibold">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {monthlyMarksheet.map((mark) => (
                    <tr key={mark.id} className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-[#0f172a]">{mark.subject}</td>
                      <td className="p-4 text-sm text-gray-500">{mark.exam}</td>
                      <td className="p-4 font-bold text-[#0f766e]">{mark.marks}</td>
                      <td className="p-4"><span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">{mark.grade}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-[#0f172a] mb-4">My Courses</h2>
              <div className="space-y-4">
                {myCourses.map((course) => (
                  <div key={course.id} className="p-4 border border-gray-100 rounded-xl bg-gray-50 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-[#0f172a]">{course.name}</h3>
                      <p className="text-xs text-gray-500">Teacher: {course.teacher}</p>
                    </div>
                    <Link href="/dashboard/student/live-classes" className="btn-teal text-xs py-1.5 px-3">Join Class</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h2 className="text-lg font-bold text-[#0f172a] mb-6">📅 Attendance Calendar</h2>
            <div className="grid grid-cols-7 gap-2 mb-6">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="text-center text-xs font-bold text-gray-400 mb-2">{day}</div>
              ))}
              {attendanceData.map((status, index) => {
                let bgClass = "bg-gray-100 text-gray-400";
                if (status === 1) bgClass = "bg-[#0f766e] text-white"; 
                if (status === 2) bgClass = "bg-red-500 text-white";   
                if (status === 3) bgClass = "bg-[#d97706] text-white"; 
                return (
                  <div key={index} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${bgClass} transition hover:scale-110 cursor-pointer`}>
                    {index + 1}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center gap-4 text-xs text-gray-500 font-medium border-t pt-4">
              <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#0f766e]"></span> Present</div>
              <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500"></span> Absent</div>
              <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#d97706]"></span> Late</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}