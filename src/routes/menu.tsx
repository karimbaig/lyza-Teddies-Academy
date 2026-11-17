import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/assets";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Motion";
import { MENU, MENU_NOTES } from "@/lib/site";
import food from "@/assets/food.webp";
import menuPdf from "@/assets/menu.pdf.asset.json";
import { IconSun, IconApple, IconHeart, IconPalette, IconBook, IconDownload, IconShield } from "@/components/Icons";

const MotionButton = motion.create(Button);

const D = "See this week's fresh, balanced nursery menu at Lyza's Teddies Academy — breakfast, snacks, lunch and tea for every weekday, following DfE early years nutrition guidance.";
export const Route = createFileRoute("/menu")({
  head: () => ({ meta: [
    { title: "Weekly Nursery Menu | Lyza's Teddies Academy" },
    { name: "description", content: D },
    { property: "og:title", content: "Weekly Nursery Menu — Lyza's Teddies Academy" },
    { property: "og:description", content: D },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: MenuPage,
});

const tone: Record<string, string> = { bubble: "bg-bubble", sky: "bg-sky", butter: "bg-butter", mint: "bg-mint", lilac: "bg-lilac" };
const mealIcon: Record<string, typeof IconSun> = { Breakfast: IconSun, "Morning snack": IconApple, Lunch: IconHeart, "Afternoon snack": IconPalette, Tea: IconBook };

function MenuPage() {
  const [d, setD] = useState(0);
  const day = MENU[d] ?? MENU[0];
  if (!day) return null;
  return (
    <>
      <PageHero kicker="Fresh · Balanced · Varied" title={<>Our weekly <span className="text-rainbow">menu</span></>} art={food}>
        A varied Monday–Friday menu for children aged 1 year and over, lovingly prepared to keep little tummies happy.
        <div className="mt-6"><a href={assetUrl(menuPdf)} target="_blank" rel="noreferrer" className="btn-ghost"><IconDownload className="h-5 w-5" /> Download PDF menu</a></div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap justify-center gap-3">
          {MENU.map((m, i) => (
            <MotionButton variant="plain" key={m.day} onClick={() => setD(i)} whileHover={{ y: -4 }} whileTap={{ scale: 0.92 }}
              className={`rounded-full border-[2.5px] border-ink px-6 py-3 font-display text-lg font-semibold transition-all ${i === d ? `${tone[m.tone]} shadow-pop-sm -translate-y-1` : "bg-card"}`}>
              {m.day}
            </MotionButton>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={day.day}
            initial={{ opacity: 0, rotateX: -25, y: 40 }} animate={{ opacity: 1, rotateX: 0, y: 0 }} exit={{ opacity: 0, rotateX: 25, y: -40 }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }} style={{ transformPerspective: 1400 }}
            className={`mt-10 rounded-[3rem] border-[3px] border-ink p-6 shadow-pop md:p-10 ${tone[day.tone]}`}>
            <h2 className="text-center text-5xl font-bold md:text-6xl">{day.day}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {day.meals.map((m, i) => {
                const I = mealIcon[m.label] ?? IconSun;
                return (
                  <motion.div key={m.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + i * 0.07, type: "spring" }}
                    className={`rounded-[2rem] border-[2.5px] border-ink bg-card p-6 ${i === 2 ? "lg:row-span-2" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-ink bg-butter"><I className="h-8 w-8" /></span>
                      <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-cherry">{m.label}</h3>
                    </div>
                    <p className="mt-4 font-display text-xl font-medium leading-snug">{m.dish}</p>
                    {m.second && <p className="mt-3 rounded-2xl bg-muted px-4 py-2 text-sm"><b>Second dish:</b> {m.second}</p>}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-10 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[2.5rem] border-[3px] border-ink bg-sky/40 p-8">
            <h2 className="text-3xl font-bold">Babies aged 6–12 months</h2>
            <p className="mt-4 text-muted-foreground">{MENU_NOTES.babies}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-[2.5rem] border-[3px] border-ink bg-butter/50 p-8">
            <h2 className="flex items-center gap-3 text-3xl font-bold"><IconShield className="h-10 w-10" /> Safe serving</h2>
            <ul className="mt-4 space-y-3">
              {MENU_NOTES.safe.map((s) => <li key={s} className="flex gap-3 text-muted-foreground"><span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cherry" />{s}</li>)}
            </ul>
          </div>
        </Reveal>
        <p className="text-sm text-muted-foreground md:col-span-2">Sample weekly menu for England early-years settings, based on DfE Early Years Foundation Stage nutrition guidance. Recipes are checked against each child's individual plan before serving.</p>
      </section>
    </>
  );
}
