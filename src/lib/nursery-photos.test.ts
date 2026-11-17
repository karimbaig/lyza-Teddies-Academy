import { describe, expect, it } from "vitest";
import { NURSERY_PHOTOS } from "./nursery-photos";

describe("real nursery photography", () => {
  it("includes all ten newly supplied photographs", () => {
    expect(NURSERY_PHOTOS.slice(0, 10).map((photo) => photo.id)).toEqual([
      "sensory-explorers", "sensory-teamwork", "autumn-handprints", "colourful-small-world",
      "autumn-sensory-group", "autumn-sensory-discovery", "foam-exploration", "seasonal-treats",
      "foam-small-world", "seasonal-celebration",
    ]);
  });

  it("uses only reviewed derivatives with absolute media URLs", () => {
    for (const photo of NURSERY_PHOTOS) {
      expect(photo.privacyProcessed).toBe(true);
      expect(new URL(photo.src).protocol).toBe("https:");
      expect(photo.src).toMatch(/\/__l5e\/assets-v1\/.+\.webp$/);
      expect(photo.src).not.toMatch(/kids-painting|kids-garden|nursery-room|user-uploads/);
    }
  });
});