import Link from "next/link";

// 🚀 DEMO DATA: Admin-க்கு காட்ட இது தான் உதவும்!
const pendingTeachers = [
  { id: 1, name: "Kasun Perera", subject: "O/L Mathematics", nic: "199512345678", status: "Documents Pending", date: "2026-10-25" },
  { id: 2, name: "Nimali Silva", subject: "A/L Physics", nic: "199876543210", status: "Interview Scheduled", date: "2026-10-24" },
  { id: 3, name: "Suresh Kumar", subject: "Grade 5 Scholarship", nic: "198855443322", status: "Documents Pending", date: "2026-10-23" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[var(--background-soft)] flex">
      
      {/* Left Sidebar (Admin Menu) */}
      <aside className="w-64 bg-[var(--navy-deep)] text-white min-h-screen hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700 flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-lg">A</div>
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2 text-sm">
          <Link href="/dashboard/admin" className="block px-4 py-3 bg-[var(--teal-primary)] rounded-lg font-semibold">
            Dashboard
          </Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Verify Teachers</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Manage Payments</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">All Students</Link>
          <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">Audit Logs</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-[var(--navy-deep)]">Admin Control Panel ⚙️</h1>
            <p className="text-sm text-[var(--text-light)]">Manage teachers, students, and platform trust.</p>
          </div>
          <Link href="/" className="bg-gray-100 text-[var(--navy-deep)] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-200">
            Exit Admin
          </Link>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Total Students</p>
            <h3 className="text-2xl font-bold text-[var(--navy-deep)]">1,245</h3>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Active Teachers</p>
            <h3 className="text-2xl font-bold text-[var(--teal-primary)]">86</h3>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Pending Verifications</p>
            <h3 className="text-2xl font-bold text-[var(--gold-accent)]">12</h3>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Monthly Revenue</p>
            <h3 className="text-2xl font-bold text-[var(--navy-deep)]">LKR 450k</h3>
          </div>
        </div>

        {/* Teacher Verification Table (CORE TRUST FEATURE) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-[var(--navy-deep)]">Teacher Verification Queue</h2>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">Action Required</span>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">Teacher Name</th>
                <th className="p-4 font-semibold">Subject</th>
                <th className="p-4 font-semibold">NIC Number</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pendingTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-[var(--navy-deep)]">{teacher.name}</td>
                  <td className="p-4 text-sm text-[var(--text-light)]">{teacher.subject}</td>
                  <td className="p-4 text-sm text-gray-500 font-mono">{teacher.nic}</td>
                  <td className="p-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${teacher.status === 'Documents Pending' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                      {teacher.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-semibold hover:bg-gray-200">View Docs</button>
                    <button className="btn-teal text-xs py-1 px-3">Approve</button>
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