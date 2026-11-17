import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { SITE } from "@/lib/site";
import teddy from "@/assets/teddy-mascot.png";
import { IconPhone, IconPin, IconClock, IconArrow, IconHeart } from "@/components/Icons";

const D = "Contact Lyza's Teddies Academy in Canary Wharf: Unit 5, Laybourne House, Admirals Way, London E14 9UH. Call +44 7845 589174 or send a message to book a visit.";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact & Book a Visit | Lyza's Teddies Academy" },
    { name: "description", content: D },
    { property: "og:title", content: "Contact Lyza's Teddies Academy" },
    { property: "og:description", content: D },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Contact,
});

const schema = z.object({
  parent_name: z.string().trim().min(1, "Please tell us your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  child_age: z.string().trim().max(50).optional(),
  message: z.string().trim().min(1, "Please write a short message").max(2000),
});

const field = "w-full rounded-2xl border-[2.5px] border-ink bg-card px-5 py-4 text-lg outline-none transition focus:-translate-y-0.5 focus:bg-butter/30 focus:shadow-pop-sm";

function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(fd);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check the form"); return; }
    setState("sending");
    const { error: err } = await supabase.from("contact_submissions").insert({
      parent_name: parsed.data.parent_name, email: parsed.data.email,
      phone: parsed.data.phone || null, child_age: parsed.data.child_age || null, message: parsed.data.message,
    });
    if (err) { setState("idle"); setError("Sorry, something went wrong. Please call us instead."); return; }
    setState("done");
  }

  const cards = [
    { I: IconPhone, t: "Call us", v: SITE.phone, href: SITE.phoneHref, c: "bg-bubble" },
    { I: IconPin, t: "Visit us", v: SITE.address, href: SITE.mapsUrl, c: "bg-sky" },
    { I: IconClock, t: "Opening hours", v: SITE.hours, c: "bg-butter" },
  ];

  return (
    <>
      <PageHero kicker="Say hello" title={<>Let's <span className="text-rainbow">meet</span> your little one</>} art={teddy}>
        Book a visit, ask a question or just say hi — we'd love to hear from you.
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-5">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <motion.a href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" whileHover={{ x: 8, rotate: -1 }}
                className="flex items-center gap-5 rounded-[2rem] border-[2.5px] border-ink bg-card p-6 shadow-pop-sm">
                <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-2 border-ink ${c.c}`}><c.I className="h-8 w-8" /></span>
                <span><span className="block font-display text-sm uppercase tracking-widest text-cherry">{c.t}</span><span className="font-display text-xl font-semibold">{c.v}</span></span>
              </motion.a>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <iframe title="Map to Lyza's Teddies Academy" src={SITE.mapEmbed} loading="lazy" className="h-72 w-full rounded-[2rem] border-[3px] border-ink" />
          </Reveal>
        </div>

        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border-[3px] border-ink bg-mint p-8 shadow-pop md:p-12">
            <AnimatePresence mode="wait">
              {state === "done" ? (
                <motion.div key="done" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-16 text-center">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} className="mx-auto w-fit"><IconHeart className="h-24 w-24" /></motion.div>
                  <h2 className="mt-6 text-4xl font-bold">Thank you!</h2>
                  <p className="mt-3 text-lg">Your message has been received. We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -20 }} className="space-y-5" noValidate>
                  <h2 className="text-4xl font-bold">Book a visit</h2>
                  <div className="grid gap-5 md:grid-cols-2">
                    <input name="parent_name" placeholder="Your name *" className={field} maxLength={100} required />
                    <input name="email" type="email" placeholder="Email *" className={field} maxLength={255} required />
                    <input name="phone" type="tel" placeholder="Phone" className={field} maxLength={30} />
                    <input name="child_age" placeholder="Child's age" className={field} maxLength={50} />
                  </div>
                  <textarea name="message" rows={5} placeholder="How can we help? *" className={field} maxLength={2000} required />
                  {error && <p role="alert" className="rounded-2xl bg-card px-4 py-3 font-semibold text-destructive">{error}</p>}
                  <button type="submit" disabled={state === "sending"} className="btn-pop">
                    {state === "sending" ? "Sending…" : "Send message"} <IconArrow className="h-5 w-5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </section>
    </>
  );
}
