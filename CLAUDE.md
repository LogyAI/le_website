# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based marketing website for Logy.AI, a healthcare AI platform. The site uses React Router for navigation, Tailwind CSS for styling, and Material-UI components. Built originally with Shuffle Editor for Tailwind.

**Deployment**: Site is deployed to GitHub Pages at https://logy.ai/logy

## Key Commands

### Development
```bash
npm install              # Install dependencies
npm run start            # Compile CSS and start dev server
```

### Build & Deploy
```bash
npm run build            # Compile CSS and create production build
npm run deploy           # Deploy to GitHub Pages (gh-pages branch)
```

### CSS Only
```bash
npm run css              # Compile both regular and minified Tailwind CSS
npm run css-compile      # Compile Tailwind CSS only
npm run css-minified     # Compile minified Tailwind CSS only
```

## Architecture

### Project Structure
- `src/pages/` - Page components (Index.js, Aboutus.js, Products.js, etc.)
- `src/assets/components/` - Reusable components (Footer, scrollToTop, etc.)
- `src/caseStudies/` - Case study page components (cs1.jsx, cs2.jsx)
- `src/assets/css/` - Page-specific CSS files
- `src/assets/img/` - Images and icons
- `src/tailwind/` - Tailwind configuration and source CSS
- `public/css/tailwind/` - Compiled Tailwind CSS (output directory)

### Routing
Routes defined in [src/App.js](src/App.js). Main routes:
- `/` - Homepage (Index.js)
- `/about` - About page
- `/products` - Products page
- `/articles` - Articles listing
- `/cases` - Case studies listing
- `/contact` - Contact form
- `/eye` - Eye health product page
- `/oral` - Oral health product page
- `/vidisha_1_cs`, `/colgate_nigeria_cs` - Individual case studies
- `/tnc` - Terms and conditions

Footer component is rendered globally below all routes.

### Styling Approach
- Tailwind CSS is the primary styling framework
- Custom Tailwind config at [src/tailwind/tailwind.config.js](src/tailwind/tailwind.config.js) with custom colors, gradients, and spacing
- Source CSS: [src/tailwind/tailwind.css](src/tailwind/tailwind.css)
- Compiled output: `public/css/tailwind/tailwind.css` and `tailwind.min.css`
- Some pages have additional custom CSS in `src/assets/css/`
- Material-UI components used for icons (LinkedInIcon, YouTubeIcon, etc.)

### CSS Build Process
The build/start commands automatically run `npm-run-all css` which:
1. Compiles Tailwind from `src/tailwind/tailwind.css` using config in `src/tailwind/tailwind.config.js`
2. Outputs to `public/css/tailwind/tailwind.css` and `tailwind.min.css`
3. Must run before starting dev server or building for production

## Important Notes

- **Git branches**: Main branch for development is `main`, but deployment target is `gh-pages` (configured in package.json homepage and deploy script)
- **Tailwind content paths**: Config scans `src/pages/*.js`, `src/pug/*.pug`, `src/html/*.html`, `public/*.html`
- **Font**: Custom "Satoshi" font family configured in Tailwind
- **React Router**: Uses v6 syntax (element prop instead of component)
- When modifying Tailwind styles, CSS must be recompiled before changes appear
