import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background-soft)] flex flex-col font-sans">
      
      {/* 1. Hero Section (Image exactly matching your screenshot) */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        
        {/* Top Badge */}
        <span className="bg-[var(--gold-accent)] text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-sm">
          Sri Lanka's #1 Transparent Tuition Platform
        </span>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--navy-deep)] max-w-4xl leading-tight mb-6">
          Pay only if satisfied. <br />
          <span className="text-[var(--teal-primary)]">Track everything.</span> Hide nothing.
        </h1>
        
        {/* Sub Text */}
        <p className="text-lg text-[var(--text-light)] max-w-2xl mb-10 font-medium">
          Live classes for Grade 1-13, O/L, A/L, and Government Exams. 
          Every teacher is admin-verified. Every class is recorded. Parents get 100% visibility.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link href="/courses" className="btn-teal text-lg px-8 py-3 shadow-md hover:shadow-lg transition-all">
            Explore Courses
          </Link>
          <Link href="/teacher" className="bg-white border-2 border-[var(--navy-deep)] text-[var(--navy-deep)] px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all">
            Join as a Teacher
          </Link>
        </div>

        {/* 3 Trust Badges (Exactly like your screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold text-[var(--navy-deep)] mb-2 flex items-center gap-2">
              <span className="text-xl">✅</span> Verified Teachers
            </h3>
            <p className="text-sm text-[var(--text-light)] text-center">
              NIC, Certificates, and Interviews completed before teaching.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold text-[var(--navy-deep)] mb-2 flex items-center gap-2">
              <span className="text-xl">📊</span> Parent Dashboard
            </h3>
            <p className="text-sm text-[var(--text-light)] text-center">
              Track attendance, marks, and video completion instantly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold text-[var(--navy-deep)] mb-2 flex items-center gap-2">
              <span className="text-xl">💳</span> Secure Payments
            </h3>
            <p className="text-sm text-[var(--text-light)] text-center">
              Pay safely via PayHere and unlock your class instantly.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}