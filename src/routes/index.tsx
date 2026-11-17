import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Hero } from "@/components/home/Hero";
import { Reveal, Parallax } from "@/components/Motion";
import { SITE, REVIEWS, PROGRAMMES, FAQS } from "@/lib/site";
import room from "@/assets/nursery-room.jpg";
import painting from "@/assets/kids-painting.jpg";
import garden from "@/assets/kids-garden.jpg";
import reading from "@/assets/teddy-reading.png";
import food from "@/assets/food.png";
import {
  IconShield, IconHeart, IconBook, IconPalette, IconSun, IconApple, IconTree, IconChat, IconPaw,
  IconStar, GoogleG, IconPlus, IconArrow, IconPhone, IconPin, IconClock, Sparkle, Squiggle, RainbowArc, Cloud,
} from "@/components/Icons";

const DESC = "Lyza's Teddies Academy is a 5-star nursery in Canary Wharf, London E14, caring for children aged 3 months to 7 years with EYFS, Montessori and Reggio Emilia-inspired play.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lyza's Teddies Academy | 5-Star Nursery & Child Care in Canary Wharf" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Lyza's Teddies Academy | Nursery in Canary Wharf" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "ChildCare", name: SITE.name, telephone: SITE.phone,
        address: { "@type": "PostalAddress", streetAddress: "Unit 5, Laybourne House, Admirals Way", addressLocality: "London", postalCode: "E14 9UH", addressCountry: "GB" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: String(REVIEWS.length) },
        foundingDate: "2023",
      }),
    }],
  }),
  component: Index,
});

const toneBg: Record<string, string> = { bubble: "bg-bubble", sky: "bg-sky", butter: "bg-butter", mint: "bg-mint", lilac: "bg-lilac" };

function SectionTitle({ kicker, children, center }: { kicker: string; children: React.ReactNode; center?: boolean }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <span className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.25em] text-cherry">
        <Sparkle className="h-4 w-4" /> {kicker}
      </span>
      <h2 className="mt-3 text-4xl font-bold leading-[1] md:text-6xl">{children}</h2>
      <Squiggle className={`mt-4 w-28 text-sky ${center ? "mx-auto" : ""}`} />
    </Reveal>
  );
}

