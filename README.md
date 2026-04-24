# Maria Jose's Professional Portfolio 🚀

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Language](https://img.shields.io/badge/language-HTML%2FCSS%2FJS-yellow)

An interactive and fully responsive web portfolio designed to showcase my constant professional evolution, technical projects, and specialization in Mechatronics Engineering and Data Science. The project stands out for its use of native web technologies, modern CSS animations, and structured development best practices.

---

## 🌟 1. Main Features

- **Responsive Design (Mobile-First):** Implemented using CSS Grid and Flexbox, ensuring excellent display across mobile devices, tablets, and desktop monitors.
- **Dynamic Vanilla JS Interactivity:** Smooth DOM (Document Object Model) manipulation without relying on heavy external libraries. Includes dynamic buttons and responsive hamburger menus.
- **Optimized CSS Animations:** Integrated micro-interactions such as hover transformations (`transform: scale()`, `translateY()`) and smooth transitions (`scroll-behavior: smooth`) for a premium User Experience (UX).
- **Modular Style Architecture:** Extensive use of CSS variables (`:root`) for global color and typography management, alongside a minified version ready for production (`style.min.css`).

---

## 📂 2. Folder Architecture

The project is organized in a clean and scalable structure:

```text
PortfolioWebsite/
│
├── public/
│   └── img/
│       └── FotoM.webp        # Assets and profile pictures
│
├── portafolio/
│   ├── index.html            # Main entry point (Hero, Profile, Education, Dynamic Projects)
│   ├── mascotas.html         # Pet Gallery page (Flexbox and Grid examples)
│   ├── styles.css            # Main stylesheet (Variables, Flexbox/Grid, Animations)
│   ├── style.min.css         # Minified stylesheet for production
│   └── script.js             # Interactivity (DOM manipulation, event listeners)
│
└── README.md                 # Project documentation
```

---

## 🏗️ 3. HTML & CSS Structure

### HTML Structure
The HTML follows a semantic and accessible structure to improve SEO and readability:
- **`<header class="hero">`**: Contains the main banner, profile picture, and welcome message.
- **`<nav class="navbar">`**: Sticky navigation bar with a hamburger menu for mobile views.
- **`<section class="info-blocks">`**: Used for the "Profile" and "Education" sections. These blocks are highly reusable and map perfectly to CSS Grid layouts.
- **`<main class="container">`**: Wraps the core content and dynamic projects section.

### CSS Structure
The CSS is structured to be modular and easy to maintain:
- **Global Variables (`:root`)**: Defines the color palette (e.g., `--primary-color: #d81b60`), fonts, and base sizes.
- **Layouts**: Heavy reliance on `display: flex` for navigation and linear alignment, and `display: grid` for complex multi-column sections (like the `.info-blocks` and `.gallery`).
- **Media Queries**: Specific breakpoints (`@media (max-width: 1024px)` and `@media (max-width: 768px)`) adapt the layout from 3 columns down to 2 or 1 column depending on the device.
- **Animations**: CSS transitions are preferred over JavaScript for hover effects to ensure optimal performance.

---

## ⚙️ 4. Step-by-Step Installation

Since this project is built with base web technologies (HTML, CSS, JS), it does not require Node.js dependencies or complex build processes. To initialize the local development environment, follow these commands:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio-mariajose.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd portfolio-mariajose/portafolio
   ```

3. **Configure the environment (Optional):**
   Although the project runs statically, if you wish to integrate it with a backend in the future, you can configure an environment file. You can create one using the example:
   ```bash
   cp .env.example .env
   ```
   *Example content in `.env.example`:*
   ```env
   # Port configuration for local static server (optional)
   PORT=8080
   ENVIRONMENT=development
   ```

4. **Run in the browser:**
   You can use an extension like *Live Server* in VSCode or serve it directly with Python from the terminal:
   ```bash
   # Using Python 3
   python -m http.server 8080
   ```
   Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 💻 5. Usage with Code Examples

Here is how to interact with or scale key components of the project:

### Adding a new education section to the Grid layout
The portfolio uses an architecture based on `.block` classes to maintain symmetry. To add a new item, simply add the code inside the `<section id="educacion" class="info-blocks educacion-blocks">` container:

```html
<div class="block">
    <h3 style="color: var(--primary-color);">Master in Artificial Intelligence</h3>
    <p>Tech University.</p>
    <p><em>2026-2027 (Planned)</em></p>
</div>
```

### Configuring the hamburger menu behavior (JS)
The main interaction script works by toggling classes in the DOM. You can extend this functionality to include specific animations:

```javascript
// script.js - Mobile menu logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        // Toggles the 'show' class to display or hide the navigation
        navLinks.classList.toggle('show');
        console.log('Navigation state: ', navLinks.classList.contains('show') ? 'Open' : 'Closed');
    });
}
