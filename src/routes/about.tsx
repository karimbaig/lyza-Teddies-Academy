import { ChildcareApproach } from "@/components/ChildcareApproach";
import { NurseryGallery } from "@/components/NurseryGallery";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Reveal, Parallax } from "@/components/Motion";
import { PROGRAMMES } from "@/lib/site";
import reading from "@/assets/teddy-reading.webp";
import { NURSERY_FEATURE } from "@/lib/nursery-photos";
import { IconHeart, IconShield, IconBook, IconTree, IconSun, IconPaw, IconArrow, RainbowArc } from "@/components/Icons";

const D = "Meet Lyza's Teddies Academy: a warm, EYFS-led nursery in Canary Wharf founded in 2023, blending Montessori and Reggio Emilia-inspired play for ages 3 months to 7 years.";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us | Lyza's Teddies Academy, Canary Wharf Nursery" },
    { name: "description", content: D },
    { property: "og:title", content: "About Lyza's Teddies Academy" },
    { property: "og:description", content: D },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: About,
});

const values = [
  { t: "Love first", d: "Children learn best when they feel safe, known and loved.", I: IconHeart, c: "bg-bubble" },
  { t: "Safety always", d: "Secure entry, CCTV and DBS-checked, first-aid trained staff.", I: IconShield, c: "bg-sky" },
  { t: "Learning through play", d: "EYFS with Montessori and Reggio Emilia inspiration.", I: IconBook, c: "bg-butter" },
  { t: "Outdoors every day", d: "Fresh air, nature walks and garden adventures.", I: IconTree, c: "bg-mint" },
  { t: "Every child celebrated", d: "We follow each child's interests and pace.", I: IconSun, c: "bg-lilac" },
  { t: "Partnership with parents", d: "Regular updates, newsletters and an open door.", I: IconPaw, c: "bg-bubble" },
];

const journey = [
  { y: "2023", t: "The doors open", d: "Lyza opens a cosy, home-from-home setting in Canary Wharf." },
  { y: "Every day", t: "Little Cubs to Pioneers", d: "Three age groups, each with its own carefully crafted curriculum." },
  { y: "Today", t: "5.0 on Google", d: "Families recommend us for warm care, updates and happy children." },
];

function About() {
  return (
    <>
      <PageHero kicker="About us" title={<>A second home for <span className="text-rainbow">little ones</span></>} art={reading}>
        Founded with a passion for early years education, we create a safe, stimulating environment where imagination thrives and little personalities flourish.
      </PageHero>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-bold leading-none md:text-5xl">Our story</h2>
          <p className="mt-6 text-lg text-muted-foreground">Lyza's Teddies Academy provides an exceptional learning environment where children aged 3 months to 7 years discover, explore and grow. Our approach blends structured learning with the freedom of creative play.</p>
          <p className="mt-4 text-lg text-muted-foreground">Every room through the setting is thoughtfully designed to spark curiosity. From our cosy reading nooks filled with teddy bears to our vibrant learning spaces, each area invites children to learn through wonder and joy.</p>
          <p className="mt-4 text-lg text-muted-foreground">Parents tell us what they value most is the warmth: knowing their child is cared for like family, and hearing all about their day — the activities, the outdoor adventures and every new milestone.</p>
        </Reveal>
        <div className="relative h-[25rem] sm:h-[30rem]">
          <Parallax speed={0.2} className="absolute right-0 top-0 w-[70%]"><img src={NURSERY_FEATURE.story.src} alt={NURSERY_FEATURE.story.alt} width={1200} height={900} loading="lazy" className="aspect-[4/5] rounded-[2.5rem] border-[3px] border-ink object-cover shadow-pop" /></Parallax>
          <Parallax speed={-0.2} rotate={5} className="absolute bottom-0 left-0 w-[50%]"><img src={NURSERY_FEATURE.creative.src} alt={NURSERY_FEATURE.creative.alt} width={1200} height={675} loading="lazy" className="aspect-square -rotate-3 rounded-[2rem] border-[3px] border-ink object-cover shadow-pop" /></Parallax>
        </div>
      </section>

      <ChildcareApproach />
      <NurseryGallery />

      <section className="bg-ink py-24 text-on-dark">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold md:text-6xl">What we <span className="text-butter">believe</span></h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={(i % 3) * 0.1}>
                <motion.div whileHover={{ y: -10, rotate: i % 2 ? 2 : -2 }} className="h-full rounded-[2rem] border-[3px] border-ink bg-card p-8 text-ink shadow-[0_8px_0_0_var(--bubble)]">
                  <div className={`grid h-20 w-20 place-items-center rounded-3xl border-2 border-ink ${v.c}`}><v.I className="h-12 w-12" /></div>
                  <h3 className="mt-5 text-2xl font-semibold">{v.t}</h3>
                  <p className="mt-2 text-muted-foreground">{v.d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-center text-4xl font-bold md:text-6xl">Our journey</h2>
        <div className="relative mt-16">
          <div className="absolute left-6 top-0 h-full w-1.5 rounded-full bg-rainbow md:left-1/2 md:-translate-x-1/2" />
          {journey.map((j, i) => (
            <Reveal key={j.t} className={`relative mb-12 pl-20 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-14" : "md:pr-14 md:text-right"}`}>
              <span className={`absolute left-2 top-2 h-10 w-10 rounded-full border-[3px] border-ink bg-butter md:top-6 ${i % 2 ? "md:-left-5" : "md:left-auto md:-right-5"}`} />
              <div className="rounded-[2rem] border-[2.5px] border-ink bg-card p-7 shadow-pop-sm">
                <p className="font-display text-lg font-semibold text-cherry">{j.y}</p>
                <h3 className="text-2xl font-bold">{j.t}</h3>
                <p className="mt-2 text-muted-foreground">{j.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <Parallax speed={0.3} className="absolute -left-10 top-0 w-72 opacity-70"><RainbowArc /></Parallax>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {PROGRAMMES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className={`h-full rounded-[2rem] border-[3px] border-ink p-8 shadow-pop ${["bg-bubble", "bg-sky", "bg-butter"][i]}`}>
                <p className="font-display font-semibold">{p.age}</p>
                <h3 className="mt-2 text-3xl font-bold">{p.name}</h3>
                <p className="mt-3">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[3rem] border-[3px] border-ink shadow-pop">
            <img src={NURSERY_FEATURE.community.src} alt={NURSERY_FEATURE.community.alt} width={1200} height={900} loading="lazy" className="h-[26rem] w-full object-cover" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 to-transparent p-6 md:p-10">
              <div className="text-on-dark">
                <h2 className="text-4xl font-bold">Come and see us in action</h2>
                <Link to="/contact" className="btn-pop mt-5">Book a Visit <IconArrow className="h-5 w-5" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
