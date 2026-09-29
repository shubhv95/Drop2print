# Drop2Print GitHub package

## Upload
Upload the contents of this folder to the root of your GitHub Pages repository (not the enclosing ZIP folder).

- `index.html`: updated website with the supplied horizontal logo, SEO/social metadata, favicon links, and service-worker registration.
- `assets/drop2print-logo.png`: transparent-background horizontal website logo from your first image.
- `assets/icons/`: app icon/favicons generated from your second image.
- `manifest.json`: installable web-app name, colors, and icons.
- `sw.js`: caches the app shell for repeat visits/offline shell use.

## Notes
- Keep the folder paths exactly as they are.
- The canonical URL is set to `https://drop2print.work.gd/`. Change it if your final domain differs.
- The files are processed locally by the page; PDF support still loads PDF.js from a CDN, so PDF features need an internet connection unless you separately self-host PDF.js.
- SEO metadata helps search engines understand the page but cannot guarantee rankings. Ranking also depends on crawlability, useful content, performance, links, and indexing.
- Browser installation is supported when the site is served over HTTPS and the browser permits installation. On Android, use the browser menu and choose “Install app” or “Add to Home screen” when offered.
