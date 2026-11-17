import type { SVGProps } from "react";
type P = SVGProps<SVGSVGElement>;
const base = { viewBox: "0 0 64 64", fill: "none", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, stroke: "currentColor" };

export const IconShield = (p: P) => (<svg {...base} {...p}><path d="M32 6 10 14v16c0 14 9.5 23.5 22 28 12.5-4.5 22-14 22-28V14L32 6Z" fill="var(--sky)"/><path d="m22 32 7 7 13-14"/></svg>);
export const IconHeart = (p: P) => (<svg {...base} {...p}><path d="M32 54S8 40 8 23a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 17-24 31-24 31Z" fill="var(--bubble)"/><path d="M18 22a6 6 0 0 1 6-6"/></svg>);
export const IconBook = (p: P) => (<svg {...base} {...p}><path d="M32 16c-6-5-14-6-22-5v38c8-1 16 0 22 5 6-5 14-6 22-5V11c-8-1-16 0-22 5Z" fill="var(--butter)"/><path d="M32 16v38"/></svg>);
export const IconPalette = (p: P) => (<svg {...base} {...p}><path d="M32 8C18 8 8 18 8 31s10 25 22 25c4 0 5-3 3-6s0-7 4-7h7c7 0 12-5 12-12C56 18 45 8 32 8Z" fill="var(--butter)"/><circle cx="21" cy="26" r="4" fill="var(--cherry)"/><circle cx="32" cy="19" r="4" fill="var(--sky)"/><circle cx="43" cy="25" r="4" fill="var(--bubble)"/></svg>);
export const IconSun = (p: P) => (<svg {...base} {...p}><circle cx="32" cy="32" r="12" fill="var(--butter)"/><path d="M32 6v6M32 52v6M6 32h6M52 32h6M13.6 13.6l4.3 4.3M46.1 46.1l4.3 4.3M13.6 50.4l4.3-4.3M46.1 17.9l4.3-4.3"/></svg>);
export const IconApple = (p: P) => (<svg {...base} {...p}><path d="M32 20c-4-4-18-5-20 9-2 12 7 27 14 27 3 0 4-2 6-2s3 2 6 2c7 0 16-15 14-27-2-14-16-13-20-9Z" fill="var(--cherry)"/><path d="M32 20c0-6 3-10 8-12M32 18c-4-6-10-6-12-4"/></svg>);
export const IconTree = (p: P) => (<svg {...base} {...p}><circle cx="32" cy="24" r="16" fill="var(--mint)"/><path d="M32 56V30M32 40l-7-6M32 36l6-5"/><path d="M18 56h28"/></svg>);
export const IconChat = (p: P) => (<svg {...base} {...p}><path d="M10 14h44v28H30l-12 10v-10h-8V14Z" fill="var(--sky)"/><path d="M20 26h24M20 33h14"/></svg>);
export const IconStar = (p: P) => (<svg viewBox="0 0 24 24" {...p}><path fill="currentColor" d="m12 2 2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7L12 2Z"/></svg>);
export const IconPaw = (p: P) => (<svg {...base} {...p}><ellipse cx="32" cy="42" rx="13" ry="11" fill="var(--bubble)"/><circle cx="16" cy="28" r="5" fill="var(--bubble)"/><circle cx="25" cy="18" r="5" fill="var(--bubble)"/><circle cx="39" cy="18" r="5" fill="var(--bubble)"/><circle cx="48" cy="28" r="5" fill="var(--bubble)"/></svg>);
export const IconPhone = (p: P) => (<svg {...base} viewBox="0 0 24 24" strokeWidth={2} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>);
export const IconPin = (p: P) => (<svg {...base} viewBox="0 0 24 24" strokeWidth={2} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>);
export const IconClock = (p: P) => (<svg {...base} viewBox="0 0 24 24" strokeWidth={2} {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>);
export const IconArrow = (p: P) => (<svg {...base} viewBox="0 0 24 24" strokeWidth={2.5} {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
export const IconPlus = (p: P) => (<svg {...base} viewBox="0 0 24 24" strokeWidth={3} {...p}><path d="M12 5v14M5 12h14"/></svg>);
export const IconMenu = (p: P) => (<svg {...base} viewBox="0 0 24 24" strokeWidth={2.5} {...p}><path d="M4 7h16M4 12h10M4 17h16"/></svg>);
export const IconClose = (p: P) => (<svg {...base} viewBox="0 0 24 24" strokeWidth={2.5} {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>);
export const IconDownload = (p: P) => (<svg {...base} viewBox="0 0 24 24" strokeWidth={2.5} {...p}><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>);
export const GoogleG = (p: P) => (<svg viewBox="0 0 24 24" aria-hidden="true" {...p}><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>);

/* Decorative shapes */
export const Cloud = (p: P) => (<svg viewBox="0 0 200 100" {...p}><path fill="currentColor" d="M40 90a30 30 0 0 1 0-60 40 40 0 0 1 75-10 32 32 0 0 1 50 25 25 25 0 0 1-5 45Z"/></svg>);
export const Squiggle = (p: P) => (<svg viewBox="0 0 120 20" fill="none" {...p}><path d="M2 10c10-12 20 12 30 0s20 12 30 0 20 12 30 0 20 12 26 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>);
export const Sparkle = (p: P) => (<svg viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12C7 11 11 7 12 0Z"/></svg>);
export const RainbowArc = (p: P) => (<svg viewBox="0 0 200 110" fill="none" {...p}><path d="M15 105a85 85 0 0 1 170 0" stroke="var(--bubble)" strokeWidth="16"/><path d="M33 105a67 67 0 0 1 134 0" stroke="var(--cherry)" strokeWidth="16"/><path d="M51 105a49 49 0 0 1 98 0" stroke="var(--sky)" strokeWidth="16"/><path d="M69 105a31 31 0 0 1 62 0" stroke="var(--butter)" strokeWidth="16"/></svg>);
