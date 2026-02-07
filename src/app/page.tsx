import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* header */}
      <header className="border-b border-gray-100 px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl font-bold">
            sprint<span className="text-orange">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/docs" className="font-mono text-sm text-gray-600 hover:text-orange">docs</Link>
            <Link href="/pricing" className="font-mono text-sm text-gray-600 hover:text-orange">pricing</Link>
            <Link href="/dashboard" className="font-mono text-sm text-gray-600 hover:text-orange">dashboard</Link>
            <Link href="/profile" className="font-mono text-sm text-gray-600 hover:text-orange">profile</Link>
            <Link href="/login" className="font-mono text-sm text-gray-600 hover:text-orange">log in</Link>
            <Link href="/signup" className="bg-orange text-white font-mono text-sm px-5 py-2 hover:bg-[#cc3d00] transition-colors">
              sign up
            </Link>
          </nav>
          {/* mobile menu button */}
          <Link href="/signup" className="md:hidden bg-orange text-white font-mono text-sm px-4 py-2 hover:bg-[#cc3d00] transition-colors">
            sign up
          </Link>
        </div>
      </header>

      {/* hero */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight">
            sprint<span className="text-orange">.</span>
          </h1>
          <p className="font-mono text-lg md:text-xl mt-6 text-gray-600 max-w-xl">
            browser automation api. build, scale, sell.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/signup"
              className="inline-block bg-orange text-white font-mono text-base md:text-lg px-8 py-4 hover:bg-[#cc3d00] transition-colors text-center"
            >
              start building →
            </Link>
            <Link
              href="/login"
              className="inline-block border border-gray-300 text-gray-700 font-mono text-base md:text-lg px-8 py-4 hover:border-orange hover:text-orange transition-colors text-center"
            >
              sign in
            </Link>
          </div>
        </div>
      </section>

      {/* what */}
      <section className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100 bg-gray-50">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
          what is sprint<span className="text-orange">?</span>
        </h2>
        <p className="font-mono text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
          sprint gives you a powerful api to control browsers at scale. automate
          workflows, scrape data, test applications, or build ai agents that can
          navigate the web. simple, fast, reliable.
        </p>
      </section>

      {/* features */}
      <section className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          features<span className="text-orange">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <div className="w-10 h-10 bg-orange text-white flex items-center justify-center font-mono text-lg font-bold mb-4">
              1
            </div>
            <h3 className="font-mono text-lg font-bold mb-3">api-first</h3>
            <p className="font-mono text-sm text-gray-600">
              restful api. simple endpoints. full control.
            </p>
          </div>
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <div className="w-10 h-10 bg-orange text-white flex items-center justify-center font-mono text-lg font-bold mb-4">
              2
            </div>
            <h3 className="font-mono text-lg font-bold mb-3">scalable</h3>
            <p className="font-mono text-sm text-gray-600">
              from one browser to thousands. we handle the infrastructure.
            </p>
          </div>
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <div className="w-10 h-10 bg-orange text-white flex items-center justify-center font-mono text-lg font-bold mb-4">
              3
            </div>
            <h3 className="font-mono text-lg font-bold mb-3">reliable</h3>
            <p className="font-mono text-sm text-gray-600">
              99.9% uptime. robust error handling. production ready.
            </p>
          </div>
        </div>
      </section>

      {/* use cases */}
      <section className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100 bg-gray-50">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          use cases<span className="text-orange">.</span>
        </h2>
        <div className="space-y-6 max-w-2xl">
          <div className="border-l-4 border-orange pl-6 py-3">
            <h3 className="font-mono text-lg font-bold text-orange">ai agents</h3>
            <p className="font-mono text-sm text-gray-600 mt-2">
              give your agents the ability to navigate the web.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-6 py-3">
            <h3 className="font-mono text-lg font-bold">data scraping</h3>
            <p className="font-mono text-sm text-gray-600 mt-2">
              extract data at scale without getting blocked.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-6 py-3">
            <h3 className="font-mono text-lg font-bold">testing</h3>
            <p className="font-mono text-sm text-gray-600 mt-2">
              automated browser testing for your applications.
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-6 py-3">
            <h3 className="font-mono text-lg font-bold">automation</h3>
            <p className="font-mono text-sm text-gray-600 mt-2">
              automate repetitive web workflows at scale.
            </p>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          pricing<span className="text-orange">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-base font-bold text-gray-500">hobby</h3>
            <p className="font-display text-4xl font-bold mt-4">$0</p>
            <p className="font-mono text-sm text-gray-500 mt-2">free forever</p>
            <ul className="font-mono text-sm mt-6 space-y-2 text-gray-600">
              <li>1 concurrent browser</li>
              <li>1000 requests / month</li>
              <li>community support</li>
            </ul>
          </div>
          <div className="border-2 border-orange p-6 md:p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white font-mono text-xs px-3 py-1">
              popular
            </div>
            <h3 className="font-mono text-base font-bold text-orange">pro</h3>
            <p className="font-display text-4xl font-bold mt-4">$29</p>
            <p className="font-mono text-sm text-gray-500 mt-2">/ month</p>
            <ul className="font-mono text-sm mt-6 space-y-2 text-gray-600">
              <li>10 concurrent browsers</li>
              <li>100,000 requests / month</li>
              <li>priority support</li>
              <li>advanced features</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-base font-bold text-gray-500">enterprise</h3>
            <p className="font-display text-4xl font-bold mt-4">custom</p>
            <p className="font-mono text-sm text-gray-500 mt-2">contact us</p>
            <ul className="font-mono text-sm mt-6 space-y-2 text-gray-600">
              <li>unlimited browsers</li>
              <li>unlimited requests</li>
              <li>dedicated support</li>
              <li>custom integrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          faq<span className="text-orange">.</span>
        </h2>
        <div className="max-w-3xl space-y-6">
          <div className="border border-gray-200 p-6">
            <h3 className="font-mono text-base font-bold mb-2">what is sprint?</h3>
            <p className="font-mono text-sm text-gray-600">
              sprint is a browser automation api that lets you control headless browsers programmatically. 
              use it to build ai agents, scrape data, test applications, or automate workflows.
            </p>
          </div>
          <div className="border border-gray-200 p-6">
            <h3 className="font-mono text-base font-bold mb-2">how does the api work?</h3>
            <p className="font-mono text-sm text-gray-600">
              you send simple http requests to create browser sessions, navigate pages, click elements, 
              extract data, and more. we handle all the infrastructure complexity.
            </p>
          </div>
          <div className="border border-gray-200 p-6">
            <h3 className="font-mono text-base font-bold mb-2">is there a free tier?</h3>
            <p className="font-mono text-sm text-gray-600">
              yes. the hobby plan is free forever with 1 concurrent browser and 1,000 requests per month. 
              no credit card required.
            </p>
          </div>
          <div className="border border-gray-200 p-6">
            <h3 className="font-mono text-base font-bold mb-2">can i use sprint for production?</h3>
            <p className="font-mono text-sm text-gray-600">
              absolutely. the pro plan includes 99.9% uptime, priority support, and production-ready 
              infrastructure. thousands of requests per second supported.
            </p>
          </div>
          <div className="border border-gray-200 p-6">
            <h3 className="font-mono text-base font-bold mb-2">what languages are supported?</h3>
            <p className="font-mono text-sm text-gray-600">
              any language with http support. we have official clients for javascript/typescript, python, 
              and go. rest api works with everything else.
            </p>
          </div>
          <div className="border border-gray-200 p-6">
            <h3 className="font-mono text-base font-bold mb-2">how do i get started?</h3>
            <p className="font-mono text-sm text-gray-600">
              sign up for free, get your api key, and make your first request in under 5 minutes. 
              check our documentation for quickstart guides and examples.
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100 bg-orange">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            start building<span className="text-black">.</span>
          </h2>
          <p className="font-mono text-base md:text-lg text-white/80 mt-4">
            get your api key in seconds. no credit card required for hobby.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-block bg-white text-orange font-mono text-base md:text-lg px-8 py-4 hover:bg-black hover:text-white transition-colors"
            >
              get api key →
            </Link>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="px-6 py-12 md:px-12 md:py-16 border-t border-gray-100 bg-gray-50">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="font-display text-xl font-bold mb-4">sprint.</p>
            <p className="font-mono text-sm text-gray-600">
              browser automation api.<br />
              build, scale, sell.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">product</h4>
            <ul className="space-y-2">
              <li><Link href="/docs" className="font-mono text-sm text-gray-600 hover:text-orange">documentation</Link></li>
              <li><Link href="/pricing" className="font-mono text-sm text-gray-600 hover:text-orange">pricing</Link></li>
              <li><Link href="/dashboard" className="font-mono text-sm text-gray-600 hover:text-orange">dashboard</Link></li>
              <li><Link href="/login" className="font-mono text-sm text-gray-600 hover:text-orange">sign in</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-mono text-sm text-gray-600 hover:text-orange">api status</a></li>
              <li><a href="#" className="font-mono text-sm text-gray-600 hover:text-orange">changelog</a></li>
              <li><a href="#" className="font-mono text-sm text-gray-600 hover:text-orange">examples</a></li>
              <li><a href="#" className="font-mono text-sm text-gray-600 hover:text-orange">support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-mono text-sm text-gray-600 hover:text-orange">privacy policy</a></li>
              <li><a href="#" className="font-mono text-sm text-gray-600 hover:text-orange">terms of service</a></li>
              <li><a href="#" className="font-mono text-sm text-gray-600 hover:text-orange">cookie policy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-gray-200">
          <p className="font-mono text-xs text-gray-500">
            © 2026 sprint. all rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-mono text-xs text-gray-500 hover:text-orange">twitter</a>
            <a href="#" className="font-mono text-xs text-gray-500 hover:text-orange">github</a>
            <a href="#" className="font-mono text-xs text-gray-500 hover:text-orange">discord</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
