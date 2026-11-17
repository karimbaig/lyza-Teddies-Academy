import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import teddy from "@/assets/teddy-reading.png";
import s1 from "@/assets/nl/sep-1.jpg.asset.json";
import s2 from "@/assets/nl/sep-2.jpg.asset.json";
import s3 from "@/assets/nl/sep-3.jpg.asset.json";
import o1 from "@/assets/nl/oct-1.jpg.asset.json";
import o2 from "@/assets/nl/oct-2.jpg.asset.json";
import o3 from "@/assets/nl/oct-3.jpg.asset.json";
import o4 from "@/assets/nl/oct-4.jpg.asset.json";
import o5 from "@/assets/nl/oct-5.jpg.asset.json";
import sepPdf from "@/assets/nl/sep.pdf.asset.json";
import octPdf from "@/assets/nl/oct.pdf.asset.json";
import { IconArrow, IconDownload } from "@/components/Icons";

const D = "Read the Lyza's Teddies Academy monthly newsletters as a page-turning flip-book — news, learning themes and celebrations from our Canary Wharf nursery.";
export const Route = createFileRoute("/newsletter")({
  head: () => ({ meta: [
    { title: "Newsletters | Lyza's Teddies Academy" },
    { name: "description", content: D },
    { property: "og:title", content: "Nursery Newsletters — Lyza's Teddies Academy" },
    { property: "og:description", content: D },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: NewsletterPage,
});

const ISSUES = [
  { id: "oct", title: "October 2026", tone: "bg-butter", pages: [o1, o2, o3, o4, o5].map((p) => p.url), pdf: octPdf.url },
  { id: "sep", title: "September 2026", tone: "bg-sky", pages: [s1, s2, s3].map((p) => p.url), pdf: sepPdf.url },
];

function FlipBook({ pages, title }: { pages: string[]; title: string }) {
  const [[page, dir], set] = useState<[number, number]>([0, 0]);
  const go = (n: number) => { if (n >= 0 && n < pages.length) set([n, n > page ? 1 : -1]); };
  return (
    <div>
      <div className="relative mx-auto aspect-[990/1400] w-full max-w-xl" style={{ perspective: 2400 }}>
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.5rem] border-[3px] border-ink bg-bubble" />
        <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[1.5rem] border-[3px] border-ink bg-card" />
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={page}
            src={pages[page]}
            alt={`${title} newsletter, page ${page + 1}`}
            custom={dir}
            variants={{
              enter: (d: number) => ({ rotateY: d > 0 ? 90 : -90, opacity: 0.4 }),
              center: { rotateY: 0, opacity: 1 },
              exit: (d: number) => ({ rotateY: d > 0 ? -100 : 100, opacity: 0, zIndex: 2 }),
            }}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.7, ease: [0.6, 0, 0.2, 1] }}
            style={{ transformOrigin: dir >= 0 ? "left center" : "right center", backfaceVisibility: "hidden" }}
            drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.3}
            onDragEnd={(_, info) => { if (info.offset.x < -80) go(page + 1); else if (info.offset.x > 80) go(page - 1); }}
            className="absolute inset-0 h-full w-full cursor-grab rounded-[1.5rem] border-[3px] border-ink bg-card object-contain active:cursor-grabbing"
          />
        </AnimatePresence>
        <button onClick={() => go(page - 1)} disabled={page === 0} aria-label="Previous page" className="absolute -left-4 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border-[2.5px] border-ink bg-card shadow-pop-sm disabled:opacity-30 md:-left-8"><IconArrow className="h-6 w-6 rotate-180" /></button>
        <button onClick={() => go(page + 1)} disabled={page === pages.length - 1} aria-label="Next page" className="absolute -right-4 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border-[2.5px] border-ink bg-cherry text-primary-foreground shadow-pop-sm disabled:opacity-30 md:-right-8"><IconArrow className="h-6 w-6" /></button>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {pages.map((p, i) => (
          <button key={p} onClick={() => go(i)} aria-label={`Go to page ${i + 1}`}
            className={`overflow-hidden rounded-xl border-[2.5px] border-ink transition-all ${i === page ? "-translate-y-2 rotate-[-3deg] shadow-pop-sm" : "opacity-60 hover:opacity-100"}`}>
            <img src={p} alt="" className="h-24 w-[4.25rem] object-cover" loading="lazy" />
          </button>
        ))}
      </div>
      <p className="mt-4 text-center font-display text-muted-foreground">Page {page + 1} of {pages.length} · swipe or tap the arrows to turn</p>
    </div>
  );
}

function NewsletterPage() {
  const [active, setActive] = useState(0);
  const issue = ISSUES[active] ?? ISSUES[0]!;
  return (
    <>
      <PageHero kicker="Monthly news" title={<>Our nursery <span className="text-rainbow">newsletters</span></>} art={teddy}>
        Curl up and flip through what our little ones have been learning, making and celebrating each month.
      </PageHero>
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4">
          {ISSUES.map((is, i) => (
            <motion.button key={is.id} onClick={() => setActive(i)} whileHover={{ rotate: -2, y: -4 }}
              className={`rounded-3xl border-[2.5px] border-ink px-7 py-4 font-display text-xl font-semibold ${i === active ? `${is.tone} shadow-pop-sm` : "bg-card"}`}>
              {is.title}
            </motion.button>
          ))}
        </div>
        <div className="mt-14">
          <FlipBook key={issue.id} pages={issue.pages} title={issue.title} />
        </div>
        <div className="mt-10 text-center">
          <a href={issue.pdf} target="_blank" rel="noreferrer" className="btn-pop"><IconDownload className="h-5 w-5" /> Download {issue.title} PDF</a>
        </div>
      </section>
    </>
  );
}
