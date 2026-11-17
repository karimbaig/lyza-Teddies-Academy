import { Link, ClientOnly } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { lazy, Suspense, useRef } from "react";
import teddy from "@/assets/teddy-mascot.png";
import toys from "@/assets/toys.png";
import { Cloud, Sparkle, IconStar, GoogleG, IconArrow } from "../Icons";
import { SITE } from "@/lib/site";

const HeroScene = lazy(() => import("../HeroScene"));

const word = { hidden: { y: "110%" }, show: (i: number) => ({ y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 14, delay: 0.2 + i * 0.08 } }) };

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[110vh] overflow-hidden bg-sunrise pt-28">
      {/* sky layer */}
      <motion.div style={{ y: yBack }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-butter/60 blur-3xl" />
        <Cloud className="absolute left-[3%] top-32 w-48 text-card animate-floaty" />
        <Cloud className="absolute right-[5%] top-24 w-64 text-card animate-floaty [animation-delay:-2s]" />
        <Cloud className="absolute left-[40%] top-[60%] w-40 text-card/70 animate-floaty [animation-delay:-4s]" />
        <Sparkle className="absolute left-[20%] top-[22%] h-6 w-6 text-cherry animate-wiggle" />
        <Sparkle className="absolute right-[24%] top-[40%] h-8 w-8 text-sky animate-wiggle [animation-delay:-1s]" />
      </motion.div>

      {/* 3D */}
      <motion.div style={{ y: yMid, scale, opacity: fade }} className="absolute inset-x-0 top-20 h-[80vh]">
        <ClientOnly fallback={null}>
          <Suspense fallback={null}><HeroScene /></Suspense>
        </ClientOnly>
      </motion.div>

      <motion.div style={{ y: yText, opacity: fade }} className="relative z-30 mx-auto max-w-6xl px-6 pt-6 text-center">
        <motion.a
          href={SITE.mapsUrl} target="_blank" rel="noreferrer"
          initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: -2 }} transition={{ type: "spring", delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-2 shadow-pop-sm"
        >
          <GoogleG className="h-5 w-5" />
          <span className="flex text-butter drop-shadow-[0_1px_0_var(--ink)]">{Array.from({ length: 5 }).map((_, i) => <IconStar key={i} className="h-4 w-4" />)}</span>
          <span className="font-display font-semibold">5.0 · loved by Canary Wharf families</span>
        </motion.a>

        <h1 className="mt-8 font-display text-[clamp(3.2rem,10vw,9rem)] font-bold leading-[0.88] tracking-tight">
          {["Nurturing", "curious", "little", "minds"].map((w, i) => (
            <span key={w} className="inline-block overflow-hidden pb-2 align-bottom">
              <motion.span custom={i} variants={word} initial="hidden" animate="show" className={`mx-[0.12em] inline-block ${i === 1 ? "text-rainbow" : i === 3 ? "text-cherry" : ""}`}>
                {w}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mx-auto mt-6 max-w-2xl rounded-3xl bg-card/85 px-6 py-4 text-lg font-semibold text-foreground shadow-clay backdrop-blur-md md:text-xl">
          A home-from-home nursery in the heart of Canary Wharf for children aged 3 months to 7 years — where imagination thrives and little personalities flourish.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-pop">Book a Visit <IconArrow className="h-5 w-5" /></Link>
          <Link to="/about" className="btn-ghost">Meet the Academy</Link>
        </motion.div>
      </motion.div>

      {/* foreground characters */}
      <motion.img
        src={teddy} alt="Lyza's Teddies mascot bear waving hello" width={1024} height={1024}
        style={{ y: yFront }}
        initial={{ x: -200, opacity: 0, rotate: -20 }} animate={{ x: 0, opacity: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
        className="absolute -bottom-6 left-[-2rem] z-20 w-56 drop-shadow-2xl md:left-[2%] md:w-60 xl:w-72"
      />
      <motion.img
        src={toys} alt="" width={1024} height={1024}
        style={{ y: yFront }}
        initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
        className="absolute -bottom-4 right-[-2rem] z-20 w-56 drop-shadow-2xl md:right-[2%] md:w-60 xl:w-72"
      />
      {/* hills */}
      <svg viewBox="0 0 1440 220" className="absolute -bottom-px left-0 z-10 w-full" preserveAspectRatio="none" aria-hidden>
        <path className="fill-mint" d="M0 120C240 40 480 40 720 110s480 80 720 0v110H0Z" />
        <path className="fill-background" d="M0 170c240-50 480-50 720 0s480 50 720 0v50H0Z" />
      </svg>
    </section>
  );
}
