"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("student");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background-soft)] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-100">
        
        <h2 className="text-3xl font-bold text-center text-[var(--navy-deep)] mb-2">Welcome Back</h2>
        <p className="text-center text-[var(--text-light)] mb-6">Login to your account</p>

        {/* Role Selector */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
          <button onClick={() => setRole("student")} className={`flex-1 py-2 rounded-md text-sm font-semibold ${role === "student" ? "bg-white shadow text-[var(--teal-primary)]" : "text-gray-500"}`}>Student</button>
          <button onClick={() => setRole("teacher")} className={`flex-1 py-2 rounded-md text-sm font-semibold ${role === "teacher" ? "bg-white shadow text-[var(--teal-primary)]" : "text-gray-500"}`}>Teacher</button>
          <button onClick={() => setRole("parent")} className={`flex-1 py-2 rounded-md text-sm font-semibold ${role === "parent" ? "bg-white shadow text-[var(--teal-primary)]" : "text-gray-500"}`}>Parent</button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--navy-deep)] mb-1">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--teal-primary)] outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--navy-deep)] mb-1">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--teal-primary)] outline-none" />
          </div>
          <button type="button" className="w-full btn-teal py-3 mt-4">Login as {role.charAt(0).toUpperCase() + role.slice(1)}</button>
        </form>

        <p className="text-center mt-6 text-sm text-[var(--text-light)]">
          Don't have an account? <Link href="/register" className="text-[var(--teal-primary)] font-semibold hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}