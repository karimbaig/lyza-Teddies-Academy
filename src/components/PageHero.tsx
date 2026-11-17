import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Cloud, Sparkle, RainbowArc } from "./Icons";

export function PageHero({ kicker, title, children, art }: { kicker: string; title: ReactNode; children?: ReactNode; art?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, 40]);
  return (
    <section ref={ref} className="relative overflow-hidden bg-sunrise pb-28 pt-40">
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <Cloud className="absolute left-[4%] top-28 w-44 text-card animate-floaty" />
        <Cloud className="absolute right-[8%] top-44 w-60 text-card/80 animate-floaty [animation-delay:-3s]" />
      </motion.div>
      <motion.div style={{ rotate: rot }} className="absolute -right-10 top-24 opacity-70">
        <Sparkle className="h-12 w-12 text-butter" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute -left-16 bottom-0 w-72 opacity-80">
        <RainbowArc />
      </motion.div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="inline-block rotate-[-3deg] rounded-full border-2 border-ink bg-butter px-4 py-1 font-display font-semibold">
            {kicker}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", delay: 0.1 }} className="mt-5 text-5xl font-bold leading-[0.95] md:text-7xl">
            {title}
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-xl text-lg text-muted-foreground">
            {children}
          </motion.div>
        </div>
        {art && (
          <motion.img
            src={art} alt="" width={1024} height={1024}
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 70, delay: 0.2 }}
            className="mx-auto w-full max-w-sm animate-floaty drop-shadow-2xl"
          />
        )}
      </div>
      <svg viewBox="0 0 1440 60" className="absolute -bottom-px left-0 w-full text-background" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0 60V30c180-40 360-40 540 0s360 40 540 0 270-30 360-10v40Z" />
      </svg>
    </section>
  );
}
