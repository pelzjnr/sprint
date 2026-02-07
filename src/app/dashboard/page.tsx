import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* header */}
      <header className="border-b border-gray-200 bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-bold">
            sprint<span className="text-orange">.</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/docs" className="font-mono text-sm text-gray-600 hover:text-orange">
              docs
            </Link>
            <Link href="/pricing" className="font-mono text-sm text-gray-600 hover:text-orange">
              pricing
            </Link>
            <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white font-mono font-bold">
              P
            </div>
          </div>
        </div>
      </header>

      <div className="px-8 py-12 max-w-6xl mx-auto">
        <h1 className="font-display text-4xl font-bold mb-8">dashboard</h1>

        {/* api key */}
        <section className="bg-white border border-gray-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-mono text-lg font-bold">api key</h2>
            <span className="font-mono text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
              active
            </span>
          </div>
          <div className="flex gap-4">
            <input
              type="password"
              value="sk_live_xxxx"
              readOnly
              className="flex-1 border border-gray-200 p-4 font-mono text-sm bg-gray-50"
            />
            <button className="bg-orange text-white font-mono text-sm px-6 py-4 hover:bg-[#cc3d00] transition-colors">
              show
            </button>
            <button className="border border-gray-300 font-mono text-sm px-6 py-4 hover:border-orange transition-colors">
              copy
            </button>
            <button className="border border-gray-300 font-mono text-sm px-6 py-4 hover:border-orange transition-colors">
              regenerate
            </button>
          </div>
        </section>

        {/* stats */}
        <section className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 p-8">
            <p className="font-mono text-sm text-gray-500 mb-2">requests this month</p>
            <p className="font-display text-4xl font-bold">12,847</p>
            <p className="font-mono text-xs text-green-600 mt-2">+12% from last month</p>
          </div>
          <div className="bg-white border border-gray-200 p-8">
            <p className="font-mono text-sm text-gray-500 mb-2">concurrent browsers</p>
            <p className="font-display text-4xl font-bold">3</p>
            <p className="font-mono text-xs text-gray-400 mt-2">of 10 allowed</p>
          </div>
          <div className="bg-white border border-gray-200 p-8">
            <p className="font-mono text-sm text-gray-500 mb-2">success rate</p>
            <p className="font-display text-4xl font-bold">99.7%</p>
            <p className="font-mono text-xs text-green-600 mt-2">last 7 days</p>
          </div>
          <div className="bg-white border border-gray-200 p-8">
            <p className="font-mono text-sm text-gray-500 mb-2">avg response time</p>
            <p className="font-display text-4xl font-bold">142ms</p>
            <p className="font-mono text-xs text-gray-400 mt-2">p95 latency</p>
          </div>
        </section>

        {/* recent activity */}
        <section className="bg-white border border-gray-200 p-8">
          <h2 className="font-mono text-lg font-bold mb-6">recent activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <p className="font-mono text-sm">GET /v1/browser/session</p>
                  <p className="font-mono text-xs text-gray-500">200 OK · 142ms</p>
                </div>
              </div>
              <p className="font-mono text-xs text-gray-400">2 min ago</p>
            </div>
            <div className="flex items-center justify-between py-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <p className="font-mono text-sm">POST /v1/browser/navigate</p>
                  <p className="font-mono text-xs text-gray-500">200 OK · 89ms</p>
                </div>
              </div>
              <p className="font-mono text-xs text-gray-400">5 min ago</p>
            </div>
            <div className="flex items-center justify-between py-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <p className="font-mono text-sm">GET /v1/browser/screenshot</p>
                  <p className="font-mono text-xs text-gray-500">200 OK · 234ms</p>
                </div>
              </div>
              <p className="font-mono text-xs text-gray-400">8 min ago</p>
            </div>
            <div className="flex items-center justify-between py-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <div>
                  <p className="font-mono text-sm">POST /v1/browser/click</p>
                  <p className="font-mono text-xs text-gray-500">200 OK · 156ms</p>
                </div>
              </div>
              <p className="font-mono text-xs text-gray-400">12 min ago</p>
            </div>
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <p className="font-mono text-sm">GET /v1/browser/cookies</p>
                  <p className="font-mono text-xs text-gray-500">200 OK · 67ms</p>
                </div>
              </div>
              <p className="font-mono text-xs text-gray-400">18 min ago</p>
            </div>
          </div>
          <Link
            href="/activity"
            className="inline-block mt-6 font-mono text-sm text-orange hover:text-[#cc3d00]"
          >
            view all activity →
          </Link>
        </section>
      </div>
    </main>
  );
}
