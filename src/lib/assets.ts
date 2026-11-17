/** Public asset origin verified independently of the editor session. */
const ASSET_ORIGIN = "https://id-preview--a28adeae-5cd2-4a4a-9571-8bcb561d8aa6.lovable.app";

export function assetUrl(asset: { url: string }): string {
  return asset.url.startsWith("/__l5e/assets-v1/")
    ? new URL(asset.url, ASSET_ORIGIN).href
    : asset.url;
}