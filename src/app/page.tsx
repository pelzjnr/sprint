import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* hero */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4d00] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-10" />
        <h1 className="font-display text-6xl md:text-9xl font-bold tracking-tight relative">
          sprint<span className="text-orange">.</span>
        </h1>
        <p className="font-mono text-lg md:text-xl mt-6 max-w-xl text-gray-600 relative">
          browser automation api. build, scale, sell.
        </p>
        <div className="mt-12 relative">
          <Link
            href="#pricing"
            className="inline-block bg-[#ff4d00] text-white font-mono text-lg px-8 py-4 hover:bg-[#cc3d00] transition-colors"
          >
            start building →
          </Link>
        </div>
      </section>

      {/* what */}
      <section className="py-32 px-8 md:px-24 border-t border-gray-100 bg-gray-50">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-12">
          what is sprint<span className="text-orange">?</span>
        </h2>
        <p className="font-mono text-lg md:text-xl max-w-2xl leading-relaxed text-gray-700">
          sprint gives you a powerful api to control browsers at scale. automate
          workflows, scrape data, test applications, or build ai agents that can
          navigate the web. simple, fast, reliable.
        </p>
      </section>

      {/* features */}
      <section className="py-32 px-8 md:px-24 border-t border-gray-100">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">
          features<span className="text-orange">.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-8 hover:border-orange transition-colors group">
            <div className="w-12 h-12 bg-[#ff4d00] text-white flex items-center justify-center font-mono text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="font-mono text-xl font-bold mb-4">api-first</h3>
            <p className="font-mono text-gray-600">
              restful api. simple endpoints. full control.
            </p>
          </div>
          <div className="border border-gray-200 p-8 hover:border-orange transition-colors group">
            <div className="w-12 h-12 bg-[#ff4d00] text-white flex items-center justify-center font-mono text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="font-mono text-xl font-bold mb-4">scalable</h3>
            <p className="font-mono text-gray-600">
              from one browser to thousands. we handle the infrastructure.
            </p>
          </div>
          <div className="border border-gray-200 p-8 hover:border-orange transition-colors group">
            <div className="w-12 h-12 bg-[#ff4d00] text-white flex items-center justify-center font-mono text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="font-mono text-xl font-bold mb-4">reliable</h3>
            <p className="font-mono text-gray-600">
              99.9% uptime. robust error handling. production ready.
            </p>
          </div>
        </div>
      </section>

      {/* use cases */}
      <section className="py-32 px-8 md:px-24 border-t border-gray-100 bg-gray-50">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">
          use cases<span className="text-orange">.</span>
        </h2>
        <div className="space-y-8">
          <div className="border-l-4 border-[#ff4d00] pl-8 py-4">
            <h3 className="font-mono text-xl font-bold text-[#ff4d00]">ai agents</h3>
            <p className="font-mono text-gray-600 mt-2">
              give your agents the ability to navigate the web.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-8 py-4">
            <h3 className="font-mono text-xl font-bold">data scraping</h3>
            <p className="font-mono text-gray-600 mt-2">
              extract data at scale without getting blocked.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-8 py-4">
            <h3 className="font-mono text-xl font-bold">testing</h3>
            <p className="font-mono text-gray-600 mt-2">
              automated browser testing for your applications.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-8 py-4">
            <h3 className="font-mono text-xl font-bold">automation</h3>
            <p className="font-mono text-gray-600 mt-2">
              automate repetitive web workflows at scale.
            </p>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="py-32 px-8 md:px-24 border-t border-gray-100">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">
          pricing<span className="text-orange">.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-lg font-bold text-gray-500">hobby</h3>
            <p className="font-display text-5xl font-bold mt-4">$0</p>
            <p className="font-mono text-gray-500 mt-4">free forever</p>
            <ul className="font-mono text-sm mt-8 space-y-2 text-gray-600">
              <li>1 concurrent browser</li>
              <li>1000 requests / month</li>
              <li>community support</li>
            </ul>
          </div>
          <div className="border-2 border-orange p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff4d00] text-white font-mono text-sm px-3 py-1">
              popular
            </div>
            <h3 className="font-mono text-lg font-bold text-[#ff4d00]">pro</h3>
            <p className="font-display text-5xl font-bold mt-4">$29</p>
            <p className="font-mono text-gray-500 mt-4">/ month</p>
            <ul className="font-mono text-sm mt-8 space-y-2 text-gray-600">
              <li>10 concurrent browsers</li>
              <li>100,000 requests / month</li>
              <li>priority support</li>
              <li>advanced features</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-lg font-bold text-gray-500">enterprise</h3>
            <p className="font-display text-5xl font-bold mt-4">custom</p>
            <p className="font-mono text-gray-500 mt-4">contact us</p>
            <ul className="font-mono text-sm mt-8 space-y-2 text-gray-600">
              <li>unlimited browsers</li>
              <li>unlimited requests</li>
              <li>dedicated support</li>
              <li>custom integrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="py-32 px-8 md:px-24 border-t border-gray-100 bg-[#ff4d00]">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
          start building<span className="text-black">.</span>
        </h2>
        <p className="font-mono text-lg md:text-xl mt-6 max-w-xl text-white/80">
          get your api key in seconds. no credit card required for hobby.
        </p>
        <div className="mt-12">
          <Link
            href="#"
            className="inline-block bg-white text-[#ff4d00] font-mono text-lg px-8 py-4 hover:bg-black hover:text-white transition-colors"
          >
            get api key →
          </Link>
        </div>
      </section>

      {/* footer */}
      <footer className="py-12 px-8 md:px-24 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="font-display text-2xl font-bold">sprint.</p>
          <p className="font-mono text-sm text-gray-500">
            © 2026 sprint. all rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
