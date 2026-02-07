import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [apiKey, setApiKey] = useState("sprint_api_key_xxxx");
  const [showKey, setShowKey] = useState(false);

  const copyKey = () => {
    navigator.clipboard.writeText(apiKey);
    alert("copied to clipboard");
  };

  const regenerateKey = () => {
    const newKey = "sprint_api_key_" + Math.random().toString(36).substring(2, 22);
    setApiKey(newKey);
    alert("new api key generated");
  };

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
            <Link href="/profile" className="font-mono text-sm text-orange font-bold hidden sm:block">profile</Link>
            <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center text-white font-mono text-sm font-bold">
              P
            </div>
          </nav>
        </div>
      </header>

      <div className="px-6 py-8 md:px-12 md:py-12 max-w-6xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">dashboard</h1>

        {/* api key */}
        <section className="bg-white border border-gray-200 p-6 md:p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h2 className="font-mono text-lg font-bold">api key</h2>
            <span className="font-mono text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full w-fit">
              active
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type={showKey ? "text" : "password"}
              value={apiKey}
              readOnly
              className="w-full border border-gray-200 p-4 font-mono text-sm bg-gray-50 truncate"
            />
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowKey(!showKey)}
                className="bg-gray-100 text-gray-700 font-mono text-xs px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                {showKey ? "hide" : "show"}
              </button>
              <button
                onClick={copyKey}
                className="bg-gray-100 text-gray-700 font-mono text-xs px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                copy
              </button>
              <button
                onClick={regenerateKey}
                className="bg-gray-100 text-gray-700 font-mono text-xs px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                regenerate
              </button>
            </div>
          </div>
        </section>

        {/* stats */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 p-6">
            <p className="font-mono text-xs text-gray-500 mb-2">requests this month</p>
            <p className="font-display text-2xl md:text-3xl font-bold">12,847</p>
            <p className="font-mono text-xs text-green-600 mt-2">+12% from last month</p>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <p className="font-mono text-xs text-gray-500 mb-2">concurrent browsers</p>
            <p className="font-display text-2xl md:text-3xl font-bold">3</p>
            <p className="font-mono text-xs text-gray-400 mt-2">of 10 allowed</p>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <p className="font-mono text-xs text-gray-500 mb-2">success rate</p>
            <p className="font-display text-2xl md:text-3xl font-bold">99.7%</p>
            <p className="font-mono text-xs text-green-600 mt-2">last 7 days</p>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <p className="font-mono text-xs text-gray-500 mb-2">avg response</p>
            <p className="font-display text-2xl md:text-3xl font-bold">142ms</p>
            <p className="font-mono text-xs text-gray-400 mt-2">p95 latency</p>
          </div>
        </section>

        {/* recent activity */}
        <section className="bg-white border border-gray-200 p-6 md:p-8">
          <h2 className="font-mono text-lg font-bold mb-6">recent activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <p className="font-mono text-sm">GET /v1/browser/session</p>
                  <p className="font-mono text-xs text-gray-500">200 OK · 142ms</p>
                </div>
              </div>
              <p className="font-mono text-xs text-gray-400">2 min ago</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <p className="font-mono text-sm">POST /v1/browser/navigate</p>
                  <p className="font-mono text-xs text-gray-500">200 OK · 89ms</p>
                </div>
              </div>
              <p className="font-mono text-xs text-gray-400">5 min ago</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <p className="font-mono text-sm">GET /v1/browser/screenshot</p>
                  <p className="font-mono text-xs text-gray-500">200 OK · 234ms</p>
                </div>
              </div>
              <p className="font-mono text-xs text-gray-400">8 min ago</p>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <div>
                  <p className="font-mono text-sm">POST /v1/browser/click</p>
                  <p className="font-mono text-xs text-gray-500">200 OK · 156ms</p>
                </div>
              </div>
              <p className="font-mono text-xs text-gray-400">12 min ago</p>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div>
                  <p className="font-mono text-sm">GET /v1/browser/cookies</p>
                  <p className="font-mono text-xs text-gray-500">200 OK · 67ms</p>
                </div>
              </div>
              <p className="font-mono text-xs text-gray-400">18 min ago</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
