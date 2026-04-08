import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-stone-900">
      {/* HERO */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-stone-500">
          Emma Furlong
        </p>

        <h1 className="mt-6 text-6xl leading-tight font-semibold max-w-5xl">
          Helping people build stronger minds, intentional routines, and lives
          that actually feel aligned.
        </h1>

        <p className="mt-8 text-xl max-w-3xl text-stone-600 leading-9">
          Mindset coaching, keynote speaking, wellness events, education,
          personal growth, and premium brand collaborations.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:emmafurlonghome@gmail.com"
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
        className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8"
      >
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">Mindset Coaching</h3>
          <p className="mt-4 text-stone-600 leading-8">
            Coaching designed to help people build self-trust, discipline,
            clarity, and structure in a sustainable way.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">Speaking & Education</h3>
          <p className="mt-4 text-stone-600 leading-8">
            Talks, workshops, and wellbeing sessions across schools,
            communities, and events focused on mindset, growth, and resilience.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">Events & Collaborations</h3>
          <p className="mt-4 text-stone-600 leading-8">
            Premium wellness events, community experiences, and aligned brand
            partnerships in mindset, movement, and lifestyle.
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
            A personal brand built around impact, discipline, and genuine
            connection.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-stone-600">
            My work sits at the intersection of education, mindset, wellbeing,
            and community. Whether I am coaching, speaking, hosting events, or
            partnering with a brand, the goal is always the same: to help people
            move through life with more intention, resilience, and self-belief.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-10 shadow-sm">
            <p className="uppercase tracking-[0.3em] text-sm text-stone-500">
              Work with me
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              Coaching, speaking, and partnerships
            </h3>
            <p className="mt-4 text-stone-600 leading-8">
              I work with individuals, schools, communities, and brands who want
              a message rooted in growth, mindset, and meaningful action.
            </p>
          </div>

          <div className="bg-black rounded-3xl p-10 text-white shadow-sm">
            <p className="uppercase tracking-[0.3em] text-sm text-stone-300">
              Contact
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              Let’s create something impactful
            </h3>
            <p className="mt-4 text-stone-300 leading-8">
              For coaching enquiries, speaking opportunities, events, or brand
              collaborations, get in touch below.
            </p>
            <a
              href="mailto:emmafurlonghome@gmail.com"
              className="mt-8 inline-block rounded-full bg-white text-black px-6 py-3"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER SOCIALS */}
      <footer className="border-t border-stone-200 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 text-stone-600">
          <a
            href="https://www.instagram.com/FFLifestyle"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@emmafurlong99"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>

          <a href="mailto:emmafurlonghome@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}