"use client";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "Demo",
    lastName: "User",
    email: "demo@sprint.io",
    company: "Acme Inc",
    timezone: "Africa/Lagos",
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* header */}
      <header className="border-b border-gray-200 bg-white px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl font-bold">
            sprint<span className="text-orange">.</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/docs" className="font-mono text-sm text-gray-600 hover:text-orange hidden sm:block">docs</Link>
            <Link href="/pricing" className="font-mono text-sm text-gray-600 hover:text-orange hidden sm:block">pricing</Link>
            <Link href="/dashboard" className="font-mono text-sm text-orange font-bold hidden sm:block">dashboard</Link>
            <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center text-white font-mono text-sm font-bold">
              {user.firstName[0]}{user.lastName[0]}
            </div>
          </nav>
        </div>
      </header>

      <div className="px-6 py-8 md:px-12 md:py-12 max-w-4xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-orange rounded-full flex items-center justify-center text-white font-display text-2xl md:text-4xl font-bold">
            {user.firstName[0]}{user.lastName[0]}
          </div>
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">{user.firstName} {user.lastName}</h1>
            <p className="font-mono text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* profile form */}
        <section className="bg-white border border-gray-200 p-6 md:p-8 mb-6">
          <h2 className="font-mono text-lg font-bold mb-6">profile</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-mono text-sm font-bold mb-2 block">first name</label>
                <input
                  type="text"
                  value={user.firstName}
                  onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                  className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-sm font-bold mb-2 block">last name</label>
                <input
                  type="text"
                  value={user.lastName}
                  onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                  className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-sm font-bold mb-2 block">email</label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-sm font-bold mb-2 block">company</label>
              <input
                type="text"
                value={user.company}
                onChange={(e) => setUser({ ...user, company: e.target.value })}
                className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="bg-orange text-white font-mono text-sm px-8 py-4 hover:bg-[#cc3d00] transition-colors"
            >
              save changes
            </button>
          </form>
        </section>

        {/* plan info */}
        <section className="bg-white border border-gray-200 p-6 md:p-8">
          <h2 className="font-mono text-lg font-bold mb-6">subscription</h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-mono text-sm text-gray-500">current plan</p>
              <p className="font-display text-2xl font-bold text-orange">pro</p>
              <p className="font-mono text-xs text-gray-500">$29/month</p>
            </div>
            <Link
              href="/pricing"
              className="border border-gray-300 font-mono text-sm px-6 py-3 hover:border-orange hover:text-orange transition-colors"
            >
              change plan
            </Link>
          </div>
          <div className="border-t border-gray-100 pt-6">
            <div className="flex items-center justify-between py-3">
              <span className="font-mono text-sm text-gray-600">requests used</span>
              <span className="font-mono text-sm font-bold">12,847 / 100,000</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full mt-2">
              <div className="bg-orange h-2 rounded-full" style={{ width: "12%" }} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
