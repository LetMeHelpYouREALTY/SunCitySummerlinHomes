# Static assets (`public/`)

Files here are served from the site root. Example: `public/images/brand/logo.png` → URL `/images/brand/logo.png`.

## Folder layout

| Path | Use |
|------|-----|
| `images/brand/` | Logos, BHHS seals, wordmarks |
| `images/hero/` | Full-bleed hero backgrounds |
| `images/community/` | Lifestyle, amenities, neighborhood photos |
| `images/properties/` | Listing / showcase property photos |
| `icons/` | Favicons, map markers, small UI icons |

Legacy files may still live at the root of `public/` (e.g. `hero-bg.jpg`). Prefer new assets under the folders above.

## Naming

- Use lowercase and hyphens: `sun-city-hero-summerlin.webp`
- Include a short context prefix when useful: `brand-bhhs-seal.png`

## Formats

- Prefer **WebP** or **AVIF** for photos (smaller, faster); keep PNG/SVG for logos and transparency.
- Run images through compression before committing when possible.

## Next.js `Image`

For `next/image`, add remote hosts in `next.config.js` under `images.remotePatterns`. Local files under `public/` use paths starting with `/` (no `public` prefix).

## Git

Binary assets are listed in `.gitattributes` so line-ending conversion does not corrupt images. Very large source files (e.g. layered PSDs) are ignored—export flattened assets into `public/` instead.
