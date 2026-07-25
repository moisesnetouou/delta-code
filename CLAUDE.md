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
- **i18n:** custom lightweight dictionary in `src/i18n` (PT/EN), client toggle + cookie (`delta-locale`). No routing per locale.
- **Analytics:** Microsoft Clarity (`@microsoft/clarity`), gated behind a cookie-consent banner (`delta-consent`) — loads only after "Accept".
- **Lint/format:** Biome 2.4 (no Prettier, no ESLint)
- **Testing:** Playwright e2e implemented (`e2e/tests/*.e2e.ts`). Unit (Vitest) not yet wired — see the `testing` skill.

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
| `npm run e2e` | `next build && playwright test` |
| `npm run e2e:ui` | Playwright UI mode |
| `npm run e2e:headed` | Playwright headed |
| `npm run e2e:dev` | `playwright test` (no rebuild) |

## Project Structure

```
src/
├── app/                    # App Router: layout, page, robots.ts, sitemap.ts, opengraph-image.tsx
├── components/
│   ├── achievements/       # Gamification overlay (AchievementsWrapper + manager)
│   ├── sections/           # Page sections (order: hero → about → how-i-work → timeline → skills → contact)
│   │   ├── hero/           #   index.tsx | styles.ts | types.ts
│   │   ├── about/
│   │   ├── how-i-work/
│   │   ├── timeline/
│   │   ├── skills/
│   │   └── contact/
│   ├── skill-dialog/       # Shared skill-detail dialog
│   └── ui/                 # Reusable primitives (navbar, dialog, back-to-top, language-toggle, cookie-consent, clarity-provider, sonner, ...)
├── data/                   # Structural portfolio data (non-translatable)
│   ├── portfolio-data.ts   #   personalInfo, experiences (ids/dates/tech), skills, certifications, education, coreStack
│   └── skill-categories.ts #   category type + color styles
├── i18n/                   # PT/EN dictionaries + LanguageProvider
│   ├── pt.ts | en.ts       #   pt.ts is the source of truth; en.ts must match its shape
│   ├── dictionary.ts       #   `Content` interface + `dictionaries` map
│   ├── language-context.tsx#   LanguageProvider + useLanguage()
│   └── types.ts            #   Locale, cookie name
├── lib/                    # utils.ts (cn), icons.tsx, achievements.ts
└── types/                  # Shared TS types
```

Note: certifications render inside About; there is no standalone Projects/Certifications/Experience section (the timeline IS the experience list).

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

### Data & i18n

- **Structural** data (ids, dates, tech arrays, urls, skill keys, certifications, `coreStack`) lives in `src/data/*.ts`.
- **Translatable** copy (all user-facing text: hero, summary, experience role/description, skill descriptions, section labels, achievements, consent) lives in the i18n dictionary. Edit `src/i18n/pt.ts` (source of truth) and keep `src/i18n/en.ts` in the same shape. `dictionary.ts` (`Content`) is enforced by TypeScript.
- Components read copy via `useLanguage().t`, never hardcode PT/EN strings in JSX.

### SEO/Metadata

- Centralized in `src/app/layout.tsx` (locale `pt_BR`, canonical). JSON-LD (`Person`) injected there.
- `app/robots.ts`, `app/sitemap.ts`, and `app/opengraph-image.tsx` (generated OG image) use the App Router file conventions — do not add a manual `/og-image.png`.
- Security headers (CSP, X-Frame-Options, etc.) are set in `next.config.ts` (`headers()`); CSP must keep allowing `*.clarity.ms` if analytics stays.

### Testing

Full conventions (naming, LGPD-safe fixtures, mocking boundaries, e2e setup) live in the `testing` skill. Summary:

- **E2E (Playwright): implemented.** Specs in `e2e/tests/*.e2e.ts` run against the dev server at `:3000` (`baseURL` in `playwright.config.ts`). One spec per section/aspect (hero, about, skills, timeline, contact, navigation, seo, achievements). No auth, no API mocks — the site is static. Import `test`/`expect` straight from `@playwright/test`.
- **Unit (Vitest + Testing Library): recommended, not yet wired.** No `vitest.config`/`__tests__` today; the `unit-*` rules document the convention for when it's added.
- Descriptions verb-first, no `should` (EN for unit, pt-BR for e2e). Never `waitForTimeout`. Never real personal names in fixtures (LGPD, Lei 13.709/2018).

## Commands & Tools

- Run Biome (`npm run check:fix`) before committing.
- Do NOT run Prettier or ESLint — repo uses Biome only.
- A PostToolUse hook (`.claude/settings.json`) runs `biome check --write` on each edited `.ts/.tsx/.js/.jsx` file automatically.
- Conventional Commits: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`.
- No explanatory comments in `src` — code is self-explanatory; keep only `biome-ignore`, `TODO`/`FIXME`, and JSDoc on props.

## Skills (`.claude/skills/`)

- **`commit`** (`/commit`) — Conventional Commits message for this repo.
- **`pr`** (`/pr`) — opens a PR targeting `main` (no emoji, no AI signature, discovers labels, confirms before publishing).
- **`testing`** — Playwright e2e + (future) Vitest unit conventions and rules.
- **`react-best-practices`** — Vercel performance rules. Use only for explicit performance work, not routine feature work.
- **`tanstack-query-best-practices`** — reference for data fetching (aspirational; the site has no runtime data layer today).

## Out of Scope

- No backend/API routes currently.
- No DB / auth.
- i18n is PT/EN via a client toggle only — no per-locale routes (`/en`), so the EN variant isn't separately indexable (conscious tradeoff).

## Git Flow

- Single branch `main`; the site deploys to Vercel from `main`. Work on a branch off `main`; PRs target `main` (see the `/pr` skill).
- **Commit/push only when explicitly asked** — never auto-commit. Prepare and describe the changes; the developer commits.
- **No `Co-Authored-By` or AI signature** in commit messages.
- Conventional Commits — see the `/commit` skill.

## Constraints

- Keep bundle lean — this is a static-leaning portfolio. Avoid heavy libs.
- Preserve accessibility on UI primitives (Base UI handles a11y; don't bypass).
- Images via `next/image` always, with `position: relative` wrapper when using `fill`.
