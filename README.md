## Dev‑Dodze Monorepo

A modern monorepo powered by npm workspaces and Lerna (v7) with a React 18 + Vite 5 application and internal libraries (`@dev-dodze/ui`, `@dev-dodze/icons`).

- Node: >= 18, npm: >= 8
- Stack: React, Vite (SWC), React Router v6, styled-components, TypeScript, SWC for libs, ESLint, Prettier

### Table of contents
- Overview & structure
- Requirements & installation
- Scripts (root and packages)
- Linting & formatting
- Build & deploy
- Environment variables
- Architecture notes
- Contributing
- License

---

### Overview & structure

The monorepo is managed via npm workspaces and Lerna. The main web app is `@dev-dodze/main` (Vite). Shared libraries are `@dev-dodze/ui` and `@dev-dodze/icons`.

```
dev-dodze/
  packages/
    apps/
      dodze/                # @dev-dodze/main — Vite web app
        src/
        vite.config.mts
        package.json
    libs/
      ui/                   # @dev-dodze/ui — UI components and themes
        src/
        package.json
      icons/                # @dev-dodze/icons — SVG icon generator (svgr)
        src/
        package.json
  tools/                    # shared ESLint/Prettier configs
  package.json              # root scripts for Lerna/workspaces
  lerna.json                # Lerna v7 config
  nx.json                   # task caching (build, lint)
  LICENSE                   # MIT
```

Note: Workspaces are declared in `package.json` as `packages/*/*`. The `tools/` directory is not a workspace package; it hosts shared configs.

---

### Requirements & installation

1) Verify Node and npm versions:

```bash
node -v   # >= 18
npm -v    # >= 8
```

2) Install dependencies at the repo root (workspaces will be hoisted/linked automatically):

```bash
npm install
```

---

### Scripts (root)

```bash
# Run the web app in dev mode (proxies to @dev-dodze/main)
npm run web:start

# Build all packages that define a build task
npm run build

# Deploy the built web app to GitHub Pages
npm run deploy

# Lint all packages (type-check + eslint where defined)
npm run lint

# Clean package artifacts via Lerna
npm run clean

# Generate React icon components from SVGs in @dev-dodze/icons
npm run generate-icons

# Bump versions (no tag, no push) for manual release management
npm run version-update
```

`web:start` runs the `start` script in `@dev-dodze/main` (Vite dev server).

---

### Scripts (app `@dev-dodze/main`)

From the repo root or `packages/apps/dodze`:

```bash
npm run start    # vite dev (port 3000, auto-open)
npm run build    # vite build + copy CNAME
npm run preview  # local preview of the build
npm run type-check
npm run eslint
npm run lint     # type-check + eslint
```

### Scripts (libraries)

`@dev-dodze/ui` and `@dev-dodze/icons` use SWC for fast builds:

```bash
# @dev-dodze/ui
npm run _build
npm run _watch
npm run type-check
npm run eslint
npm run lint

# @dev-dodze/icons
npm run generate   # svgr: src/svg -> src/components (TSX)
npm run _build
npm run _watch
npm run type-check
npm run eslint
npm run lint
```

Note: `_build`/`_watch` are internal utility scripts. The root `npm run build` runs only packages that expose a standard `build` script (e.g., the app).

---

### Quick start (development)

```bash
# 1) Install dependencies
npm install

# 2) Start the app
npm run web:start

# Alternative (from the app directory):
cd packages/apps/dodze && npm run start
```

Changes in `libs` are linked via workspaces (symlinks). When working on UI/icons, run `_watch` in a parallel terminal to rebuild on change.

---

### Linting & formatting

- Root: `npm run lint` (propagates to packages: type-check + eslint)
- Packages: local `lint`/`eslint`/`type-check` scripts
- Shared config lives under `tools/` (ESLint/Prettier)

Tip: add pre-commit hooks if desired (Husky is already in root devDependencies).

---

### Build & deploy

The app is built with Vite into `build/` and deployed to GitHub Pages via `gh-pages`.

```bash
# Build
npm run build

# Deploy to gh-pages (publishes packages/apps/dodze/build)
npm run deploy
```

- `packages/apps/dodze/CNAME` sets the custom domain: `tolstov.me`.
- `copy-cname.js` ensures CNAME is copied into the build output.

---

### Environment variables

- Vite env prefix: `DEV_DODZE_` (see `vite.config.mts: envPrefix`).
- Example: create `.env` next to `packages/apps/dodze` and define values with the `DEV_DODZE_*` prefix.

---

### Architecture notes

- Routing: `react-router-dom@6`, root router/layout handled via `AppRouter`.
- Loading: lazy root `App` and `Suspense` with a custom loader.
- Theming & styles: `styled-components`. UI primitives live in `@dev-dodze/ui`.
- Icons: source SVGs in `packages/libs/icons/src/svg`, TSX components generated via `svgr`.
- Task caching: `nx/tasks-runners/default` (see `nx.json`) for `build` and `lint`.

---

### License

MIT — see `LICENSE`.


