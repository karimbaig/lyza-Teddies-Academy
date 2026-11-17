import { useIsMobile } from "@/hooks/use-mobile";
import { Link, ClientOnly } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { lazy, Suspense, useRef, useEffect, useState } from "react";
import teddy from "@/assets/teddy-mascot.webp";
import toys from "@/assets/toys.webp";
import { Cloud, Sparkle, IconStar, GoogleG, IconArrow } from "../Icons";
import { SITE } from "@/lib/site";

const HeroScene = lazy(() => import("../HeroScene"));

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mobile = useIsMobile();
  const reduced = useReducedMotion();
  const [sceneReady, setSceneReady] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)").matches) return;
    const timer = window.setTimeout(() => setSceneReady(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);
  const staticMotion = mobile || reduced;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -220]);

  return (
    <section ref={ref} className="relative hero-section overflow-hidden bg-sky/25 pt-28">
      {/* sky layer */}
      <motion.div style={{ y: staticMotion ? 0 : yBack }} className="pointer-events-none absolute inset-0">
        <Cloud className="absolute left-[3%] top-32 w-48 text-card animate-floaty" />
        <Cloud className="absolute right-[5%] top-24 w-64 text-card animate-floaty [animation-delay:-2s]" />
        <Cloud className="absolute left-[40%] top-[60%] w-40 text-card/70 animate-floaty [animation-delay:-4s]" />
        <Sparkle className="absolute left-[20%] top-[22%] h-6 w-6 text-cherry animate-wiggle" />
        <Sparkle className="absolute right-[24%] top-[40%] h-8 w-8 text-sky animate-wiggle [animation-delay:-1s]" />
      </motion.div>

      {/* 3D */}
      <motion.div className="absolute bottom-0 left-1/2 h-[110px] w-[420px] -translate-x-1/2 overflow-hidden">
        <ClientOnly fallback={null}>
          {sceneReady && <Suspense fallback={null}><HeroScene /></Suspense>}
        </ClientOnly>
      </motion.div>

      <motion.div style={{ y: 0 }} className="relative z-30 mx-auto max-w-6xl px-5 pt-6 text-center">
        <motion.a
          href={SITE.mapsUrl} target="_blank" rel="noreferrer"
          initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: -2 }} transition={{ type: "spring", delay: 0.1 }}
          className="inline-flex max-w-full flex-wrap justify-center items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-2 shadow-pop-sm"
        >
          <GoogleG className="h-5 w-5" />
          <span className="flex text-butter drop-shadow-[0_1px_0_var(--ink)]">{Array.from({ length: 5 }).map((_, i) => <IconStar key={i} className="h-4 w-4" />)}</span>
          <span className="font-display font-semibold">5.0 · loved by local families</span>
        </motion.a>

        <h1 className="hero-title mt-7 font-display font-bold leading-none">Lyza's Teddies<br /><span className="text-cherry">Academy</span></h1>
        <p className="mt-5 font-display text-2xl font-medium md:text-3xl">Nurturing curious little minds</p>
        <motion.p initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-relaxed text-foreground md:text-lg">
          A home-from-home nursery in the heart of Canary Wharf for children aged 3 months to 7 years — where imagination thrives and little personalities flourish.
        </motion.p>
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-pop">Book a Visit <IconArrow className="h-5 w-5" /></Link>
          <Link to="/about" className="btn-ghost">Meet the Academy</Link>
        </motion.div>
      </motion.div>

      {/* foreground characters */}
      <motion.img
        src={teddy} alt="Lyza's Teddies mascot bear waving hello" width={1024} height={1024}
        style={{ y: staticMotion ? 0 : yFront }}
        initial={{ x: -200, opacity: 0, rotate: -20 }} animate={{ x: 0, opacity: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
        className="hero-teddy absolute bottom-0 left-0 z-20 w-32 drop-shadow-2xl md:left-[2%] md:w-44 xl:w-60"
      />
      <motion.img
        src={toys} alt="" width={1024} height={1024}
        style={{ y: staticMotion ? 0 : yFront }}
        initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
        className="hero-toys absolute bottom-0 right-0 z-20 w-32 drop-shadow-2xl md:right-[2%] md:w-44 xl:w-60"
      />
      {/* hills */}
      <svg viewBox="0 0 1440 220" className="absolute -bottom-px left-0 z-10 w-full" preserveAspectRatio="none" aria-hidden>
        <path className="fill-mint" d="M0 120C240 40 480 40 720 110s480 80 720 0v110H0Z" />
        <path className="fill-background" d="M0 170c240-50 480-50 720 0s480 50 720 0v50H0Z" />
      </svg>
    </section>
  );
}
