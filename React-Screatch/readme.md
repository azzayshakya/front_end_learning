# 🚀 React App from Scratch using Vite

Welcome! This guide explains how to create a **React app from scratch** using **Vite** — with a custom setup for better performance, modern tooling, and full control.

---

## ❓ Why Not Use `create-react-app` (CRA)?

`create-react-app` was the go-to tool for React beginners, but it comes with drawbacks:

| Feature | CRA | Vite |
|--------|-----|------|
| Build Speed | Slow (especially on large projects) | Lightning fast (thanks to ES Modules + Rollup) ⚡ |
| Config Overhead | Hard to customize (ejected config is messy) | Easy and clean config with `vite.config.js` |
| Modern Support | Old tooling (Webpack, Babel) | Native support for modern JS (ESBuild, HMR) |
| Dev Server | Slow startup and reload | Instant reload, blazing fast dev server |

### So... Why Vite?

✅ Extremely fast startup  
✅ HMR (Hot Module Replacement) is instant  
✅ Modern tools like ESBuild and Rollup  
✅ Lightweight configuration  
✅ Great DX (Developer Experience)  

---

## 🛠️ Step-by-Step Guide to Create a React App (Vite from Scratch)

### 1. Create a new folder

```bash
mkdir my-react-app
cd my-react-app
npm init -y
```

---

### 2. Install Vite and React dependencies

```bash
npm install react react-dom
npm install -D vite @vitejs/plugin-react
```

- `react`, `react-dom`: Required to build React apps.
- `vite`: The dev server + build tool (as a dev dependency).
- `@vitejs/plugin-react`: Enables JSX, Fast Refresh, etc.

---

### 3. Set up your file structure

```
my-react-app/
├── index.html        ✅ Root-level HTML (not in /public like CRA)
├── src/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
```

---

### 4. `index.html` (must be at root level)

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Vite React App</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

---

### 5. `src/main.jsx`

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

---

### 6. `src/App.jsx`

```jsx
import React from "react";

export default function App() {
  return <div>Hello from React + Vite 🚀</div>;
}
```

---

### 7. `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

---

### 8. `package.json` (scripts section)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

### 9. Start the dev server

```bash
npm run dev
```

Now open your browser at [http://localhost:5173](http://localhost:5173)

---

## 🔥 Bonus: Why Should `index.html` Be in the Root (Not in `/public`)?

- Vite uses `index.html` as the **true entry point** for development and build.
- Unlike CRA (which uses `/public/index.html`), Vite **requires it in the root folder**.
- Vite parses `index.html` directly to inject scripts and optimize your app.

---

## ✅ Final Thoughts

- Vite gives you **faster builds, cleaner config**, and a better modern dev experience.
- If you're just starting out or want to ditch slow tooling, **Vite is the way to go**.
- You get full control, with fewer dependencies and faster development loops.

---

Built with ❤️ and Vite.
```

---

Let me know if you want this README as a downloadable file or want to add things like `eslint`, `prettier`, or `TypeScript` support too!