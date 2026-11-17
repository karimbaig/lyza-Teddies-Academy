import { NURSERY_PHOTOS } from "@/lib/nursery-photos";
import { Reveal } from "./Motion";
import { Sparkle } from "./Icons";

export function NurseryGallery() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 font-display font-semibold text-cherry"><Sparkle className="h-5 w-5" /> Life at Lyza's</span>
          <h2 className="mt-3 text-4xl font-bold md:text-6xl">Small moments. <span className="text-cherry">Big wonder.</span></h2>
        </Reveal>
        <div className="mt-10 grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {NURSERY_PHOTOS.map((photo, i) => (
            <Reveal key={photo.title} delay={i * 0.08} className={i % 3 === 1 ? "lg:pt-10" : ""}>
              <figure>
                <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="h-auto w-full rounded-lg object-contain bg-muted" />
                <figcaption className="mt-5">
                  <h3 className="text-2xl font-semibold">{photo.title}</h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}