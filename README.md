# Portfolio

Source for [omartarek-portfolio.vercel.app](https://omartarek-portfolio.vercel.app).

React 19, TypeScript, Vite, Tailwind CSS. English and Arabic with RTL layout via react-i18next; all user-facing text comes from the locale files, nothing is hardcoded. Dark mode toggle, responsive layout, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Layout

```
src/
  sections/   Hero, About, Features, Skills, Projects, Contact
  components/ Button, Card, NavBar, Footer, DarkModeToggle
  data/       projects.ts, skills.ts (content lives here, not in the sections)
  i18n/       locale files and i18next setup
  hooks/      useDarkMode, useScrollPosition
```

To add a project, append to `src/data/projects.ts` and drop its image in `public/images/`.
