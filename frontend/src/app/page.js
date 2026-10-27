import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background-soft)] flex flex-col font-sans">
      
            {/* 1. Navbar (Updated) */}
      <nav className="bg-white shadow-sm px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          {/* Logo Icon (Demo) */}
          <div className="w-10 h-10 bg-[var(--teal-primary)] rounded-lg flex items-center justify-center text-white font-bold text-xl">
            h
          </div>
          <div className="text-2xl font-bold text-[var(--navy-deep)]">
            hometuition<span className="text-[var(--teal-primary)]">.lk</span>
          </div>
        </div>
        
        {/* Menu Links */}
        <div className="hidden md:flex gap-6 font-medium text-sm text-[var(--navy-deep)]">
          <Link href="/" className="hover:text-[var(--teal-primary)] transition">Home</Link>
          <Link href="/courses" className="hover:text-[var(--teal-primary)] transition">Courses</Link>
          <Link href="/live-classes" className="hover:text-[var(--teal-primary)] transition">Live Classes</Link>
          <Link href="/teachers" className="hover:text-[var(--teal-primary)] transition">Teachers</Link>
          <Link href="/resources" className="hover:text-[var(--teal-primary)] transition">Resources</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-semibold text-[var(--navy-deep)] border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            Login
          </Link>
          <Link href="/register" className="btn-teal text-sm py-2 px-5">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        <span className="bg-[var(--gold-accent)] text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
          Sri Lanka's #1 Transparent Tuition Platform
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--navy-deep)] max-w-4xl leading-tight mb-6">
          Pay only if satisfied. <br />
          <span className="text-[var(--teal-primary)]">Track everything.</span> Hide nothing.
        </h1>
        
        <p className="text-lg text-[var(--text-light)] max-w-2xl mb-10">
          Live classes for Grade 1-13, O/L, A/L, and Government Exams. 
          Every teacher is admin-verified. Every class is recorded. 
          Parents get 100% visibility.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/courses" className="btn-teal text-lg px-8 py-3">
            Explore Courses
          </Link>
          <Link href="/teacher-apply" className="bg-white border-2 border-[var(--navy-deep)] text-[var(--navy-deep)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
            Join as a Teacher
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[var(--navy-deep)] mb-2">✅ Verified Teachers</h3>
            <p className="text-sm text-[var(--text-light)]">NIC, Certificates, and Interviews completed before teaching.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[var(--navy-deep)] mb-2">📊 Parent Dashboard</h3>
            <p className="text-sm text-[var(--text-light)]">Track attendance, marks, and video completion instantly.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[var(--navy-deep)] mb-2">💳 Secure Payments</h3>
            <p className="text-sm text-[var(--text-light)]">Pay safely via PayHere and unlock your class instantly.</p>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="bg-[var(--navy-deep)] text-white text-center py-6 mt-10">
        <p>© 2026 HomeTuition.lk. All rights reserved.</p>
      </footer>
    </div>
  );
}