function Marquee() {
  const items = ["Learn", "Play", "Grow", "Explore", "Create", "Giggle", "Discover", "Imagine"];
  return (
    <div className="relative -mt-2 rotate-[-2deg] border-y-[2.5px] border-ink bg-cherry py-4 text-primary-foreground">
      <div className="flex w-max animate-marquee gap-10 font-display text-3xl font-semibold">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10">{t}<Sparkle className="h-6 w-6 text-butter" /></span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const pillars = [
    { t: "Intent", d: "Every activity is designed with purpose — to inspire curiosity, build confidence, and nurture each child's unique potential from the very start.", I: IconHeart, c: "bg-bubble" },
    { t: "Impact", d: "We measure success by smiles, 'aha!' moments, and the occasional joyful 'look, I did it!' dance.", I: IconSun, c: "bg-butter" },
    { t: "Implementation", d: "We blend a pinch of traditional learning with a whole lot of hands-on fun.", I: IconPalette, c: "bg-sky" },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative h-[34rem]">
          <Parallax speed={0.15} className="absolute left-0 top-0 w-[72%]">
            <img src={room} alt="Children building with blocks alongside a caring nursery practitioner" width={1536} height={1024} loading="lazy" className="aspect-[4/5] w-full rounded-[2.5rem] border-[3px] border-ink object-cover shadow-pop" />
          </Parallax>
          <Parallax speed={-0.25} rotate={6} className="absolute bottom-0 right-0 w-[52%]">
            <img src={painting} alt="Toddlers painting with pastel colours" width={1024} height={1280} loading="lazy" className="aspect-square w-full rotate-3 rounded-[2rem] border-[3px] border-ink object-cover shadow-pop" />
          </Parallax>
          <motion.div
            initial={{ scale: 0, rotate: -30 }} whileInView={{ scale: 1, rotate: -8 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.3 }}
            className="absolute -left-2 bottom-16 grid h-32 w-32 place-items-center rounded-full border-[3px] border-ink bg-butter text-center shadow-pop-sm"
          >
            <div><p className="font-display text-xs uppercase tracking-widest">Est.</p><p className="font-display text-4xl font-bold">2023</p></div>
          </motion.div>
        </div>
        <div>
          <SectionTitle kicker="About us">A second home for your little ones</SectionTitle>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground">
              Founded with a passion for early years education, Lyza's Teddies Academy provides an exceptional learning environment where children aged 3 months to 7 years discover, explore and grow. Our approach blends structured learning with the freedom of creative play.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Every room is thoughtfully designed to spark curiosity — from cosy reading nooks filled with teddy bears to vibrant learning spaces that invite children to learn through wonder and joy.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={0.1 * i}>
                <motion.div whileHover={{ x: 10, rotate: -0.6 }} className="flex gap-5 rounded-3xl border-[2.5px] border-ink bg-card p-5 shadow-pop-sm">
                  <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-2 border-ink ${p.c}`}><p.I className="h-10 w-10" /></div>
                  <div><h3 className="text-2xl font-semibold">{p.t}</h3><p className="mt-1 text-muted-foreground">{p.d}</p></div>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}><Link to="/about" className="btn-ghost mt-8">Our full story <IconArrow className="h-5 w-5" /></Link></Reveal>
        </div>
      </div>
    </section>
  );
}

function Programmes() {
  return (
    <section className="relative bg-ink py-28 text-on-dark">
      <div className="dotted absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-bubble">Our programmes</span>
            <h2 className="mt-3 text-5xl font-bold leading-none md:text-6xl">Tailored for <span className="text-butter">every</span> little stage</h2>
            <p className="mt-6 max-w-md text-lg text-on-dark/70">Each age group enjoys a carefully crafted curriculum that balances learning, play and discovery.</p>
            <img src={reading} alt="" width={1024} height={1024} loading="lazy" className="mt-8 hidden w-64 animate-floaty lg:block" />
          </div>
          <div className="space-y-8">
            {PROGRAMMES.map((p, i) => (
              <div key={p.name} className="sticky" style={{ top: `${110 + i * 90}px` }}>
                <motion.article
                  initial={{ opacity: 0, y: 80, rotate: i % 2 ? 4 : -4 }} whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
                  viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", stiffness: 70 }}
                  className={`relative overflow-hidden rounded-[2.5rem] border-[3px] border-ink p-10 text-ink shadow-pop ${toneBg[p.tone]}`}
                >
                  <span className="absolute -right-6 -top-10 font-display text-[11rem] font-bold leading-none opacity-15">0{i + 1}</span>
                  <span className="inline-block rounded-full border-2 border-ink bg-card px-4 py-1 font-display font-semibold">{p.age}</span>
                  <h3 className="mt-5 text-4xl font-bold md:text-5xl">{p.name}</h3>
                  <p className="mt-4 max-w-lg text-lg">{p.text}</p>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const s = [
    { t: "Full & part-time care", d: "Flexible days for busy Canary Wharf families.", I: IconHeart, c: "bg-bubble" },
    { t: "Early learning (EYFS)", d: "Phonics, numbers and school readiness through play.", I: IconBook, c: "bg-butter" },
    { t: "Creative & messy play", d: "Painting, sensory trays, music and mark-making.", I: IconPalette, c: "bg-sky" },
    { t: "Fresh, balanced meals", d: "A varied weekly menu following DfE nutrition guidance.", I: IconApple, c: "bg-lilac" },
    { t: "Outdoor adventures", d: "Garden time, nature walks and fresh-air learning.", I: IconTree, c: "bg-mint" },
    { t: "Daily parent updates", d: "Development notes, photos and monthly newsletters.", I: IconChat, c: "bg-bubble" },
  ];
  return (
    <section className="relative overflow-hidden py-28">
      <Parallax speed={0.4} className="pointer-events-none absolute -right-20 top-10 w-80 opacity-60"><RainbowArc /></Parallax>
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker="What we offer" center>Services full of <span className="text-rainbow">wonder</span></SectionTitle>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.map((x, i) => (
            <Reveal key={x.t} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -12, rotate: i % 2 ? 2 : -2 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group relative h-full overflow-hidden rounded-[2rem] border-[2.5px] border-ink bg-card p-8 shadow-pop-sm"
              >
                <div className={`absolute -right-12 -top-12 h-40 w-40 blob ${x.c} opacity-50 transition-transform duration-700 group-hover:scale-150 group-hover:rotate-45`} />
                <div className={`relative grid h-20 w-20 place-items-center rounded-3xl border-2 border-ink ${x.c} transition-transform group-hover:-rotate-12 group-hover:scale-110`}>
                  <x.I className="h-12 w-12" />
                </div>
                <h3 className="relative mt-6 text-2xl font-semibold">{x.t}</h3>
                <p className="relative mt-2 text-muted-foreground">{x.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);
  const items = [
    { t: "Safe & secure", d: "Secure entry, CCTV monitoring and DBS-checked staff give you complete peace of mind.", I: IconShield, c: "bg-sky" },
    { t: "100% parent satisfaction", d: "Every family that joins us stays with us — our parents consistently rate their experience as outstanding.", I: IconStar, c: "bg-butter" },
    { t: "Bespoke curriculum", d: "The EYFS framework, enhanced with Montessori and Reggio Emilia-inspired practice.", I: IconBook, c: "bg-bubble" },
    { t: "Home-from-home care", d: "Small, warm and personal — every child is known, loved and celebrated for who they are.", I: IconPaw, c: "bg-mint" },
    { t: "Healthy fresh food", d: "Balanced menus that respect every allergy and dietary plan.", I: IconApple, c: "bg-lilac" },
  ];
  return (
    <section ref={ref} className="relative h-[300vh] bg-butter/40">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6">
          <SectionTitle kicker="Why choose us">Why families <span className="text-cherry">love</span> us</SectionTitle>
        </div>
        <motion.div style={{ x }} className="mt-12 flex gap-8 pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          {items.map((it, i) => (
            <div key={it.t} className={`relative w-[80vw] max-w-[26rem] shrink-0 rounded-[2.5rem] border-[3px] border-ink bg-card p-10 shadow-pop ${i % 2 ? "rotate-2 mt-10" : "-rotate-2"}`}>
              <div className={`grid h-24 w-24 place-items-center rounded-full border-[3px] border-ink ${it.c}`}>
                <it.I className={`h-14 w-14 ${it.I === IconStar ? "text-cherry" : ""}`} />
              </div>
              <h3 className="mt-6 text-3xl font-bold">{it.t}</h3>
              <p className="mt-3 text-lg text-muted-foreground">{it.d}</p>
              <span className="absolute bottom-6 right-8 font-display text-6xl font-bold text-ink/10">0{i + 1}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i] ?? REVIEWS[0]!;
  const colors = ["bg-bubble", "bg-sky", "bg-butter", "bg-mint", "bg-lilac", "bg-bubble"];
  return (
    <section className="relative overflow-hidden py-28">
      <Cloud className="absolute left-[-4rem] top-20 w-72 text-sky/30 animate-floaty" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionTitle kicker="Google reviews">Real words from <span className="text-rainbow">real parents</span></SectionTitle>
          <Reveal delay={0.1}>
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-5 rounded-3xl border-[2.5px] border-ink bg-card p-5 shadow-pop-sm">
              <GoogleG className="h-12 w-12" />
              <div>
                <p className="font-display text-5xl font-bold leading-none">5.0</p>
                <span className="mt-1 flex text-butter">{Array.from({ length: 5 }).map((_, k) => <IconStar key={k} className="h-5 w-5" />)}</span>
                <p className="text-sm text-muted-foreground">Based on Google reviews</p>
              </div>
            </a>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {REVIEWS.map((rv, k) => (
              <button key={rv.name} onClick={() => setI(k)} aria-label={`Read review from ${rv.name}`}
                className={`grid h-14 w-14 place-items-center rounded-full border-[2.5px] border-ink font-display text-lg font-bold transition-all ${colors[k]} ${k === i ? "scale-115 shadow-pop-sm -translate-y-1" : "opacity-60 hover:opacity-100"}`}>
                {rv.name.split(" ").map((n) => n[0]).join("")}
              </button>
            ))}
          </div>
        </div>
        <div className="relative min-h-[26rem]">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-[2.5rem] border-[3px] border-ink bg-sky" />
          <div className="absolute inset-0 translate-x-2 translate-y-2 rotate-1 rounded-[2.5rem] border-[3px] border-ink bg-butter" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={r.name}
              initial={{ rotateY: -70, opacity: 0, x: -40 }} animate={{ rotateY: 0, opacity: 1, x: 0 }} exit={{ rotateY: 70, opacity: 0, x: 40 }}
              transition={{ type: "spring", stiffness: 80, damping: 14 }}
              style={{ transformPerspective: 1200 }}
              className="relative flex min-h-[26rem] flex-col rounded-[2.5rem] border-[3px] border-ink bg-card p-10 shadow-pop"
            >
              <span className="font-display text-8xl leading-none text-bubble">“</span>
              <p className="-mt-6 text-xl leading-relaxed md:text-2xl">{r.text}</p>
              <footer className="mt-auto flex items-center justify-between pt-8">
                <div><p className="font-display text-xl font-semibold">{r.name}</p><p className="text-sm text-muted-foreground">Google review · {r.when}</p></div>
                <span className="flex text-butter">{Array.from({ length: 5 }).map((_, k) => <IconStar key={k} className="h-6 w-6" />)}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="absolute -bottom-20 right-4 flex gap-3">
            <button onClick={() => setI((i - 1 + REVIEWS.length) % REVIEWS.length)} aria-label="Previous review" className="grid h-12 w-12 place-items-center rounded-full border-[2.5px] border-ink bg-card shadow-pop-sm"><IconArrow className="h-5 w-5 rotate-180" /></button>
            <button onClick={() => setI((i + 1) % REVIEWS.length)} aria-label="Next review" className="grid h-12 w-12 place-items-center rounded-full border-[2.5px] border-ink bg-cherry text-primary-foreground shadow-pop-sm"><IconArrow className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const stats = [{ n: "2023", l: "Caring since" }, { n: "3m–7y", l: "Ages welcomed" }, { n: "5.0", l: "Google rating" }, { n: "100%", l: "Parent satisfaction" }];
  return (
    <section className="relative mt-16 overflow-hidden">
      <Parallax speed={0.25} className="absolute inset-0 -top-40">
        <img src={garden} alt="" width={1280} height={1024} loading="lazy" className="h-[140%] w-full object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 text-on-dark">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-butter">Experience you can trust</span>
            <h2 className="mt-3 text-5xl font-bold leading-none md:text-6xl">Led by Lyza, trusted by local families</h2>
            <p className="mt-6 text-lg text-on-dark/80">
              Lyza founded the academy in 2023 with one belief: little ones thrive when they feel safe, known and loved. Our practitioners are DBS-checked and paediatric first-aid trained, we follow the EYFS framework, and parents receive regular updates on every milestone.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1}>
                <div className="rounded-[2rem] border-2 border-on-dark/20 bg-on-dark/10 p-6 backdrop-blur-md">
                  <p className="font-display text-5xl font-bold text-butter">{s.n}</p>
                  <p className="mt-1 text-on-dark/80">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="relative grid items-center gap-10 overflow-hidden rounded-[3rem] border-[3px] border-ink bg-mint p-10 shadow-pop md:grid-cols-2 md:p-16">
        <div>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cherry">Fresh · Balanced · Varied</span>
          <h2 className="mt-3 text-4xl font-bold leading-none md:text-5xl">Yummy food for growing tummies</h2>
          <p className="mt-4 text-lg">From porridge with mashed banana to salmon and sweet potato fish pie — see what your little one is eating this week.</p>
          <Link to="/menu" className="btn-pop mt-8">See the weekly menu <IconArrow className="h-5 w-5" /></Link>
        </div>
        <Parallax speed={-0.2} rotate={8}>
          <img src={food} alt="Fruit, porridge and milk illustration" width={1024} height={1024} loading="lazy" className="mx-auto w-full max-w-sm drop-shadow-2xl" />
        </Parallax>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <SectionTitle kicker="FAQs" center>Questions parents ask</SectionTitle>
      <div className="mt-12 space-y-4">
        {FAQS.map((f, i) => {
          const on = open === i;
          return (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className={`overflow-hidden rounded-3xl border-[2.5px] border-ink transition-colors ${on ? "bg-butter shadow-pop-sm" : "bg-card"}`}>
                <button onClick={() => setOpen(on ? null : i)} aria-expanded={on} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                  <span className="font-display text-xl font-semibold">{f.q}</span>
                  <motion.span animate={{ rotate: on ? 135 : 0 }} transition={{ type: "spring", stiffness: 260, damping: 14 }} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink bg-cherry text-primary-foreground">
                    <IconPlus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ type: "spring", stiffness: 160, damping: 20 }}>
                      <p className="px-6 pb-6 text-lg">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[3rem] border-[3px] border-ink bg-cherry p-12 text-center text-primary-foreground shadow-pop md:p-20">
          <div className="dotted absolute inset-0 opacity-30" />
          <Sparkle className="absolute left-10 top-10 h-10 w-10 text-butter animate-wiggle" />
          <Sparkle className="absolute bottom-12 right-14 h-8 w-8 text-sky animate-wiggle" />
          <h2 className="relative text-5xl font-bold leading-none md:text-7xl">Come and say hello!</h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg">Book a visit and see why little ones never want to leave.</p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-ghost">Book a Visit <IconArrow className="h-5 w-5" /></Link>
            <a href={SITE.phoneHref} className="btn-ghost"><IconPhone className="h-5 w-5" /> {SITE.phone}</a>
          </div>
          <div className="relative mt-10 flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2"><IconPin className="h-4 w-4" />{SITE.address}</span>
            <span className="flex items-center gap-2"><IconClock className="h-4 w-4" />{SITE.hours}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Programmes />
      <Services />
      <WhyUs />
      <Reviews />
      <Trust />
      <MenuTeaser />
      <Faq />
      <Cta />
    </>
  );
}
