# AGENT.md

Conventions for working on this repo. Read this before making changes.

## Stack

- Vite + React 19 + TypeScript, package manager `pnpm`.
- No router — single scrolling page with in-page anchor navigation (`#about`, `#projects`, `#contact`).
- Commands: `pnpm dev`, `pnpm build` (type-checks then builds), `pnpm lint`, `pnpm format` / `pnpm format:check`, `pnpm preview`.
- Code is formatted with Prettier (`.prettierrc.json`) — run `pnpm format` before committing if unsure.

## Styling

- CSS Modules (`*.module.css`) for every component and section. No Tailwind, no CSS-in-JS.
- Shared design tokens (colors, spacing, type scale, `@font-face`) live in `src/styles/` as global CSS custom properties — components consume them via `var(--token-name)`, they don't redefine values.
- Use `rem` for spacing and font sizes, not `px` (`html { font-size: 100% }` in `src/index.css` keeps `1rem == 16px`). For bigger layout dimensions (component/container widths and heights, section sizing), use `px` instead.
- Icons come from `lucide-react` — don't hand-roll or download SVG icons that exist in that set.
- Text and layout content is constrained to `--content-max-width` (1800px) via the shared `Container` component (`src/components/Container/`). Full-bleed backgrounds and dividers span the full viewport width and sit outside `Container`.

## Folder layout

- `src/styles/` — global design tokens (theme, typography, resets). No component-specific styles here.
- `src/components/` — small reusable pieces used by more than one section (buttons, cards, nav, dividers). One folder per component: `ComponentName/ComponentName.tsx` + `ComponentName.module.css`.
- `src/sections/` — page-level sections composed from `components/` (e.g. hero, about, projects, contact, footer). Not meant to be reused outside the home page.
- `src/data/` — typed content config (e.g. `projects.ts`) kept separate from components so content can change without touching component code.
- `src/assets/fonts/` — licensed font files (see below).

## Content model

- Projects are defined in `src/data/projects.ts` as a typed array (title, description, tags, date, and optional `github` / `website` / `caseStudy` links). Add a new project by appending an entry — don't hardcode project markup in JSX.

## Assets

- **PP Mori font** — licensed `.otf` files live in `src/assets/fonts/` (Regular, Semibold, Italic, Semibold Italic, Black, Extralight, and their italics). Serve the `.otf` files directly via `@font-face` — do not convert to `.woff2`.
- **Resume PDF** — expected at `public/resume.pdf`, linked directly from the `ResumeButton` component. Drop the file in with that exact name; no code changes needed.
- If a design asset is missing, wire up the integration point with a clearly-marked placeholder and ask rather than fabricating content.

## Figma source of truth

- File: `m7tZoVWa0U5bR2CZRdEfhn` ("Portfolio").
- Desktop layout: node `210:184` ("v3"). Mobile layout: node `210:194` ("v3 - phone"). Shared component reference: node `210:192` ("Components", colors + `Project` card variants).
- Re-fetch these nodes via the Figma MCP (`get_design_context` / `get_screenshot`) when re-syncing against design changes.

## Git workflow

- Commit iteratively, in small logical units — don't bundle unrelated changes (e.g. a template cleanup, a new dependency, and a new asset are three separate commits, not one).
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) subject lines (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, etc.), one-line subject only — no bullet-point bodies.
- Always show the planned commit(s) and ask before running `git commit`.

## Workflow

- After finishing a stage of work, add a temporary preview of the new UI (in `App.tsx` or a scratch route) for review, then remove the preview before starting the next stage.
