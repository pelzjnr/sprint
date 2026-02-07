import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* hero */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-24">
        <h1 className="font-display text-6xl md:text-9xl font-bold tracking-tight">
          sprint<span className="text-orange">.</span>
        </h1>
        <p className="font-mono text-lg md:text-xl mt-6 max-w-xl">
          browser automation api. build, scale, sell.
        </p>
        <div className="mt-12">
          <Link
            href="#pricing"
            className="inline-block bg-orange text-white font-mono text-lg px-8 py-4 hover:bg-black transition-colors"
          >
            start building →
          </Link>
        </div>
      </section>

      {/* what */}
      <section className="py-32 px-8 md:px-24 border-t border-gray-100">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-12">
          what is sprint<span className="text-orange">?</span>
        </h2>
        <p className="font-mono text-lg md:text-xl max-w-2xl leading-relaxed">
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
        <div className="grid md:grid-cols-3 gap-12">
          <div className="border border-gray-200 p-8">
            <h3 className="font-mono text-xl font-bold mb-4">api-first</h3>
            <p className="font-mono text-gray-600">
              restful api. simple endpoints. full control.
            </p>
          </div>
          <div className="border border-gray-200 p-8">
            <h3 className="font-mono text-xl font-bold mb-4">scalable</h3>
            <p className="font-mono text-gray-600">
              from one browser to thousands. we handle the infrastructure.
            </p>
          </div>
          <div className="border border-gray-200 p-8">
            <h3 className="font-mono text-xl font-bold mb-4">reliable</h3>
            <p className="font-mono text-gray-600">
              99.9% uptime. robust error handling. production ready.
            </p>
          </div>
        </div>
      </section>

      {/* use cases */}
      <section className="py-32 px-8 md:px-24 border-t border-gray-100">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">
          use cases<span className="text-orange">.</span>
        </h2>
        <div className="space-y-8">
          <div className="border-l-4 border-orange pl-8">
            <h3 className="font-mono text-xl font-bold">ai agents</h3>
            <p className="font-mono text-gray-600 mt-2">
              give your agents the ability to navigate the web.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-8">
            <h3 className="font-mono text-xl font-bold">data scraping</h3>
            <p className="font-mono text-gray-600 mt-2">
              extract data at scale without getting blocked.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-8">
            <h3 className="font-mono text-xl font-bold">testing</h3>
            <p className="font-mono text-gray-600 mt-2">
              automated browser testing for your applications.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-8">
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
          <div className="border border-gray-200 p-8">
            <h3 className="font-mono text-lg font-bold">hobby</h3>
            <p className="font-display text-5xl font-bold mt-4">$0</p>
            <p className="font-mono text-gray-600 mt-4">free forever</p>
            <ul className="font-mono text-sm mt-8 space-y-2">
              <li>1 concurrent browser</li>
              <li>1000 requests / month</li>
              <li>community support</li>
            </ul>
          </div>
          <div className="border-2 border-orange p-8">
            <h3 className="font-mono text-lg font-bold text-orange">pro</h3>
            <p className="font-display text-5xl font-bold mt-4">$29</p>
            <p className="font-mono text-gray-600 mt-4">/ month</p>
            <ul className="font-mono text-sm mt-8 space-y-2">
              <li>10 concurrent browsers</li>
              <li>100,000 requests / month</li>
              <li>priority support</li>
              <li>advanced features</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-8">
            <h3 className="font-mono text-lg font-bold">enterprise</h3>
            <p className="font-display text-5xl font-bold mt-4">custom</p>
            <p className="font-mono text-gray-600 mt-4">contact us</p>
            <ul className="font-mono text-sm mt-8 space-y-2">
              <li>unlimited browsers</li>
              <li>unlimited requests</li>
              <li>dedicated support</li>
              <li>custom integrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="py-32 px-8 md:px-24 border-t border-gray-100">
        <h2 className="font-display text-4xl md:text-6xl font-bold">
          start building<span className="text-orange">.</span>
        </h2>
        <p className="font-mono text-lg md:text-xl mt-6 max-w-xl">
          get your api key in seconds. no credit card required for hobby.
        </p>
        <div className="mt-12">
          <Link
            href="#"
            className="inline-block bg-orange text-white font-mono text-lg px-8 py-4 hover:bg-black transition-colors"
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
