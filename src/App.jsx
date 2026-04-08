export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <h1 className="text-3xl font-semibold">Emma Furlong</h1>
          <p className="mt-2 text-stone-600">
            Mindset coaching, events, speaking, collaborations, and community.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="rounded-3xl bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Personal Brand Website
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight">
            Helping people build stronger minds, more intentional routines, and
            lives that feel aligned.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            This is your live website. Once this appears, we know the React app
            is working properly and we can layer your full design back in.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-block rounded-2xl bg-stone-900 px-5 py-3 text-white"
          >
            Enquire now
          </a>
        </section>
      </main>
    </div>
  );
}