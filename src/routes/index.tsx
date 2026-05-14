import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { services, reviews } from "@/lib/services";
import sanctuary from "@/assets/sanctuary.jpg";
import tuning from "@/assets/tuning.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Release Massage Therapy · Lone Tree, CO · Renee" },
      {
        name: "description",
        content:
          "Therapeutic massage, energy work, and mindset coaching with Renee in Lone Tree, Colorado. 5.0-star rated. Book a session: 719-240-4883.",
      },
      { property: "og:title", content: "Release Massage Therapy · Lone Tree, CO" },
      {
        property: "og:description",
        content:
          "A sanctuary for therapeutic massage, Access Bars, Reiki, and mindset coaching with Renee in Lone Tree, Colorado.",
      },
      { property: "og:image", content: sanctuary },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = services.filter((s) =>
    ["Therapeutic Massage", "Access Bars Session", "Sound Bowls"].includes(s.name),
  );

  return (
    <div className="bg-cream text-moss font-sans">
      <SiteNav />

      {/* Hero */}
      <header className="relative px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sage uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
              Lone Tree, Colorado
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif leading-[1.05] mb-8">
              The Art of <br />
              <span className="italic">True Release.</span>
            </h1>
            <p className="text-lg text-moss/75 max-w-md leading-relaxed mb-10">
              Therapeutic massage, energy work, and mindset coaching with Renee — designed to
              release what the body is holding and restore a sense of calm.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <a
                href="tel:+17192404883"
                className="px-8 py-4 bg-moss text-linen text-xs uppercase tracking-widest hover:bg-sage transition-all"
              >
                Book a Session
              </a>
              <Link
                to="/services"
                className="text-xs uppercase tracking-widest border-b border-moss/30 pb-1 hover:border-sage hover:text-sage transition-all"
              >
                View Services
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-gold tracking-widest text-sm">★★★★★</div>
              <div className="text-sm">
                <span className="font-medium block">5.0 Rating</span>
                <span className="text-moss/60">From 25+ verified clients</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={sanctuary}
              alt="Sun-drenched massage studio with linen curtains in Lone Tree"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-2xl outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="absolute -bottom-8 -left-4 lg:-left-10 bg-linen p-6 lg:p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="italic font-serif text-base lg:text-lg mb-3 text-sage leading-snug">
                "She has relieved nerve damage in my foot from a childhood injury."
              </p>
              <span className="text-[10px] uppercase tracking-widest font-bold text-moss">
                — Nina Kropp
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="bg-moss text-linen py-24 px-6 lg:px-12 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-serif mb-6 italic">Holistic Restoration</h2>
              <p className="text-linen/60 leading-relaxed">
                From energetic alignment to deep tissue restoration, each session is intuitively
                tailored to your body's specific needs.
              </p>
            </div>
            <Link
              to="/services"
              className="text-sage border-b border-sage/30 pb-1 self-start md:self-auto hover:text-gold hover:border-gold transition-all text-xs uppercase tracking-widest"
            >
              View full menu →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featured.map((s, i) => (
              <div
                key={s.name}
                className="group p-8 border border-linen/10 hover:bg-linen/5 transition-all"
              >
                <span className="text-gold text-xs block mb-6 tracking-widest">
                  {String(i + 1).padStart(2, "0")} / {s.category.toUpperCase()}
                </span>
                <h3 className="text-2xl font-serif mb-4">{s.name}</h3>
                <p className="text-sm text-linen/55 leading-relaxed mb-8">{s.description}</p>
                <span className="text-[10px] tracking-widest uppercase text-linen/70">
                  {s.duration ?? "Energy Work"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <img
              src={tuning}
              alt="Hands using tuning forks during a sound healing session"
              loading="lazy"
              width={1280}
              height={800}
              className="w-full aspect-video object-cover rounded-2xl outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
          <div className="lg:col-span-5">
            <span className="text-sage uppercase tracking-[0.3em] text-xs font-semibold block mb-4">
              The Philosophy
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif mb-8 leading-snug">
              More than a massage — it is a <span className="italic">return to self</span>.
            </h2>
            <div className="space-y-5 text-moss/70 leading-relaxed">
              <p>
                Release Massage Therapy is built on the belief that the body and mind are
                inextricably linked. Renee doesn't just treat symptoms — she listens to the body's
                story and meets it where it is.
              </p>
              <p>
                The Lone Tree studio is a sanctuary for those seeking relief from the pressure of
                modern life, blending therapeutic bodywork, energetic alignment, and grounded
                coaching into a single, intentional practice.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-4 group"
            >
              <span className="size-12 rounded-full border border-sage flex items-center justify-center group-hover:bg-sage transition-all">
                <span className="text-moss group-hover:text-linen">→</span>
              </span>
              <span className="uppercase tracking-widest text-xs font-medium">
                Meet Renee
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="bg-linen py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
            <h2 className="text-4xl lg:text-5xl font-serif italic max-w-xl">
              In her clients' words.
            </h2>
            <Link
              to="/reviews"
              className="text-xs uppercase tracking-widest border-b border-moss/30 pb-1 hover:border-sage hover:text-sage transition-all self-start md:self-auto"
            >
              All reviews →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <figure key={r.name} className="border-t border-moss/10 pt-8">
                <div className="text-gold text-sm tracking-widest mb-4">★★★★★</div>
                <blockquote className="font-serif text-xl leading-snug text-balance">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-moss/50 mt-1">
                    {r.label}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-sage uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
            Ready to begin?
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif italic leading-tight mb-8">
            Your body already knows the way.
          </h2>
          <p className="text-moss/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Call to book your first session. Renee will help you choose the right modality for
            where you are right now.
          </p>
          <a
            href="tel:+17192404883"
            className="inline-block px-10 py-4 bg-moss text-linen text-xs uppercase tracking-widest hover:bg-sage transition-all"
          >
            Call 719-240-4883
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
