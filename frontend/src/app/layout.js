import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "HomeTuition.lk | Transparent Online Tuition",
  description: "Pay only if satisfied. Track everything. Hide nothing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white font-sans">
        
        {/* Global Navbar */}
        <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-[var(--teal-primary)] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-2xl font-extrabold text-white">h</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[var(--navy-deep)]">
              hometuition<span className="text-[var(--teal-primary)]">.lk</span>
            </span>
          </Link>
          
          {/* Nav Links (You asked for these) */}
          <div className="hidden md:flex gap-6 font-semibold text-sm text-[var(--navy-deep)]">
            <Link href="/" className="hover:text-[var(--teal-primary)] transition">Home</Link>
            <Link href="/about" className="hover:text-[var(--teal-primary)] transition">About</Link>
                       <Link href="/student" className="hover:text-[var(--teal-primary)] transition">Student</Link>
            <Link href="/teacher" className="hover:text-[var(--teal-primary)] transition">Teacher</Link><Link href="/faq" className="hover:text-[var(--teal-primary)] transition">FAQ</Link>
            <Link href="/contact" className="hover:text-[var(--teal-primary)] transition">Contact</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-3">
            <Link href="/login" className="px-5 py-2 text-sm font-bold text-[var(--navy-deep)] border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition">Login</Link>
            <Link href="/register" className="btn-teal text-sm py-2 px-6 font-bold shadow-md">Sign Up</Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="bg-[var(--navy-deep)] text-white pt-12 pb-6 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[var(--teal-primary)] rounded flex items-center justify-center">
                  <span className="text-xl font-extrabold text-white">h</span>
                </div>
                <span className="text-2xl font-bold text-white">hometuition.lk</span>
              </div>
              <p className="text-gray-400 text-sm">Learn Without Hassle at Home. Sri Lanka's most transparent online tuition platform.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/courses" className="hover:text-white transition">All Courses</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link href="/login" className="hover:text-white transition">Student Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📞 +91 77 123 4567</li>
                <li>✉️ hello@hometuition.lk</li>
                <li>📍 Colombo, Sri Lanka</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
            © 2026 hometuition.lk. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}