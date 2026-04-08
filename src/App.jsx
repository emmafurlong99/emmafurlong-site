import { useMemo, useState } from "react";

export default function PersonalBrandWebsite() {
  const services = [
    {
      title: "1:1 Mindset Coaching",
      text: "Practical support for building routine, confidence, self-trust, and a healthier relationship with pressure, growth, and everyday life.",
    },
    {
      title: "Events & Community Experiences",
      text: "Thoughtful wellness events that bring people together through movement, conversation, and meaningful connection.",
    },
    {
      title: "Brand & Creative Collaborations",
      text: "Purpose-led partnerships across wellness, lifestyle, education, and community-focused campaigns.",
    },
  ];

  const offers = [
    "1:1 mindset coaching",
    "wellness events & community experiences",
    "speaking & workshops",
    "brand collaborations",
  ];

  const testimonials = [
    {
      name: "Sophie",
      quote:
        "Emma brings a rare mix of honesty, warmth, and structure. You leave feeling clearer and more capable.",
    },
    {
      name: "Aoife",
      quote:
        "Her events feel genuinely welcoming. It is not about ego or perfection, it is about people feeling better.",
    },
    {
      name: "Hannah",
      quote:
        "Her message around balance really cuts through. It feels motivating, but still grounded in real life.",
    },
  ];

  const stats = useMemo(
    () => [
      { value: "4+", label: "years teaching & mentoring" },
      { value: "100+", label: "community event attendees" },
      { value: "3", label: "pillars: movement, mindset, connection" },
    ],
    []
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "1:1 mindset coaching",
    goal: "",
    timeline: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-lg font-semibold tracking-tight">Emma Furlong</p>
            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
              Movement · Mindset · Community
            </p>
          </div>
          <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
            <a href="#about" className="transition hover:text-stone-900">
              About
            </a>
            <a href="#services" className="transition hover:text-stone-900">
              Services
            </a>
            <a href="#testimonials" className="transition hover:text-stone-900">
              Testimonials
            </a>
            <a href="#book" className="transition hover:text-stone-900">
              Book
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-white to-orange-50" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-stone-300 bg-stone-100 px-4 py-1 text-sm font-medium text-stone-700">
              Personal brand website
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Helping people build stronger minds, more intentional routines, and meaningful lives that feel aligned.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
              I am Emma — educator, mindset coach, community builder, and the voice behind a grounded approach to personal growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="rounded-2xl bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Book with me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              How we can work together
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-2xl border border-stone-300 px-4 py-3"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full rounded-2xl border border-stone-300 px-4 py-3"
          />
          <textarea
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            rows={5}
            placeholder="Tell me a bit about what you are looking for"
            className="w-full rounded-2xl border border-stone-300 px-4 py-3"
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-stone-900 px-5 py-3 text-white"
          >
            Submit enquiry
          </button>

          {submitted && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Thanks — your enquiry has been captured.
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
