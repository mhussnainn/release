import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Release Massage Therapy · Lone Tree, CO" },
      {
        name: "description",
        content:
          "Massage, energy work, and coaching services in Lone Tree, CO — Swedish, Deep Tissue, Therapeutic, Access Bars, Reiki, Sound Bowls, Tuning Forks, EMR, and more.",
      },
      { property: "og:title", content: "Services · Release Massage Therapy" },
      {
        property: "og:description",
        content:
          "Full menu of bodywork, energy work, and mindset coaching with Renee in Lone Tree, Colorado.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const groups: Array<{ key: "Massage" | "Energy" | "Coaching"; eyebrow: string; title: string; lede: string }> = [
    {
      key: "Massage",
      eyebrow: "01 / Bodywork",
      title: "Massage & Bodywork",
      lede: "Therapeutic touch to release stored tension, support recovery, and restore range of motion.",
    },
    {
      key: "Energy",
      eyebrow: "02 / Vibration",
      title: "Energy & Sound",
      lede: "Subtle modalities that quiet the mind and re-tune the body's natural frequency.",
    },
    {
      key: "Coaching",
      eyebrow: "03 / Integration",
      title: "Coaching & Counseling",
      lede: "Conversation and somatic practice to integrate what the body is asking you to know.",
    },
  ];

  return (
    <div className="bg-cream text-moss min-h-screen flex flex-col">
      <SiteNav />

      <header className="px-6 lg:px-12 py-20 lg:py-28 max-w-7xl mx-auto w-full">
        <span className="text-sage uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
          Services
        </span>
        <h1 className="text-5xl lg:text-7xl font-serif leading-[1.05] mb-6 max-w-3xl">
          A full menu of <span className="italic">care</span>.
        </h1>
        <p className="max-w-xl text-lg text-moss/70 leading-relaxed">
          Every session is shaped to the person on the table. Choose what calls to you, or
          call and Renee will help you decide.
        </p>
      </header>

      <main className="px-6 lg:px-12 pb-32 max-w-7xl mx-auto w-full space-y-24">
        {groups.map((g) => {
          const items = services.filter((s) => s.category === g.key);
          return (
            <section key={g.key}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end border-b border-moss/10 pb-8">
                <div className="lg:col-span-4">
                  <span className="text-gold text-xs tracking-widest uppercase block mb-3">
                    {g.eyebrow}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-serif italic">{g.title}</h2>
                </div>
                <p className="lg:col-span-6 lg:col-start-7 text-moss/70 leading-relaxed">
                  {g.lede}
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {items.map((s) => (
                  <li key={s.name} className="flex flex-col">
                    <div className="flex justify-between items-baseline gap-4 mb-3">
                      <h3 className="text-2xl font-serif">{s.name}</h3>
                      {s.duration && (
                        <span className="font-serif italic text-sage text-sm whitespace-nowrap">
                          {s.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-moss/65 leading-relaxed">{s.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <section className="bg-moss text-linen p-10 lg:p-16 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl lg:text-4xl font-serif italic mb-3">Not sure where to start?</h3>
            <p className="text-linen/60 max-w-md">
              Call Renee directly. A short conversation is the easiest way to find the right
              session for your body today.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+17192404883"
              className="px-8 py-4 bg-linen text-moss text-xs uppercase tracking-widest hover:bg-sage hover:text-linen transition-all"
            >
              Call 719-240-4883
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 border border-linen/30 text-xs uppercase tracking-widest hover:border-sage hover:text-sage transition-all"
            >
              Visit page
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
