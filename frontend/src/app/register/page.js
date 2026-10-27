"use client";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("student");
  const [isUnder18, setIsUnder18] = useState(false);

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-[var(--background-soft)] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg border border-gray-100">
        
        <h2 className="text-3xl font-bold text-center text-[var(--navy-deep)] mb-2">Create Account</h2>
        <p className="text-center text-[var(--text-light)] mb-6">Join our transparent learning platform</p>

        {/* Role Selector */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
          <button onClick={() => setRole("student")} className={`flex-1 py-2 rounded-md text-sm font-semibold ${role === "student" ? "bg-white shadow text-[var(--teal-primary)]" : "text-gray-500"}`}>Student</button>
          <button onClick={() => setRole("teacher")} className={`flex-1 py-2 rounded-md text-sm font-semibold ${role === "teacher" ? "bg-white shadow text-[var(--teal-primary)]" : "text-gray-500"}`}>Teacher</button>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-sm font-medium text-[var(--navy-deep)] mb-1">Full Name</label>
                <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--teal-primary)] outline-none" />
             </div>
             <div>
                <label className="block text-sm font-medium text-[var(--navy-deep)] mb-1">Email</label>
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--teal-primary)] outline-none" />
             </div>
          </div>

          {role === "student" && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-2">
              <label className="flex items-center gap-2 text-sm font-medium text-[var(--navy-deep)] cursor-pointer">
                <input type="checkbox" checked={isUnder18} onChange={(e) => setIsUnder18(e.target.checked)} className="w-4 h-4 text-[var(--teal-primary)]" />
                I am under 18 years old
              </label>

              {isUnder18 ? (
                <div className="mt-3">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Parent's NIC (Required)</label>
                  <input type="text" placeholder="Parent NIC" className="w-full px-3 py-2 border rounded-md text-sm outline-none" />
                </div>
              ) : (
                <div className="mt-3">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Student's NIC (Required)</label>
                  <input type="text" placeholder="Your NIC" className="w-full px-3 py-2 border rounded-md text-sm outline-none" />
                </div>
              )}
            </div>
          )}

          {role === "teacher" && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-2 text-sm text-gray-600">
              <p>To register as a teacher, you must provide your NIC, Degree Certificate, and attend an interview.</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-[var(--navy-deep)] mb-1">Password</label>
            <input type="password" placeholder="Create a strong password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--teal-primary)] outline-none" />
          </div>

          <button type="button" className="w-full btn-gold py-3 mt-4">Register as {role.charAt(0).toUpperCase() + role.slice(1)}</button>
        </form>

        <p className="text-center mt-6 text-sm text-[var(--text-light)]">
          Already have an account? <Link href="/login" className="text-[var(--teal-primary)] font-semibold hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}