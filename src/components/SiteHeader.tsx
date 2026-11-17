import { assetUrl } from "@/lib/assets";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import logo from "@/assets/logo.jpg.asset.json";
import { IconMenu, IconPhone } from "./Icons";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
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
        className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center justify-between gap-2 sm:gap-4 xl:flex rounded-full border-[2.5px] border-ink bg-card/90 py-2 pl-3 pr-2 shadow-pop-sm backdrop-blur-md"
      >
        <Link to="/" className="flex min-w-0 items-center gap-2" aria-label={`${SITE.name} home`}>
          <img src={assetUrl(logo)} alt={`${SITE.name} logo`} width={160} height={96} fetchPriority="high" className={`w-28 shrink-0 rounded-lg object-contain transition-all sm:w-36 ${small ? "h-14 sm:h-16" : "h-16 sm:h-20"}`} />
        </Link>
        <ul className="hidden items-center gap-1 xl:flex">
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
        <div className="flex shrink-0 items-center gap-2">
          <a href={SITE.phoneHref} className="hidden items-center gap-2 rounded-full px-3 py-2 font-display font-medium 2xl:flex">
            <IconPhone className="h-4 w-4" /> 07845 589174
          </a>
          <Link to="/contact" className="btn-pop hidden !py-2.5 sm:inline-flex">Book a Visit</Link>
          <Button variant="plain" onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-full border-[2.5px] border-ink bg-butter xl:hidden">
            <IconMenu className="h-5 w-5" />
          </Button>
        </div>
      </motion.nav>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="h-[100dvh] max-w-none border-0 bg-background p-6 pt-16" aria-describedby="menu-description">
          <DialogTitle className="font-display text-2xl">Lyza's Teddies Academy</DialogTitle>
          <DialogDescription id="menu-description" className="sr-only">Choose a page</DialogDescription>
          <ul className="space-y-5">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} onClick={() => setOpen(false)} className="flex items-center gap-4 font-display text-4xl font-semibold"><span className={`h-4 w-4 shrink-0 rounded-full ${n.tone}`} />{n.label}</Link></li>)}
          </ul>
          <a href={SITE.phoneHref} className="btn-pop self-end justify-self-start"><IconPhone className="h-5 w-5" />Call {SITE.phone}</a>
        </DialogContent>
      </Dialog>
    </header>
  );
}
