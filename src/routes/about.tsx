import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import renee from "@/assets/renee.jpg";
import stillness from "@/assets/stillness.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Renee · Release Massage Therapy · Lone Tree, CO" },
      {
        name: "description",
        content:
          "Meet Renee — the practitioner behind Release Massage Therapy in Lone Tree, Colorado. Therapeutic bodywork, energy work, and coaching grounded in genuine care.",
      },
      { property: "og:title", content: "About Renee · Release Massage Therapy" },
      {
        property: "og:description",
        content:
          "Meet the practitioner behind Release Massage Therapy in Lone Tree, Colorado.",
      },
      { property: "og:image", content: renee },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-cream text-moss min-h-screen flex flex-col">
      <SiteNav />

      <header className="px-6 lg:px-12 py-20 lg:py-28 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <span className="text-sage uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
            About
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif leading-[1.05] mb-8">
            Hands that <span className="italic">listen</span>.
          </h1>
          <p className="text-lg text-moss/75 leading-relaxed max-w-xl">
            Renee founded Release Massage Therapy on a simple idea: real healing happens when
            someone takes the time to listen to your body. That listening — through touch, sound,
            and conversation — is the foundation of every session.
          </p>
        </div>
        <div className="lg:col-span-5">
          <img
            src={renee}
            alt="Renee, founder of Release Massage Therapy in Lone Tree"
            width={1024}
            height={1280}
            className="w-full aspect-[4/5] object-cover rounded-2xl outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
      </header>

      <main className="px-6 lg:px-12 pb-32 max-w-7xl mx-auto w-full">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <span className="text-gold uppercase tracking-widest text-xs block mb-4">
              The Practice
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif italic leading-snug">
              Bodywork, energy work, and conversation — woven together.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-moss/75 leading-relaxed text-lg">
            <p>
              Renee blends therapeutic massage, fascia release, and cupping with energetic
              modalities like Reiki, Access Bars, sound bowls, and tuning forks. Where it
              helps, she brings in mindset coaching and emotional release work.
            </p>
            <p>
              The result is a practice that meets you wherever you are — easing chronic pain,
              quieting an overactive mind, and supporting the deeper work of becoming yourself.
            </p>
            <p>
              Clients describe sessions with Renee as relieving years of stored tension,
              softening anxiety, and giving them their body back. She works one-on-one, by
              appointment only, in a quiet studio in Lone Tree.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { stat: "5.0", label: "Average rating across reviews" },
            { stat: "25+", label: "Verified client reviews" },
            { stat: "1:1", label: "Always one practitioner, one client" },
          ].map((s) => (
            <div key={s.label} className="border border-moss/10 p-10 rounded-2xl bg-linen">
              <div className="text-5xl font-serif italic text-sage mb-4">{s.stat}</div>
              <p className="text-sm text-moss/70 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-gold uppercase tracking-widest text-xs block mb-4">
              The Studio
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif italic leading-snug mb-6">
              A quiet room in Lone Tree.
            </h2>
            <p className="text-moss/70 leading-relaxed mb-6">
              The studio is intentionally small — soft light, warm linens, and the kind of
              hush that lets your nervous system finally settle. Sessions are by appointment so
              the room is always yours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-widest border-b border-moss/30 pb-1 hover:border-sage hover:text-sage transition-all"
            >
              Plan your visit →
            </Link>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <img
              src={stillness}
              alt="Massage oils, stones, and linen — the studio still life"
              loading="lazy"
              width={1280}
              height={800}
              className="w-full aspect-[4/3] object-cover rounded-2xl outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
