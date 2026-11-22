# CA Consultancy website and Blog CMS

The public site is a React and Vite app. Its Blog reads published articles from the Sanity project `l02cglnw`, dataset `production`. The independently built Studio lives in `studio/`. Use Node.js 22.12 or newer for both packages.

## Local setup

1. Copy `.env.example` to `.env.local` in the website root. Keep the two public values for this project:

   | Variable | Value |
   | --- | --- |
   | `VITE_SANITY_PROJECT_ID` | `l02cglnw` |
   | `VITE_SANITY_DATASET` | `production` |

2. In [Sanity Manage](https://www.sanity.io/manage), select **CA Consultancy CMS**, then under **API → CORS origins** add `http://localhost:5173` with credentials disabled and `http://localhost:3333` with credentials enabled. If you use `127.0.0.1` or a different port, add the exact origin you use separately.
3. From the repository root, run `npm ci`, then `npm run dev`. Restart Vite after changing environment variables.
4. In a second terminal, run `npm --prefix studio ci`, then `npm --prefix studio run dev`. Open `http://localhost:3333` and sign in with your existing Sanity account.

The website uses anonymous reads against the public dataset and explicitly requests Sanity's published perspective. Treat `VITE_*` values as public because Vite includes them in the browser bundle. Keep private content out of published documents in this dataset and keep API tokens out of the website's environment and source files.

## Publish and maintain articles

In Studio, open **Blog Article**, create a draft, enter the title and generate its slug. Fill in the category, excerpt, author, date, image with alt text, and article body. Use Heading 2 and Heading 3 within the rich-text editor. The article title is the page's Heading 1. You can supply an SEO title and meta description or use the article title and excerpt as defaults.

Publish the draft to make it available at `/blog/<slug>`. Keep a published slug stable so existing links continue working. Edit and publish again to update an article, unpublish it to remove it from public view while keeping a draft, or delete it in Studio when it is no longer needed.

The public site requests content on navigation or reload and uses Sanity's API CDN. A published change can take time to appear while the cache refreshes. An article already open in a visitor's browser refreshes when they navigate away and return or reload the page. There is no website build step for routine content changes. The listing stays empty until the first article is published.

## Build and deploy independently

- **Website:** Set the two public variables in the deployment build environment, then run `npm ci` and `npm run build` in the root. Deploy `dist/` as a static frontend. Configure and verify Hostinger's SPA fallback to `index.html` for direct links such as `/blog/<slug>`. The existing `public/_redirects` file is host-specific and should not be assumed to configure Hostinger. Add the exact HTTPS website origin to Sanity CORS with credentials disabled.
- **Studio:** Run `npm --prefix studio ci` and `npm --prefix studio run build` to produce `studio/dist/` for independent hosting, or use Sanity's hosted Studio deployment from the `studio/` package. For self-hosting, add the exact HTTPS Studio origin to Sanity CORS with credentials enabled. Use separate build jobs and lockfiles for the website and Studio.
- **Checks:** Run `npm run typecheck` for the website and `npm --prefix studio run typecheck` for Studio.

## SEO scope

The Blog sets the article title and description in the browser. On static hosting, a missing article shows a not-found view, while the SPA fallback can still return HTTP 200. If crawler-visible per-article HTML, reliable social previews, or HTTP 404 responses become launch requirements, evaluate publish-triggered prerendering for Hostinger or an origin capable of server rendering. Add canonical URLs, Open Graph metadata, structured data, and a sitemap when the final domain and rendering approach are selected.
