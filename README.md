# Agenlabs Template

Modern React + TypeScript landing page starter powered by Vite and Tailwind CSS v4. It ships with ready-made sections (hero, services, testimonials, recent work, packages, templates, blog) plus smooth in-page navigation, gradient treatments, and animated UI flourishes.

- Tech stack: React 19, TypeScript 5, Vite 7, Tailwind CSS 4, React Router 7
- Features: hash-aware navigation, gradient borders and glows, responsive cards, mouse-tracked hover effects, full-bleed background treatments
- Key entry points: [vite.config.ts](vite.config.ts), [src/main.tsx](src/main.tsx), [src/App.tsx](src/App.tsx)

## Getting Started

- Install dependencies with `npm install`
- Start the dev server with `npm run dev`
- Production build with `npm run build`
- Preview the built bundle via `npm run preview`
- Lint the project with `npm run lint`

Prerequisites: Node.js 18+ (20+ recommended) and npm 9+.

## Project Structure

- Entry
  - `src/main.tsx` mounts the React app in strict mode
  - `src/App.tsx` wires `BrowserRouter`, route table, and the `ScrollToHash` helper for smooth hash scrolling
- Components
  - `src/components/Header.tsx` nav with hash links (`/#services`, etc.) and gradient call-to-action
  - `src/components/Hero.tsx` marketing hero with feature list icons
  - `src/components/Services.tsx` grid of service cards with mouse-follow glow and checkerboard flourish
  - `src/components/Testimonial.tsx` full-bleed testimonial panel with masked background pattern
  - `src/components/RecentWork.tsx` recent projects showcase with responsive image pairs
  - `src/components/Footer.tsx`, `src/components/Heading.tsx` shared UI elements
- Pages
  - `src/pages/Home.tsx` assembles the homepage sections
  - `src/pages/Work.tsx`, `Packages.tsx`, `Templates.tsx`, `Blog.tsx` provide dedicated marketing pages
- Styling
  - `src/index.css` imports Tailwind (`@import 'tailwindcss';`) and defines the display font using Tailwind’s `@theme`
  - `src/App.css` holds optional global tweaks
- Configuration
  - `vite.config.ts` configures React, Tailwind, and asset handling
  - `tsconfig*.json` manage TypeScript paths and compiler options
  - `eslint.config.js` defines linting rules

## Routing & In-Page Links

Routes live in `src/App.tsx` (/, /work, /packages, /templates, /blog). Hash navigation is supported by `ScrollToHash`; any element with an `id` is scrollable via `<Link to="/#section-id">`. Section ids in use include `services`, enabling smooth scrolling from the header CTA.

## UI Highlights

- **Gradient treatments**: Tailwind arbitrary values render gradient borders (`bg-gradient-to-r`) and masked backgrounds
- **Interactive glow**: `Services` cards track cursor position to move a radial gradient glow
- **Full-bleed sections**: `Testimonial` uses negative margins and `w-screen` to escape the content column while keeping inner content centered
- **Responsive grids**: Blog cards and recent work sections utilize Tailwind’s responsive grid utilities

## Customization Tips

- Update colors, spacing, or fonts via Tailwind utility classes or extend the theme in `src/index.css`
- Add sections by composing new components under `src/components/` and referencing them in the desired page file
- Adjust the hash-scrolling behavior (offsets, focus) inside `ScrollToHash` if you introduce sticky headers of varying heights

## Available Scripts

- `npm run dev` – start the Vite dev server with hot module replacement
- `npm run build` – run type checking and emit a production bundle
- `npm run preview` – locally preview the production build
- `npm run lint` – lint the codebase with ESLint

## License

ISC