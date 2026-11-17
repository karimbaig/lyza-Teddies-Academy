import { CHILDCARE } from "@/lib/site";
import { IconHeart, IconBook, IconChat, IconPaw } from "./Icons";
import { Reveal } from "./Motion";

export function ChildcareApproach() {
  return (
    <section className="bg-sky/20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 border-b border-ink/15 pb-12 md:grid-cols-2">
          <Reveal>
            <IconHeart className="h-12 w-12 text-cherry" />
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Flexible childcare</h2>
            <p className="mt-5 text-lg leading-relaxed">{CHILDCARE.flexible}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <IconPaw className="h-12 w-12 text-cherry" />
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Every child is an individual</h2>
            <p className="mt-5 text-lg leading-relaxed">{CHILDCARE.individual}</p>
          </Reveal>
        </div>
        <div className="mt-12">
          <h3 className="flex items-center gap-3 text-3xl font-bold"><IconBook className="h-8 w-8 shrink-0" /> Our approach to learning</h3>
          <ul className="mt-6 grid gap-x-12 md:grid-cols-2">
            {CHILDCARE.principles.map((principle) => <li key={principle} className="flex gap-3 border-b border-ink/10 py-5 leading-relaxed"><IconPaw className="mt-1 h-5 w-5 shrink-0 text-cherry" /><span>{principle}</span></li>)}
          </ul>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_2fr]">
          <h3 className="flex items-start gap-3 text-3xl font-bold"><IconChat className="h-9 w-9 shrink-0" /> A culture of listening</h3>
          <ul className="space-y-4">
            {CHILDCARE.listening.map((point) => <li key={point} className="flex gap-3"><IconPaw className="mt-1 h-5 w-5 shrink-0 text-cherry" /><span>{point}</span></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}