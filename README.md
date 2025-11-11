# Agenlabs Landing

A minimal React + TypeScript landing site powered by Vite and Tailwind CSS v4.

- Tech stack: React 19, TypeScript 5, Vite 7, Tailwind CSS 4
- Key files: [vite.config.ts](vite.config.ts), [package.json](package.json), [src/main.tsx](src/main.tsx), [src/App.tsx](src/App.tsx)

## Getting started

- Prerequisites: Node.js 18+ (recommended 20+), npm 9+
- Install dependencies:
  - npm install
- Start dev server:
  - npm run dev
- Type-check and build:
  - npm run build
- Preview production build:
  - npm run preview
- Lint:
  - npm run lint

## Project structure

- App entry and routing
  - [src/main.tsx](src/main.tsx) – bootstraps React (StrictMode) and mounts the app
  - [src/App.tsx](src/App.tsx) – sets up `BrowserRouter` and route table
- UI components
  - [`Header`](src/components/Header.tsx) – site navigation using `react-router-dom`
  - [`Hero`](src/components/Hero.tsx) – landing hero with feature highlights
- Pages
  - [`Home`](src/pages/Home.tsx)
  - [`Work`](src/pages/Work.tsx)
  - [`Packages`](src/pages/Packages.tsx)
  - [`Templates`](src/pages/Templates.tsx)
  - [`Blog`](src/pages/Blog.tsx)
- Styling
  - [src/index.css](src/index.css) – Tailwind v4 setup and font theme
  - [src/App.css](src/App.css) – optional app-level styles
- Config
  - [vite.config.ts](vite.config.ts) – Vite + React + Tailwind plugin config
  - [tsconfig.json](tsconfig.json), [tsconfig.app.json](tsconfig.app.json), [tsconfig.node.json](tsconfig.node.json)
  - [eslint.config.js](eslint.config.js)

## Routing

Defined in [src/App.tsx](src/App.tsx):

- / → [`Home`](src/pages/Home.tsx)
- /work → [`Work`](src/pages/Work.tsx)
- /packages → [`Packages`](src/pages/Packages.tsx)
- /templates → [`Templates`](src/pages/Templates.tsx)
- /blog → [`Blog`](src/pages/Blog.tsx)

The header links are declared in [`Header`](src/components/Header.tsx) and use `<Link />` from `react-router-dom`.

## Styling (Tailwind v4)

- Enabled via the Tailwind Vite plugin in [vite.config.ts](vite.config.ts)
- Base import and theme in [src/index.css](src/index.css):
  - Imports Tailwind: `@import 'tailwindcss';`
  - Defines a display font via `@theme` and uses it with the `font-display` utility
- Components use utility classes (e.g., `bg-linear-to-r`, `from-indigo-600`, `to-sky-500`)

## Scripts

- dev: start Vite dev server
- build: type-check and build for production
- preview: serve built assets locally
- lint: run ESLint

See [package.json](package.json) for details.

## Notes

- Fast Refresh is enabled via Vite’s React plugin.
- Routing uses `BrowserRouter` from `react-router-dom`.

## License

ISC