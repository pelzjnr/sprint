import Link from "next/link";

export default function Docs() {
  return (
    <main className="min-h-screen">
      {/* header */}
      <header className="border-b border-gray-100 px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl font-bold">
            sprint<span className="text-orange">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/docs.html" className="font-mono text-sm text-orange font-bold">docs</Link>
            <Link href="/pricing.html" className="font-mono text-sm text-gray-600 hover:text-orange">pricing</Link>
            <Link href="/dashboard.html" className="font-mono text-sm text-gray-600 hover:text-orange">dashboard</Link>
            <Link href="/login.html" className="font-mono text-sm text-gray-600 hover:text-orange">log in</Link>
            <Link href="/signup.html" className="bg-orange text-white font-mono text-sm px-5 py-2 hover:bg-[#cc3d00] transition-colors">
              sign up
            </Link>
          </nav>
          <Link href="/signup.html" className="md:hidden bg-orange text-white font-mono text-sm px-4 py-2 hover:bg-[#cc3d00] transition-colors">
            sign up
          </Link>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* sidebar */}
        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-100 px-6 py-8 md:h-[calc(100vh-89px)] md:sticky md:top-[89px] overflow-y-auto">
          <nav className="space-y-1">
            <Link href="#getting-started" className="block font-mono text-sm text-gray-600 hover:text-orange py-2">getting started</Link>
            <Link href="#authentication" className="block font-mono text-sm text-gray-600 hover:text-orange py-2">authentication</Link>
            <Link href="#endpoints" className="block font-mono text-sm text-gray-600 hover:text-orange py-2">endpoints</Link>
            <Link href="#browsers" className="block font-mono text-sm text-gray-600 hover:text-orange py-2">browsers</Link>
            <Link href="#pages" className="block font-mono text-sm text-gray-600 hover:text-orange py-2">pages</Link>
            <Link href="#actions" className="block font-mono text-sm text-gray-600 hover:text-orange py-2">actions</Link>
            <Link href="#examples" className="block font-mono text-sm text-gray-600 hover:text-orange py-2">examples</Link>
            <Link href="#errors" className="block font-mono text-sm text-gray-600 hover:text-orange py-2">errors</Link>
          </nav>
        </aside>

        {/* content */}
        <div className="flex-1 px-6 py-8 md:px-12 md:py-12 max-w-4xl">
          {/* getting started */}
          <section id="getting-started" className="mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">getting started</h1>
            <p className="font-mono text-base text-gray-600 mb-6">
              sprint provides a simple, powerful api for browser automation. control browsers at scale, 
              automate workflows, scrape data, or power ai agents.
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
              <p className="font-mono text-sm font-bold mb-2">quick start</p>
              <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`npm install @sprint/api`}
              </pre>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6">
              <p className="font-mono text-sm font-bold mb-2">your first session</p>
              <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`const sprint = require('@sprint/api');

const browser = await sprint.create({
  apiKey: 'sk_live_xxxx',
});

const page = await browser.newPage();
await page.goto('https://example.com');
await page.screenshot('/path/to/screenshot.png');

await browser.close();`}
              </pre>
            </div>
          </section>

          {/* authentication */}
          <section id="authentication" className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">authentication</h2>
            <p className="font-mono text-base text-gray-600 mb-6">
              all requests require your api key. include it in the header of every request.
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6">
              <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`Authorization: Bearer sk_live_xxxxx`}
              </pre>
            </div>
          </section>

          {/* endpoints */}
          <section id="endpoints" className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">endpoints</h2>
            <p className="font-mono text-base text-gray-600 mb-6">
              the api is organized around restful principles. all responses return json.
            </p>
            <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
              <p className="font-mono text-sm font-bold mb-4">base url</p>
              <pre className="font-mono text-sm text-gray-700">
