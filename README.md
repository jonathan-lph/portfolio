# Jonathan Lam — Portfolio

Personal portfolio site, built with Vite, React, and TypeScript. Styling uses CSS Modules with a small set of shared design tokens (see `src/styles/`). See `AGENT.md` for project conventions.

## Commands

- `pnpm dev` — start the dev server
- `pnpm build` — type-check and build for production
- `pnpm lint` — run ESLint
- `pnpm preview` — preview the production build locally

## Deployment

Pushes to the `v3` branch are built and published to GitHub Pages by `.github/workflows/deploy.yml`. The resume served by the `RESUME` button lives at `public/resume.pdf`.
