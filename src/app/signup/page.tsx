"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mock auth - accept any credentials for demo
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="font-display text-xl md:text-2xl font-bold mb-8 md:mb-12 block">
          sprint<span className="text-orange">.</span>
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">create account</h1>
        <p className="font-mono text-sm text-gray-500 mb-8">start building with sprint</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-sm font-bold mb-2 block">first name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="john"
                className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-sm font-bold mb-2 block">last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="doe"
                className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="font-mono text-sm font-bold mb-2 block">email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="font-mono text-sm font-bold mb-2 block">password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="font-mono text-sm font-bold mb-2 block">confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
            />
          </div>

          <label className="flex items-start gap-2">
            <input type="checkbox" className="accent-orange mt-1" />
            <span className="font-mono text-xs text-gray-500">
              i agree to the{" "}
              <Link href="/terms" className="text-orange hover:text-[#cc3d00]">
                terms of service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-orange hover:text-[#cc3d00]">
                privacy policy
              </Link>
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-orange text-white font-mono text-base md:text-lg py-4 hover:bg-[#cc3d00] transition-colors"
          >
            create account
          </button>
        </form>

        <p className="font-mono text-sm text-gray-500 mt-8 text-center">
          already have an account?{" "}
          <Link href="/login" className="text-orange hover:text-[#cc3d00]">
            sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
