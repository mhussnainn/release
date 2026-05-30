import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Session · Release Massage Therapy · Lone Tree, CO" },
      {
        name: "description",
        content:
          "Request an appointment with Renee for massage, energy work, or coaching in Lone Tree, Colorado.",
      },
      { property: "og:title", content: "Book a Session · Release Massage Therapy" },
      {
        property: "og:description",
        content:
          "Request an appointment with Renee in Lone Tree, Colorado.",
      },
    ],
  }),
  component: BookPage,
});

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM",
];

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  service: z.string().min(1, "Please choose a service"),
  date: z.date({ required_error: "Pick a preferred date" }),
  time: z.string().min(1, "Pick a preferred time"),
  notes: z.string().max(600, "Keep notes under 600 characters").optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", time: "", notes: "" },
  });

  const date = watch("date");
  const time = watch("time");
  const service = watch("service");

  const onSubmit = async (data: BookingValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("Booking request:", data);
    toast.success("Request received", {
      description: "Renee will reach out within one business day to confirm.",
    });
    setSubmitted(true);
    reset();
  };

  const inputCls =
    "w-full bg-transparent border-b border-moss/20 px-0 py-3 text-base text-moss placeholder:text-moss/40 focus:outline-none focus:border-sage transition-colors";

  return (
    <div className="bg-cream text-moss min-h-screen flex flex-col">
      <SiteNav />
      <Toaster />

      <header className="px-6 lg:px-12 py-20 lg:py-28 max-w-7xl mx-auto w-full">
        <span className="text-sage uppercase tracking-[0.3em] text-xs font-semibold block mb-6">
          Book
        </span>
        <h1 className="text-5xl lg:text-7xl font-serif leading-[1.05] mb-6 max-w-3xl">
          Reserve your <span className="italic">time</span>.
        </h1>
        <p className="max-w-xl text-lg text-moss/70 leading-relaxed">
          Send a request and Renee will personally confirm your appointment within one
          business day. Prefer to speak first? Call{" "}
          <a href="tel:+17192404883" className="underline underline-offset-4 hover:text-sage">
            719-240-4883
          </a>
          .
        </p>
      </header>

      <main className="px-6 lg:px-12 pb-32 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <aside className="lg:col-span-4 space-y-10">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-moss/50 mb-3">Studio</h2>
            <address className="not-italic text-base leading-relaxed">
              9896 Rosemont Ave, STE 103<br />
              Lone Tree, CO 80124
            </address>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-moss/50 mb-3">Hours</h2>
            <ul className="text-sm space-y-1 text-moss/80">
              <li className="flex justify-between max-w-xs"><span>Mon – Fri</span><span>9am – 7pm</span></li>
              <li className="flex justify-between max-w-xs"><span>Saturday</span><span>10am – 4pm</span></li>
              <li className="flex justify-between max-w-xs"><span>Sunday</span><span className="text-moss/50">Closed</span></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-moss/50 mb-3">What to expect</h2>
            <p className="text-sm text-moss/70 leading-relaxed">
              After you submit, Renee will text or email to confirm time, intake details,
              and any pre-session guidance specific to the modality you've chosen.
            </p>
          </div>
        </aside>

        <section className="lg:col-span-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-moss/50 block mb-2">
                  Name
                </label>
                <input className={inputCls} placeholder="Full name" {...register("name")} />
                {errors.name && <p className="text-xs text-red-600 mt-2">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-moss/50 block mb-2">
                  Email
                </label>
                <input type="email" className={inputCls} placeholder="you@email.com" {...register("email")} />
                {errors.email && <p className="text-xs text-red-600 mt-2">{errors.email.message}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-moss/50 block mb-2">
                  Phone
                </label>
                <input type="tel" className={inputCls} placeholder="(719) 240-4883" {...register("phone")} />
                {errors.phone && <p className="text-xs text-red-600 mt-2">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-moss/50 block mb-2">
                  Service
                </label>
                <select
                  className={cn(inputCls, "appearance-none cursor-pointer")}
                  value={service}
                  onChange={(e) => setValue("service", e.target.value, { shouldValidate: true })}
                >
                  <option value="">Select a session…</option>
                  {(["Massage", "Energy", "Coaching"] as const).map((cat) => (
                    <optgroup key={cat} label={cat}>
                      {services.filter((s) => s.category === cat).map((s) => (
                        <option key={s.name} value={s.name}>
                          {s.name}{s.duration ? ` — ${s.duration}` : ""}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {errors.service && <p className="text-xs text-red-600 mt-2">{errors.service.message}</p>}
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-moss/50 block mb-2">
                  Preferred date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-transparent border-0 border-b border-moss/20 rounded-none px-0 py-3 h-auto text-base hover:bg-transparent hover:border-sage",
                        !date && "text-moss/40"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "EEEE, MMM d, yyyy") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(d) => d && setValue("date", d, { shouldValidate: true })}
                      disabled={(d) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return d < today || d.getDay() === 0;
                      }}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                {errors.date && <p className="text-xs text-red-600 mt-2">{errors.date.message}</p>}
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-moss/50 block mb-2">
                  Preferred time
                </label>
                <select
                  className={cn(inputCls, "appearance-none cursor-pointer")}
                  value={time}
                  onChange={(e) => setValue("time", e.target.value, { shouldValidate: true })}
                >
                  <option value="">Select a time…</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.time && <p className="text-xs text-red-600 mt-2">{errors.time.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-moss/50 block mb-2">
                Anything Renee should know? (optional)
              </label>
              <textarea
                rows={4}
                className={cn(inputCls, "resize-none")}
                placeholder="Injuries, intentions, pressure preferences…"
                {...register("notes")}
              />
              {errors.notes && <p className="text-xs text-red-600 mt-2">{errors.notes.message}</p>}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 bg-moss text-linen text-xs uppercase tracking-widest hover:bg-sage transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Request appointment"}
              </button>
              {submitted && (
                <span className="text-sm text-sage font-serif italic">
                  Thank you — Renee will be in touch shortly.
                </span>
              )}
            </div>
          </form>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
