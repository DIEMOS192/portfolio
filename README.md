# Omar Tarek Portfolio

A modern, fully internationalized portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This project highlights your work, skills, and experience with a clean, responsive design and robust translation support (English/Arabic).

---

## 🚀 Features

- **Fast & Modern**: Powered by React, TypeScript, and Vite for optimal performance.
- **Beautiful UI**: Styled with Tailwind CSS and Font Awesome icons.
- **Internationalization**: Seamless English and Arabic support (i18next).
- **Responsive Design**: Looks great on all devices.
- **Easy Customization**: Modular, well-organized codebase.
- **Translation-Driven**: No hardcoded user-facing text.

---

## 📚 Sections

- **Hero**: Brief introduction and call-to-action buttons
- **About**: Bio, education, and background
- **Features**: Technical strengths at a glance
- **Skills**: Icon-based grid of technologies
- **Projects**: Portfolio of work with links
- **Contact**: Email, WhatsApp, and social links
- **Footer**: Quick links and contact info

---

## 🛠️ Tech Stack

- [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [i18next](https://www.i18next.com/) (internationalization)
- [Font Awesome](https://fontawesome.com/) (icons via CDN)

---

## ⚡ Getting Started

1. **Install dependencies**
  ```bash
  npm install
  # or
  yarn install
  ```

2. **Run the development server**
  ```bash
  npm run dev
  # or
  yarn dev
  ```

3. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂️ Project Structure

```
portfolio/
├── public/           # Static assets (images, favicon, etc.)
├── src/
│   ├── components/   # Reusable UI components
│   ├── data/         # Skills, projects, experience data
│   ├── i18n/         # Translation setup and locale files
│   ├── layout/       # Layout wrappers
│   ├── sections/     # Main page sections
│   ├── styles/       # Global and custom styles
│   ├── App.tsx       # Main app entry
│   └── main.tsx      # React root
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## ✏️ Customization

- **Translations**: Edit `src/i18n/locales/en/common.json` and `ar/common.json` for your content.
- **Projects/Skills**: Update `src/data/projects.ts` and `src/data/skills.ts`.
- **Contact Info**: Update `src/i18n/locales/*/common.json` under `contact`.

---

## 🚢 Deployment

Build for production:

```bash
npm run build
# or
yarn build
```

The output will be in the `dist/` folder. Deploy to any static hosting provider (Vercel, Netlify, GitHub Pages, etc).

---

## 📄 License

MIT

---

**Made with ❤️ by Omar Tarek**

Deployed at: [https://omar-tarek-portfolio-five.vercel.app/](https://omar-tarek-portfolio-five.vercel.app/)