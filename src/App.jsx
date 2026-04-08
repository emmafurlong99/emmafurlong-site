import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-stone-900">
      {/* HERO */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-stone-500">
          Emma Furlong
        </p>

        <h1 className="mt-6 text-6xl leading-tight font-semibold max-w-4xl">
          Helping people build stronger minds, intentional routines, and lives
          that actually feel aligned.
        </h1>

        <p className="mt-8 text-xl max-w-2xl text-stone-600 leading-9">
          Mindset coaching, keynote speaking, wellness events, education,
          personal growth, and premium brand collaborations.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="mailto:hello@emmafurlong.com"
            className="rounded-full bg-black text-white px-6 py-3"
          >
            Work With Me
          </a>

          <a
            href="#services"
            className="rounded-full border border-stone-300 px-6 py-3"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8"
      >
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">Mindset Coaching</h3>
          <p className="mt-4 text-stone-600 leading-8">
            Helping people build discipline, clarity, confidence, and structure
            through coaching systems rooted in psychology and performance.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">Speaking & Education</h3>
          <p className="mt-4 text-stone-600 leading-8">
            Workshops, keynote talks, school wellbeing sessions, and youth
            development experiences designed to create lasting impact.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">Events & Brand Partnerships</h3>
          <p className="mt-4 text-stone-600 leading-8">
            Community wellness events, FFRunclub experiences, premium campaigns,
            and aligned partnerships in fitness, mindset, and lifestyle.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <p className="uppercase tracking-[0.3em] text-sm text-stone-500">
            About
          </p>

          <h2 className="mt-4 text-4xl font-semibold max-w-3xl leading-tight">
            I help people create lives built on purpose, resilience, and aligned
            action.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-stone-600">
            From education and mindset coaching to wellness communities and
            performance events, my work bridges psychology, discipline, and
            human connection.
          </p>
        </div>
      </section>
    </div>
  );
}