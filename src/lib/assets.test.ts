import { describe, expect, it } from "vitest";
import { assetUrl } from "./assets";

describe("portable media", () => {
  it("resolves the logo without relying on a Vercel asset proxy", () => {
    expect(assetUrl({ url: "/__l5e/assets-v1/562713ed-9d88-434e-bc94-23463c6edb32/lyzas-logo.jpg" })).toBe("https://id-preview--a28adeae-5cd2-4a4a-9571-8bcb561d8aa6.lovable.app/__l5e/assets-v1/562713ed-9d88-434e-bc94-23463c6edb32/lyzas-logo.jpg");
  });
  it("preserves an existing absolute URL", () => {
    expect(assetUrl({ url: "https://example.com/photo.webp" })).toBe("https://example.com/photo.webp");
  });
});