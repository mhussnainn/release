import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews · Release Massage Therapy · 5.0 Stars · Lone Tree" },
      {
        name: "description",
        content:
          "Read what clients say about Renee's massage and energy work in Lone Tree, CO. 5.0-star rated across 25+ verified reviews.",
      },
      { property: "og:title", content: "Reviews · Release Massage Therapy" },
      {
        property: "og:description",
        content: "5.0-star rated. Read client reviews of Renee's work in Lone Tree, Colorado.",
      },
    ],
  }),
  component: ReviewsPage,
});

const fullReviews = [
  {
    name: "Lacey",
    when: "5 months ago",
    quote:
      "Renee is amazing!! I have had bad pain for years and then I found her. She has been so wonderful and very knowledgeable about the body. I was relieved when our paths crossed to find someone with such a big heart and who truly cares.",
  },
  {
    name: "Nina Kropp",
    when: "2 months ago",
    quote:
      "I've been getting massages for over 35 years and I've never had a massage this incredible! I have severe arthritis in my lower back from an injury that's 14 years old — I was supposed to have surgery and she has eased that pain immensely.",
  },
  {
    name: "Kristina Steward",
    when: "6 months ago",
    quote:
      "I've been working with Renee and her therapeutic massage. I have never felt better! I encourage anyone that wants an amazing holistic experience to go see Renee. She's AMAZING!",
  },
  {
    name: "Verified client",
    when: "Recent",
    quote:
      "She has relieved nerve damage in my foot from a childhood injury. I never thought that pain would go away.",
  },
  {
    name: "Verified client",
    when: "Recent",
    quote:
      "My husband and I had a fantastic experience here! Her location is great and the atmosphere is very relaxing.",
  },
];

const themes = ["Fascia release", "Holistic approach", "Energy release", "Therapeutic massage"];

function ReviewsPage() {
  return (
    <div className="bg-cream text-moss min-h-screen flex flex-col">
      <SiteNav />

      <header className="px-6 lg:px-12 py-20 lg:py-28 max-w-7xl mx-auto w-full">
        <span className="text-sage uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
          Reviews
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <h1 className="lg:col-span-7 text-5xl lg:text-7xl font-serif leading-[1.05]">
            <span className="italic">Five stars,</span> <br />
            twenty-five times over.
          </h1>
          <div className="lg:col-span-5">
            <div className="text-gold text-2xl tracking-widest mb-3">★★★★★</div>
            <p className="text-moss/70 leading-relaxed">
              Clients keep coming back — and bringing their families with them. Below is a
              selection from Renee's verified reviews.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          {themes.map((t) => (
            <span
              key={t}
              className="text-xs uppercase tracking-widest border border-moss/15 rounded-full px-4 py-2 text-moss/70"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <main className="px-6 lg:px-12 pb-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {fullReviews.map((r, i) => (
            <figure
              key={i}
              className="bg-linen border border-moss/10 p-10 rounded-2xl flex flex-col"
            >
              <div className="text-gold text-sm tracking-widest mb-6">★★★★★</div>
              <blockquote className="font-serif text-2xl leading-snug text-moss/90 flex-1 text-balance">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-8 flex justify-between items-baseline border-t border-moss/10 pt-4">
                <span className="text-sm font-medium">{r.name}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-moss/50">
                  {r.when}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-moss/60 mb-6">Source: Google reviews · 5.0 average from 25+ clients</p>
          <a
            href="tel:+17192404883"
            className="inline-block px-10 py-4 bg-moss text-linen text-xs uppercase tracking-widest hover:bg-sage transition-all"
          >
            Book your session
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
