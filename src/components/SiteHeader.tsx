import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import logo from "@/assets/logo.jpg.asset.json";
import { IconMenu, IconClose, IconPhone } from "./Icons";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home", tone: "bg-bubble" },
  { to: "/about", label: "About", tone: "bg-sky" },
  { to: "/menu", label: "Menu", tone: "bg-butter" },
  { to: "/newsletter", label: "Newsletter", tone: "bg-mint" },
  { to: "/contact", label: "Contact", tone: "bg-lilac" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setSmall(v > 40));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0, maxWidth: small ? 1040 : 1240 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="flex w-full items-center justify-between gap-4 rounded-full border-[2.5px] border-ink bg-card/90 py-2 pl-3 pr-2 shadow-pop-sm backdrop-blur-md"
      >
        <Link to="/" className="flex items-center gap-2" aria-label={`${SITE.name} home`}>
          <img src={logo.url} alt={`${SITE.name} logo`} className={`w-auto rounded-xl transition-all ${small ? "h-14" : "h-[4.5rem]"}`} />
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                className="group relative block rounded-full px-4 py-2 font-display text-[1.02rem] font-medium"
                activeProps={{ className: "is-active" }}
                activeOptions={{ exact: true }}
              >
                <span className={`absolute inset-0 -z-0 scale-50 rounded-full opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:opacity-100 ${n.tone}`} />
                <span className="relative">{n.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} className="hidden items-center gap-2 rounded-full px-3 py-2 font-display font-medium md:flex">
            <IconPhone className="h-4 w-4" /> 07845 589174
          </a>
          <Link to="/contact" className="btn-pop hidden !py-2.5 sm:inline-flex">Book a Visit</Link>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-full border-[2.5px] border-ink bg-butter lg:hidden">
            <IconMenu className="h-5 w-5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-ink p-6 text-on-dark"
            initial={{ clipPath: "circle(0% at 95% 4%)" }}
            animate={{ clipPath: "circle(150% at 95% 4%)" }}
            exit={{ clipPath: "circle(0% at 95% 4%)" }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
          >
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="ml-auto grid h-12 w-12 place-items-center rounded-full bg-cherry">
              <IconClose className="h-6 w-6" />
            </button>
            <ul className="mt-8 space-y-3">
              {NAV.map((n, i) => (
                <motion.li key={n.to} initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.07 }}>
                  <Link to={n.to} onClick={() => setOpen(false)} className="flex items-center gap-4 font-display text-5xl font-semibold">
                    <span className={`h-4 w-4 rounded-full ${n.tone}`} /> {n.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a href={SITE.phoneHref} className="btn-pop mt-auto self-start">
              <IconPhone className="h-5 w-5" /> Call {SITE.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