https://api.sprint.run/v1
              </pre>
            </div>
          </section>

          {/* browsers */}
          <section id="browsers" className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">browsers</h2>
            <p className="font-mono text-base text-gray-600 mb-6">
              browsers are isolated environments for web automation. create, manage, and close browsers.
            </p>
            
            <div className="mb-8">
              <h3 className="font-mono text-lg font-bold mb-4">create browser</h3>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="font-mono text-xs text-gray-500 mb-2">POST /browsers</p>
                <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`{
  "headless": true,
  "viewport": { "width": 1280, "height": 720 },
  "userAgent": "..."
}`}
                </pre>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-mono text-lg font-bold mb-4">list browsers</h3>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="font-mono text-xs text-gray-500 mb-2">GET /browsers</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-mono text-lg font-bold mb-4">close browser</h3>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="font-mono text-xs text-gray-500 mb-2">DELETE /browsers/{`{id}`}</p>
              </div>
            </div>
          </section>

          {/* pages */}
          <section id="pages" className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">pages</h2>
            <p className="font-mono text-base text-gray-600 mb-6">
              each browser can have multiple pages. pages represent browser tabs or frames.
            </p>
            
            <div className="mb-8">
              <h3 className="font-mono text-lg font-bold mb-4">navigate</h3>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="font-mono text-xs text-gray-500 mb-2">POST /browsers/{`{id}`}/pages/{`{pageId}`}/navigate</p>
                <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`{
  "url": "https://example.com",
  "waitUntil": "networkidle"
}`}
                </pre>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-mono text-lg font-bold mb-4">screenshot</h3>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="font-mono text-xs text-gray-500 mb-2">GET /browsers/{`{id}`}/pages/{`{pageId}`}/screenshot</p>
              </div>
            </div>
          </section>

          {/* actions */}
          <section id="actions" className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">actions</h2>
            <p className="font-mono text-base text-gray-600 mb-6">
              interact with pages using actions like click, type, scroll, and more.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="font-mono text-xs text-orange mb-2">POST /browsers/{`{id}`}/pages/{`{pageId}`}/click</p>
                <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`{
  "selector": "#submit-button",
  "button": "left",
  "count": 1
}`}
                </pre>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="font-mono text-xs text-orange mb-2">POST /browsers/{`{id}`}/pages/{`{pageId}`}/type</p>
                <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`{
  "selector": "#email-input",
  "text": "hello@example.com",
  "clear": true
}`}
                </pre>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="font-mono text-xs text-orange mb-2">POST /browsers/{`{id}`}/pages/{`{pageId}`}/scroll</p>
                <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`{
  "direction": "down",
  "amount": 500
}`}
                </pre>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6">
                <p className="font-mono text-xs text-orange mb-2">POST /browsers/{`{id}`}/pages/{`{pageId}`}/evaluate</p>
                <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`{
  "script": "return document.title;"
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* examples */}
          <section id="examples" className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">examples</h2>
            
            <div className="mb-8">
              <h3 className="font-mono text-lg font-bold mb-4">form automation</h3>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <pre className="font-mono text-xs md:text-sm text-gray-700 overflow-x-auto">
{`// fill and submit a form
await page.type('#email', 'user@example.com');
await page.type('#password', 'secret123');
await page.click('#submit');
await page.waitForNavigation();`}
                </pre>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-mono text-lg font-bold mb-4">extract data</h3>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <pre className="font-mono text-xs md:text-sm text-gray-700 overflow-x-auto">
{`// scrape product prices
const prices = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('.price'))
    .map(el => el.textContent);
});`}
                </pre>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-mono text-lg font-bold mb-4">ai agent integration</h3>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <pre className="font-mono text-xs md:text-sm text-gray-700 overflow-x-auto">
{`// power an ai agent with browser capabilities
const agent = new AIAgent();

while (await agent.hasTask()) {
  const task = await agent.getTask();
  
  await browser.goto(task.url);
  const data = await browser.scrape(task.selector);
  
  await agent.submitResult(data);
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* errors */}
          <section id="errors" className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">errors</h2>
            <p className="font-mono text-base text-gray-600 mb-6">
              the api uses standard http status codes and returns detailed error messages.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 p-6">
              <pre className="font-mono text-sm text-gray-700 overflow-x-auto">
{`{
  "error": {
    "code": "SESSION_LIMIT_EXCEEDED",
    "message": "You have reached your concurrent browser limit",
    "details": {
      "limit": 10,
      "current": 10
    }
  }
}`}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
