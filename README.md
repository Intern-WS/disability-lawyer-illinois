# DisabilityLawyerIllinois Astro demo

Accessible static-site draft for Williams & Swee, Ltd., designed for GitHub Pages.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run check
npm run build
```

The built site is written to `dist/`.

## GitHub Pages

Push this project to GitHub. Configure Pages to deploy through GitHub Actions. The included workflow builds Astro with the repository name as its base path.

Before public launch:

1. Replace the placeholder `site` URL in `astro.config.mjs` or set `SITE_URL`.
2. Verify the phone number, office information, attorneys, service areas, and all legal statements.
3. Update `robots.txt` with the production sitemap URL.
4. Add approved logo, photographs, privacy policy, and legal disclaimer.
5. Decide how this site relates to existing disability content on the firm’s other domains.
6. Complete attorney-advertising, accessibility, privacy, and user testing.
