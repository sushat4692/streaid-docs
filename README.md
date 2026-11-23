# Streaid Docs

The official documentation site for [Streaid](https://github.com/sushat4692/streaid).

Built with [Astro](https://astro.build/) and deployed as a static site.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build

```bash
npm run build     # output: dist/
npm run preview
```

The site is available in two languages:

- `/` — English
- `/jp/` — 日本語

`src/data/site.ts` contains the copy, and `src/data/history.ts` contains the
release history. A static `/version.json` endpoint is generated from the
history data for older app versions.
