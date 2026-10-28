import Link from "next/link";

// 🚀 DEMO DATA
const myCourses = [
  { id: 1, name: "O/L Mathematics", teacher: "Mr. Kamal", progress: 85, nextClass: "Today, 4:00 PM", color: "bg-blue-500" },
  { id: 2, name: "A/L Physics", teacher: "Ms. Nimali", progress: 60, nextClass: "Tomorrow, 2:00 PM", color: "bg-purple-500" },
  { id: 3, name: "Spoken English", teacher: "Ms. Sarah", progress: 95, nextClass: "Friday, 5:00 PM", color: "bg-teal-500" },
];

const recentMarks = [
  { id: 1, exam: "Maths - Model Paper", marks: "85/100", grade: "A" },
  { id: 2, exam: "Physics - Monthly Test", marks: "72/100", grade: "B" },
  { id: 3, exam: "English - Quiz 1", marks: "95/100", grade: "A+" },
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#f4f7f6] flex">
      
      {/* 1. Left Sidebar (Gradient & Modern) */}
      <aside className="w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen hidden md:flex flex-col shadow-2xl z-10">
        <div className="p-6 text-2xl font-bold border-b border-gray-700/50 flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-tr from-[#0f766e] to-[#14b8a6] rounded-xl flex items-center justify-center text-white text-lg shadow-lg shadow-teal-500/30">h</div>
          <span className="tracking-tight">hometuition<span className="text-[#14b8a6]">.lk</span></span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 text-sm font-medium mt-4">
          <Link href="/dashboard/student" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#0f766e] to-[#0d9488] rounded-xl font-semibold shadow-lg shadow-teal-500/20 text-white">
            <span className="text-lg">📊</span> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-all">
            <span className="text-lg">📚</span> My Courses
          </Link>
          <Link href="/lms" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-all">
            <span className="text-lg">📂</span> LMS & Papers
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-all">
            <span className="text-lg">🎥</span> Live Classes
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-all">
            <span className="text-lg">📝</span> Exams & Results
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-700/50">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-xs text-gray-400 mb-2">Need help?</p>
            <button className="w-full bg-[#d97706] hover:bg-[#b45309] text-white py-2 rounded-lg text-sm font-bold transition shadow-lg shadow-orange-500/20">Contact Support</button>
          </div>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        
        {/* Header (Creative Greeting) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">Good Morning, Nimesha! 👋</h1>
            <p className="text-[#475569] mt-1 text-sm font-medium">You're doing great. You have <span className="text-[#0f766e] font-bold">3 classes</span> today.</p>
          </div>
          
          <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <div className="relative">
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
              <span className="text-xl">🔔</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="text-sm font-bold text-[#0f172a]">Nimesha Perera</span>
              <div className="w-10 h-10 bg-gradient-to-tr from-[#0f766e] to-[#14b8a6] text-white rounded-full flex items-center justify-center font-bold shadow-md">
                N
              </div>
            </div>
          </div>
        </div>

        {/* Top Stats Grid (Colorful Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-5 hover:-translate-y-1 transition duration-300">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-sm">📚</div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Enrolled</p>
              <h3 className="text-3xl font-extrabold text-[#0f172a]">3</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-5 hover:-translate-y-1 transition duration-300">
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl shadow-sm">✅</div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Lessons</p>
              <h3 className="text-3xl font-extrabold text-[#0f172a]">28</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-5 hover:-translate-y-1 transition duration-300">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-sm">📈</div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Avg Score</p>
              <h3 className="text-3xl font-extrabold text-[#0f172a]">84%</h3>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#0f766e] to-[#0d9488] p-6 rounded-2xl shadow-lg shadow-teal-500/30 flex items-center gap-5 hover:-translate-y-1 transition duration-300 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full"></div>
            <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm">📅</div>
            <div className="relative z-10">
              <p className="text-xs text-teal-100 font-bold uppercase tracking-wider mb-1">Attendance</p>
              <h3 className="text-3xl font-extrabold text-white">92%</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side: Courses & Marks */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* My Courses */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#0f172a]">My Courses</h2>
                <Link href="/lms" className="text-sm font-bold text-[#0f766e] hover:text-[#0d9488] transition">View All →</Link>
              </div>
              <div className="space-y-5">
                {myCourses.map((course) => (
                  <div key={course.id} className="group p-5 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-[#0f766e]/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-4 w-full md:w-1/3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md ${course.color}`}>
                        {course.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0f172a] group-hover:text-[#0f766e] transition">{course.name}</h3>
                        <p className="text-xs text-gray-500 mt-1 font-medium">👨‍🏫 {course.teacher}</p>
                      </div>
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex justify-between text-xs mb-2 font-semibold">
                        <span className="text-gray-500">Progress</span>
                        <span className="text-[#0f766e]">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div className={`h-2.5 rounded-full ${course.color}`} style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                    <div className="text-right w-full md:w-auto mt-4 md:mt-0 flex flex-col items-end">
                      <span className="bg-orange-50 text-[#d97706] text-xs font-bold px-3 py-1 rounded-full mb-2">{course.nextClass}</span>
                      <button className="bg-[#0f172a] text-white text-xs font-bold py-2 px-5 rounded-lg hover:bg-black transition shadow-md">Join Class</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Exam Marks */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-xl font-bold text-[#0f172a] mb-6">Recent Exam Marks</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {recentMarks.map((mark) => (
                  <div key={mark.id} className="border border-gray-100 p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-sm relative overflow-hidden">
                    <div className="absolute -right-2 -bottom-2 text-6xl font-black text-gray-100/50">{mark.grade}</div>
                    <p className="text-xs font-bold text-gray-500 mb-1 relative z-10">{mark.exam}</p>
                    <p className="text-2xl font-extrabold text-[#0f172a] relative z-10">{mark.marks}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Creative Progress Circle */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-fit relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10"></div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-8">Overall Progress</h2>
            
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="relative w-40 h-40">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                  {/* Progress Circle */}
                  <circle cx="50" cy="50" r="40" stroke="url(#gradient)" strokeWidth="12" fill="none" strokeDasharray="251.2" strokeDashoffset="55.2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0f766e" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold text-[#0f172a]">78%</span>
                  <span className="text-xs text-gray-500 font-semibold mt-1">Completed</span>
                </div>
              </div>
            </div>

            {/* Subject Bars */}
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-gray-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#0f766e]"></span> Mathematics</span>
                  <span className="text-[#0f172a]">80%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#0f766e] h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-gray-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#d97706]"></span> Physics</span>
                  <span className="text-[#0f172a]">65%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#d97706] h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-gray-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> English</span>
                  <span className="text-[#0f172a]">90%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
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