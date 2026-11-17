import { assetUrl } from "./assets";
import p0 from "@/assets/activities/sensory-explorers.webp.asset.json";
import p1 from "@/assets/activities/sensory-teamwork.webp.asset.json";
import p2 from "@/assets/activities/autumn-handprints.webp.asset.json";
import p3 from "@/assets/activities/colourful-small-world.webp.asset.json";
import p4 from "@/assets/activities/autumn-sensory-group.webp.asset.json";
import p5 from "@/assets/activities/autumn-sensory-discovery.webp.asset.json";
import p6 from "@/assets/activities/foam-exploration.webp.asset.json";
import p7 from "@/assets/activities/seasonal-treats.webp.asset.json";
import p8 from "@/assets/activities/foam-small-world.webp.asset.json";
import p9 from "@/assets/activities/seasonal-celebration.webp.asset.json";
import sensory from "@/assets/activities/sensory-small-world.webp.asset.json";
import autumn from "@/assets/activities/autumn-discovery.webp.asset.json";
import together from "@/assets/activities/learning-together.webp.asset.json";

export const NURSERY_PHOTOS = [
  { id: "sensory-explorers", src: assetUrl(p0), title: "Sensory explorers", alt: "Children exploring colourful blocks and textured materials together.", width: 1200, height: 900, privacyProcessed: true },
  { id: "sensory-teamwork", src: assetUrl(p1), title: "Learning side by side", alt: "Hands-on sensory play with colourful building blocks.", width: 1200, height: 900, privacyProcessed: true },
  { id: "autumn-handprints", src: assetUrl(p2), title: "Creative little hands", alt: "Children making autumn handprint paintings.", width: 1200, height: 675, privacyProcessed: true },
  { id: "colourful-small-world", src: assetUrl(p3), title: "A world of colour", alt: "Children exploring a small-world tray with coloured wooden pieces.", width: 1200, height: 900, privacyProcessed: true },
  { id: "autumn-sensory-group", src: assetUrl(p4), title: "Discovering together", alt: "Children scooping and pouring during autumn sensory play.", width: 1200, height: 900, privacyProcessed: true },
  { id: "autumn-sensory-discovery", src: assetUrl(p5), title: "Autumn discoveries", alt: "Children exploring autumn leaves and sensory materials.", width: 900, height: 1200, privacyProcessed: true },
  { id: "foam-exploration", src: assetUrl(p6), title: "Textures and curiosity", alt: "Children in aprons investigating a foam sensory tray.", width: 900, height: 1200, privacyProcessed: true },
  { id: "seasonal-treats", src: assetUrl(p7), title: "Seasonal little treats", alt: "Ghost-shaped treats beside a playful bat decoration.", width: 900, height: 1200, privacyProcessed: true },
  { id: "foam-small-world", src: assetUrl(p8), title: "An invitation to explore", alt: "A foam-filled sensory tray with colourful sea creatures.", width: 900, height: 1200, privacyProcessed: true },
  { id: "seasonal-celebration", src: assetUrl(p9), title: "A playful celebration", alt: "Nursery seasonal treats and handmade decorations.", width: 900, height: 1200, privacyProcessed: true },
  { id: "original-small-world", src: assetUrl(sensory), title: "Small-world stories", alt: "Small-world sensory tray with toy animals, vehicles and blocks.", width: 900, height: 1200, privacyProcessed: true },
  { id: "original-autumn", src: assetUrl(autumn), title: "The wonder of the seasons", alt: "Autumn sensory tray with colourful leaves and pumpkins.", width: 900, height: 1200, privacyProcessed: true },
  { id: "original-together", src: assetUrl(together), title: "Little hands, big discoveries", alt: "Children exploring a sensory tray with faces covered for privacy.", width: 1200, height: 900, privacyProcessed: true },
] as const;

export const NURSERY_FEATURE = {
  story: NURSERY_PHOTOS[0],
  creative: NURSERY_PHOTOS[2],
  community: NURSERY_PHOTOS[4],
};
