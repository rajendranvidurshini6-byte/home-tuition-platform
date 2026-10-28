"use client";

import Link from "next/link";
import { useState } from "react";

const resources = [
  { id: 1, title: "O/L Maths - Chapter 1 Notes", type: "Notes", size: "2.4 MB", icon: "📄", subject: "Maths" },
  { id: 2, title: "O/L Maths - 2023 Past Paper", type: "Past Paper", size: "1.8 MB", icon: "📝", subject: "Maths" },
  { id: 3, title: "O/L Maths - Model Paper 1", type: "Model Paper", size: "3.1 MB", icon: "📑", subject: "Maths" },
  { id: 4, title: "Physics - Quiz 1 (MCQ)", type: "Quiz", size: "Online", icon: "✅", subject: "Physics" },
  { id: 5, title: "English - Updated Syllabus Book", type: "Syllabus", size: "5.0 MB", icon: "📖", subject: "English" },
  { id: 6, title: "Physics - 2022 Past Paper", type: "Past Paper", size: "2.2 MB", icon: "📝", subject: "Physics" },
];

export default function StudentLMS() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredResources = activeTab === "All" ? resources : resources.filter(res => res.type === activeTab);

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
          <Link href="/dashboard/student/lms" className="flex items-center gap-3 px-4 py-3 bg-[#0f766e] rounded-xl font-semibold shadow-lg text-white"><span className="text-lg">📂</span> LMS & Papers</Link>
          <Link href="/dashboard/student/live-classes" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition"><span className="text-lg">🎥</span> Live Classes</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0f172a]">Learning Resources (LMS)</h1>
            <p className="text-sm text-[var(--text-light)] mt-1">Download Notes, Past Papers, and Quizzes.</p>
          </div>
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="text-xl">✅</span>
            <div>
              <p className="text-xs font-bold uppercase">Fee Status</p>
              <p className="text-sm font-semibold">Paid & Unlocked</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
          {["All", "Notes", "Past Paper", "Model Paper", "Quiz", "Syllabus"].map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${activeTab === tab ? "bg-[#0f172a] text-white shadow-md" : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="p-5 font-semibold">Resource Name</th>
                <th className="p-5 font-semibold">Type</th>
                <th className="p-5 font-semibold">Size</th>
                <th className="p-5 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredResources.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="p-5 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="font-bold text-[#0f172a] block">{item.title}</span>
                      <span className="text-xs text-gray-400">{item.subject}</span>
                    </div>
                  </td>
                  <td className="p-5"><span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md text-xs font-bold">{item.type}</span></td>
                  <td className="p-5 text-sm font-medium text-gray-500">{item.size}</td>
                  <td className="p-5 text-right">
                    <button className="btn-teal text-xs py-2 px-5 shadow-sm hover:shadow-md transition">
                      {item.type === "Quiz" ? "Start Quiz" : "Download"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}