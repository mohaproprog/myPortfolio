# React Portfolio

Simple, responsive personal portfolio built with React. Contains a navbar (dark mode persisted in localStorage), hero, titled sections, services, projects, contact and footer.

## Features
- Responsive layout (grid / flex)
- Dark mode persisted across refresh (localStorage)
- Smooth scroll links (react-scroll compatible)
- Modern UI cards for projects

## Prerequisites
- Node.js (>=14) and npm installed on Windows

## Install & Run (Windows)
Open PowerShell / Command Prompt:
```bash
cd "c:\Users\moxam\Desktop\portfolio\react -portfolio"
npm install
npm start
```

## Build
```bash
npm run build
```

## Project structure (important files)
- src/
  - Components/
    - navbar/Navbar.jsx — dark mode + scroll links
    - hero/Hero.jsx
    - title/Title.jsx
    - about/About.jsx
    - skills/Skills.jsx
    - service/Service.jsx
    - projects/Project.jsx
    - contact/Contact.jsx
    - footer/Footer.jsx
  - App.jsx
  - index.jsx
  - assets/ — images
  - styles — component css files

## Notes & tips

- Dark mode
  - Navbar stores state in `localStorage` (`'darkMode'`).
  - Initialize state from localStorage (use try/catch to avoid SSR/privacy errors).
  - Toggle a `.darkMode` class on `document.body` and define theme variables in CSS.

- react-scroll (smooth scrolling)
  - Link `to` values are case‑sensitive and must match `Element name="..."`.
  - Use `offset` to account for fixed navbar height (e.g. `offset={-80}`).

- Projects
  - Use consistent card markup:
    ```jsx
    <div className="project">
      <img src={image} alt="Project screenshot" />
      <div className="content">
        <h3>Title</h3>
        <p>Description...</p>
        <div className="actions">
          <a className="btn primary" href="#">Live Demo</a>
          <a className="btn secondary" href="#">Source</a>
        </div>
      </div>
    </div>
    ```

## Common fixes
- Dark mode disappears after refresh:
  - Ensure initial state reads from localStorage and an effect applies the body class.
- Scroll links not working:
  - Confirm `Element name="..."` exactly matches `<Link to="...">` and add `offset` if navbar is fixed.
- JSX lint errors:
  - Use `className` instead of `class` and avoid putting an `<a>` directly inside `<button>`.

## License
Add your preferred license here.
```// filepath: c:\Users\moxam\Desktop\portfolio\react -portfolio\README.md
# React Portfolio

Simple, responsive personal portfolio built with React. Contains a navbar (dark mode persisted in localStorage), hero, titled sections, services, projects, contact and footer.

## Features
- Responsive layout (grid / flex)
- Dark mode persisted across refresh (localStorage)
- Smooth scroll links (react-scroll compatible)
- Modern UI cards for projects

## Prerequisites
- Node.js (>=14) and npm installed on Windows

## Install & Run (Windows)
Open PowerShell / Command Prompt:
```bash
cd "c:\Users\moxam\Desktop\portfolio\react -portfolio"
npm install
npm start
```

## Build
```bash
npm run build
```

## Project structure (important files)
- src/
  - Components/
    - navbar/Navbar.jsx — dark mode + scroll links
    - hero/Hero.jsx
    - title/Title.jsx
    - about/About.jsx
    - skills/Skills.jsx
    - service/Service.jsx
    - projects/Project.jsx
    - contact/Contact.jsx
    - footer/Footer.jsx
  - App.jsx
  - index.jsx
  - assets/ — images
  - styles — component css files

## Notes & tips

- Dark mode
  - Navbar stores state in `localStorage` (`'darkMode'`).
  - Initialize state from localStorage (use try/catch to avoid SSR/privacy errors).
  - Toggle a `.darkMode` class on `document.body` and define theme variables in CSS.

- react-scroll (smooth scrolling)
  - Link `to` values are case‑sensitive and must match `Element name="..."`.
  - Use `offset` to account for fixed navbar height (e.g. `offset={-80}`).

- Projects
  - Use consistent card markup:
    ```jsx
    <div className="project">
      <img src={image} alt="Project screenshot" />
      <div className="content">
        <h3>Title</h3>
        <p>Description...</p>
        <div className="actions">
          <a className="btn primary" href="#">Live Demo</a>
          <a className="btn secondary" href="#">Source</a>
        </div>
      </div>
    </div>
    ```

## Common fixes
- Dark mode disappears after refresh:
  - Ensure initial state reads from localStorage and an effect applies the body class.
- Scroll links not working:
  - Confirm `Element name="..."` exactly matches `<Link to="...">` and add `offset` if navbar is fixed.
- JSX lint errors:
  - Use `className` instead of `class` and avoid putting an `<a>` directly inside `<button>`.

## deployed in vite
https://my-portfolio-ajsq.vercel.app/