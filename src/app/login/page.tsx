import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="font-display text-xl md:text-2xl font-bold mb-8 md:mb-12 block">
          sprint<span className="text-orange">.</span>
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">welcome back</h1>
        <p className="font-mono text-sm text-gray-500 mb-8">sign in to your account</p>

        <form className="space-y-5">
          <div>
            <label className="font-mono text-sm font-bold mb-2 block">email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="font-mono text-sm font-bold mb-2 block">password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange" />
              <span className="font-mono text-xs text-gray-500">remember me</span>
            </label>
            <Link href="/forgot-password" className="font-mono text-xs text-orange hover:text-[#cc3d00]">
              forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-orange text-white font-mono text-base md:text-lg py-4 hover:bg-[#cc3d00] transition-colors"
          >
            sign in
          </button>
        </form>

        <p className="font-mono text-sm text-gray-500 mt-8 text-center">
          don't have an account?{" "}
          <Link href="/signup" className="text-orange hover:text-[#cc3d00]">
            sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
