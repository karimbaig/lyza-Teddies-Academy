import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef, type ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 40, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 90, damping: 16, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

/** Element that moves at a different speed while its section scrolls past. */
export function Parallax({ children, speed = 0.3, rotate = 0, className }: { children: ReactNode; speed?: number; rotate?: number; className?: string }) {
  const mobile = useIsMobile();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 300, -speed * 300]);
  const r = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);
  return (
    <motion.div ref={ref} style={{ y: mobile || reduced ? 0 : y, rotate: mobile || reduced ? 0 : r }} className={className}>
      {children}
    </motion.div>
  );
}

export function useSectionProgress() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return { ref, progress: scrollYProgress as MotionValue<number> };
}
