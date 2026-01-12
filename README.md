# mstrick.com

Personal blog built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Development

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/   # Reusable Astro components
├── content/      # Blog posts (44 markdown files)
├── layouts/      # Page layouts
├── pages/        # Route pages
└── styles/       # Global styles
public/           # Static assets
```

## Tech Stack

- **Astro 4** - Static site generator
- **Tailwind CSS 3** - Utility-first CSS
- **Shiki** - Syntax highlighting (github-light theme)
- **RSS** - Feed support via @astrojs/rss
