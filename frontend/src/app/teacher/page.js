import Link from "next/link";

export default function TeacherInfoPage() {
  return (
    <div className="min-h-screen bg-[var(--background-soft)] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--navy-deep)] mb-6">
            Teach with <span className="text-[var(--teal-primary)]">Trust</span>
          </h1>
          <p className="text-[var(--text-light)] max-w-2xl mx-auto mb-8 text-lg">
            Join Sri Lanka's most transparent tuition platform. We verify you, so parents trust you. 
            Manage your classes, students, and earnings all in one place.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/login" className="btn-teal text-lg px-8 py-3 shadow-md">
              Teacher Dashboard (Login)
            </Link>
            <Link href="/register" className="bg-white border-2 border-[var(--navy-deep)] text-[var(--navy-deep)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
              Apply to Teach
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-3xl font-bold text-[var(--navy-deep)] mb-2">500+</h3>
            <p className="text-sm text-gray-500 font-semibold">Verified Teachers</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-3xl font-bold text-[var(--teal-primary)] mb-2">LKR 150k+</h3>
            <p className="text-sm text-gray-500 font-semibold">Average Monthly Earnings</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-3xl font-bold text-[var(--gold-accent)] mb-2">100%</h3>
            <p className="text-sm text-gray-500 font-semibold">Transparent System</p>
          </div>
        </div>

        {/* What We Provide Section */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[var(--navy-deep)] mb-8 text-center">Why Teach on HomeTuition.lk?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h4 className="font-bold text-[var(--navy-deep)]">Admin-Verified Badge</h4>
                <p className="text-sm text-gray-500 mt-1">Get a verified badge after we check your NIC, certificates, and conduct an interview. Parents trust you more.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💻</div>
              <div>
                <h4 className="font-bold text-[var(--navy-deep)]">Easy Class Management</h4>
                <p className="text-sm text-gray-500 mt-1">Auto-generated Zoom links, easy attendance marking, and student progress tracking.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💰</div>
              <div>
                <h4 className="font-bold text-[var(--navy-deep)]">Secure Payouts</h4>
                <p className="text-sm text-gray-500 mt-1">Students pay via PayHere. You get your earnings securely transferred to your bank.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">📚</div>
              <div>
                <h4 className="font-bold text-[var(--navy-deep)]">LMS Uploads</h4>
                <p className="text-sm text-gray-500 mt-1">Upload notes, past papers, and create quizzes easily from your dashboard.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}