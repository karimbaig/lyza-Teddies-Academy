import { assetUrl } from "@/lib/assets";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg.asset.json";
import teddy from "@/assets/teddy-mascot.webp";
import { SITE } from "@/lib/site";
import { IconPhone, IconPin, IconClock, IconStar, Cloud, Sparkle } from "./Icons";
import { Parallax } from "./Motion";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-on-dark">
      <svg viewBox="0 0 1440 80" className="absolute -top-px left-0 w-full text-background" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0 0h1440v30c-120 40-240 40-360 0s-240-40-360 0-240 40-360 0S120-10 0 30Z" />
      </svg>
      <Cloud className="absolute left-0 top-24 w-40 text-on-dark/5 animate-drift" />
      <Sparkle className="absolute right-[12%] top-28 h-6 w-6 text-butter animate-floaty" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-10 pt-28 md:grid-cols-12">
        <div className="md:col-span-4">
          <img src={assetUrl(logo)} alt={`${SITE.name} logo`} width={160} height={96} loading="lazy" className="h-24 w-40 rounded-lg bg-card object-contain" />
          <p className="mt-5 max-w-sm text-on-dark/75">
            A warm, home-from-home nursery in Canary Wharf where children aged 3 months to 7 years learn, play and grow — since 2023.
          </p>
          <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-on-dark/10 px-4 py-2">
            <span className="flex text-butter">{Array.from({ length: 5 }).map((_, i) => <IconStar key={i} className="h-4 w-4" />)}</span>
            <span className="font-display font-semibold">5.0 on Google</span>
          </a>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-display text-xl text-butter">Explore</h3>
          <ul className="mt-4 space-y-2 text-on-dark/80">
            {([["/", "Home"], ["/about", "About Us"], ["/menu", "Weekly Menu"], ["/newsletter", "Newsletters"], ["/contact", "Contact"]] as const).map(([to, l]) => (
              <li key={to}><Link to={to} className="transition hover:text-bubble">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="font-display text-xl text-butter">Programmes</h3>
          <ul className="mt-4 space-y-2 text-on-dark/80">
            <li>Little Cubs · 3m – 2y</li>
            <li>Creative Explorers · 2 – 3y</li>
            <li>Pre-School Pioneers · 3 – 7y</li>
            <li>EYFS · Montessori · Reggio Emilia</li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="font-display text-xl text-butter">Visit us</h3>
          <ul className="mt-4 space-y-3 text-on-dark/80">
            <li className="flex gap-3"><IconPin className="mt-0.5 h-5 w-5 shrink-0 text-bubble" />{SITE.address}</li>
            <li className="flex gap-3"><IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-sky" /><a href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li className="flex gap-3"><IconClock className="mt-0.5 h-5 w-5 shrink-0 text-butter" />{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-on-dark/10 px-6 py-6 text-sm text-on-dark/60 md:flex-row">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p className="font-display tracking-[0.3em] text-bubble">LEARN · PLAY · GROW</p>
      </div>
      <Parallax speed={0.15} className="pointer-events-none absolute -bottom-10 right-4 hidden w-44 md:block">
        <img src={teddy} alt="" width={1024} height={1024} loading="lazy" className="animate-wiggle" />
      </Parallax>
    </footer>
  );
}
