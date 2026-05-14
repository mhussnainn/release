import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit · Release Massage Therapy · Lone Tree, CO" },
      {
        name: "description",
        content:
          "Book a massage or energy session with Renee at 9896 Rosemont Ave STE 103, Lone Tree, CO 80124. Call 719-240-4883.",
      },
      { property: "og:title", content: "Visit Release Massage Therapy" },
      {
        property: "og:description",
        content:
          "9896 Rosemont Ave STE 103, Lone Tree, CO 80124. Call 719-240-4883 to book.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const mapSrc =
    "https://www.google.com/maps?q=9896+Rosemont+Ave+STE+103,+Lone+Tree,+CO+80124&output=embed";

  return (
    <div className="bg-cream text-moss min-h-screen flex flex-col">
      <SiteNav />

      <header className="px-6 lg:px-12 py-20 lg:py-28 max-w-7xl mx-auto w-full">
        <span className="text-sage uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
          Visit
        </span>
        <h1 className="text-5xl lg:text-7xl font-serif leading-[1.05] mb-6 max-w-3xl">
          Come <span className="italic">find the room</span>.
        </h1>
        <p className="max-w-xl text-lg text-moss/70 leading-relaxed">
          Sessions are by appointment. Call or text to book — Renee will help you choose the
          right time and the right modality.
        </p>
      </header>

      <main className="px-6 lg:px-12 pb-32 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <section className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-moss/50 mb-3">Phone</h2>
            <a
              href="tel:+17192404883"
              className="text-3xl font-serif hover:text-sage transition-colors"
            >
              719-240-4883
            </a>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-moss/50 mb-3">Studio</h2>
            <address className="not-italic text-xl leading-relaxed">
              9896 Rosemont Ave, STE 103
              <br />
              Lone Tree, CO 80124
            </address>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=9896+Rosemont+Ave+STE+103,+Lone+Tree,+CO+80124"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-xs uppercase tracking-widest border-b border-moss/30 pb-1 hover:border-sage hover:text-sage transition-all"
            >
              Get directions →
            </a>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-moss/50 mb-3">Hours</h2>
            <ul className="text-base space-y-1 text-moss/80">
              <li className="flex justify-between max-w-xs">
                <span>Monday – Friday</span>
                <span>9am – 7pm</span>
              </li>
              <li className="flex justify-between max-w-xs">
                <span>Saturday</span>
                <span>10am – 4pm</span>
              </li>
              <li className="flex justify-between max-w-xs">
                <span>Sunday</span>
                <span className="text-moss/50">Closed</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-moss/50 mb-3">Online</h2>
            <a
              href="https://releasewithrenee.com"
              target="_blank"
              rel="noreferrer"
              className="text-base hover:text-sage transition-colors"
            >
              releasewithrenee.com
            </a>
          </div>

          <a
            href="tel:+17192404883"
            className="inline-block px-10 py-4 bg-moss text-linen text-xs uppercase tracking-widest hover:bg-sage transition-all"
          >
            Call to book
          </a>
        </section>

        <section className="lg:col-span-7">
          <div className="rounded-2xl overflow-hidden outline-1 -outline-offset-1 outline-black/5 bg-linen aspect-square lg:aspect-auto lg:h-full min-h-[480px]">
            <iframe
              title="Map to Release Massage Therapy in Lone Tree, CO"
              src={mapSrc}
              loading="lazy"
              className="w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
