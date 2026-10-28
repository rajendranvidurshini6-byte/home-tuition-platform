"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState("student");

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "student") router.push("/dashboard/student");
    else if (role === "teacher") router.push("/dashboard/teacher");
    else if (role === "parent") router.push("/dashboard/parent");
    else if (role === "admin") router.push("/dashboard/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background-soft)] p-4 md:p-8 font-sans">
      
      {/* 🌟 THE BIG CARD (White Background) */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Left Side: Image (Deep Navy Overlay) */}
        <div className="hidden md:flex md:w-1/2 bg-[var(--navy-deep)] relative items-center justify-center p-10">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" 
            alt="Students learning" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 text-center text-white">
            {/* Gold Logo Icon */}
            <div className="w-16 h-16 bg-[var(--gold-accent)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl font-extrabold text-white">h</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 leading-tight">Welcome Back to <br/> HomeTuition.lk</h1>
            <p className="text-gray-300 text-sm max-w-sm mx-auto">
              Pay only if satisfied. Track everything. Hide nothing. Sri Lanka's most transparent education platform.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form (White Background) */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[var(--navy-deep)] mb-2">Login</h2>
            <p className="text-[var(--text-light)] text-sm">Select your role to continue</p>
          </div>

          {/* Modern Role Selector (Navy & Gold) */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { id: "student", icon: "🎓", label: "Student" },
              { id: "parent", icon: "👨‍👩‍👧", label: "Parent" },
              { id: "teacher", icon: "👨‍🏫", label: "Teacher" },
              { id: "admin", icon: "⚙️", label: "Admin" },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setRole(item.id)} 
                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition ${
                  role === item.id 
                    ? "border-[var(--gold-accent)] bg-yellow-50 text-[var(--navy-deep)]" 
                    : "border-gray-200 text-gray-500 hover:border-[var(--navy-deep)]"
                }`}
              >
                <span className="text-2xl mb-1">{item.icon}</span>
                <span className={`text-xs font-bold ${role === item.id ? "text-[var(--gold-accent)]" : ""}`}>{item.label}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-[var(--navy-deep)] mb-1">Email Address</label>
              <input 
                type="email" 
                required 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[var(--navy-deep)] focus:ring-2 focus:ring-[var(--gold-accent)] focus:bg-white outline-none transition" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[var(--navy-deep)] mb-1">Password</label>
              <input 
                type="password" 
                required 
                placeholder="Enter your password" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[var(--navy-deep)] focus:ring-2 focus:ring-[var(--gold-accent)] focus:bg-white outline-none transition" 
              />
            </div>
            
            <button type="submit" className="w-full btn-gold py-3 mt-2 shadow-lg text-md font-bold text-white">
              Login as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-[var(--text-light)]">
            Don't have an account? <Link href="/register" className="text-[var(--gold-accent)] font-bold hover:underline">Register here</Link>
          </p>
        </div>

      </div>
    </div>
  );
}