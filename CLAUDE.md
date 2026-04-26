# CLAUDE.md — delta-code

Personal portfolio site for Moisés Neto (Frontend Engineer). Public URL: <https://delta-code-dev.vercel.app/>.

## Stack

- **Framework:** Next.js 16.2 (App Router) + React 19.2
- **Language:** TypeScript 5 (strict)
- **Styling:** TailwindCSS v4 (PostCSS plugin) + `tailwind-merge` + `class-variance-authority`
- **UI primitives:** `@base-ui/react`, shadcn-style components in `src/components/ui`
- **Icons:** `lucide-react`, `devicons-react`
- **Animations:** `framer-motion`
- **Notifications:** `sonner`
- **Cookies:** `cookies-next`
- **Lint/format:** Biome 2.4 (no Prettier, no ESLint)
- **Testing:** Playwright (e2e folder present, not yet wired)

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Next dev server |
| `npm run build` | Production build |
| `npm run start` | Start prod server |
| `npm run lint` | `biome lint .` |
| `npm run format` | `biome format --write .` |
| `npm run check` | `biome check .` |
| `npm run check:fix` | `biome check --write .` |

## Project Structure

```
src/
├── app/                    # Next.js App Router (layout, page, /obrigado)
├── components/
│   ├── achievements/       # Gamification overlay (AchievementsWrapper)
│   ├── sections/           # Page sections, each as folder:
│   │   ├── hero/           #   index.tsx | styles.ts | types.ts
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── timeline/
│   │   ├── projects/
│   │   ├── certifications/
│   │   └── contact/
│   └── ui/                 # Reusable primitives (button, card, dialog, navbar, tooltip, sonner, badge, back-to-top, social-icons)
├── data/                   # Static portfolio content
│   ├── portfolio-data.ts
│   ├── experience-details.ts
│   └── skill-descriptions.ts
├── lib/                    # Utilities
│   ├── utils.ts            # cn() helper
│   ├── icons.tsx
│   └── achievements.ts
└── types/                  # Shared TS types
```

## Conventions

### Section files pattern

Every section folder has exactly:

- `index.tsx` — component
- `styles.ts` — style strings / CVA variants
- `types.ts` — local types

Keep this pattern when adding new sections.

### Imports

Use `@/` alias (configured in `tsconfig.json`) → maps to `src/`.

### Styling

- Tailwind v4 utility-first, merge classes via `cn()` from `src/lib/utils.ts`
- CVA for variant components (see `ui/button.tsx`, `ui/badge.tsx`)
- Global cursor-pointer applied to all interactive elements (set in `globals.css`)
- Fonts: Inter (sans) + JetBrains Mono (mono), loaded via `next/font/google`

### Data

Portfolio content (experiences, skills, projects, certifications) lives in `src/data/*.ts` — edit there, not in section components.

### SEO/Metadata

Centralized in `src/app/layout.tsx`. Locale `pt_BR`, canonical `https://delta-code-dev.vercel.app/`.

## Commands & Tools

- Run Biome (`npm run check:fix`) before committing.
- Do NOT run Prettier or ESLint — repo uses Biome only.
- Conventional Commits: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`.

## Out of Scope

- No backend/API routes currently.
- No DB / auth.
- No i18n — site is `pt-BR` only.
- E2E tests scaffolded (Playwright) but not implemented.

## Constraints

- Keep bundle lean — this is a static-leaning portfolio. Avoid heavy libs.
- Preserve accessibility on UI primitives (Base UI handles a11y; don't bypass).
- Images via `next/image` always, with `position: relative` wrapper when using `fill`.
