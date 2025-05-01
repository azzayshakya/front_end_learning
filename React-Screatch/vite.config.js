// vite.config.js

// ✅ Importing the helper function `defineConfig` from Vite.
// This provides IntelliSense (auto-completion and type checking) if you're using TypeScript,
// and makes your configuration cleaner and more manageable.
import { defineConfig } from "vite";

// ✅ Importing the official Vite plugin for React.
// This plugin enables support for JSX, React Fast Refresh (HMR), and some Babel support.
// Without this, Vite would not correctly process `.jsx` or `.tsx` files.
import react from "@vitejs/plugin-react";

// ✅ Exporting the Vite configuration using `defineConfig`.
// This function wraps your config object, which is then automatically detected and used by Vite.
// You do NOT need to import this file anywhere — Vite will pick it up automatically
// when you run `vite`, `npm run dev`, or `npm run build`.
export default defineConfig({
  // 📦 The `plugins` array allows you to register Vite or Rollup plugins.
  // We're passing the React plugin here, which handles transforming JSX, hot reloading, etc.
  plugins: [react()],

  // 🔧 Optional: you can customize more settings here, like:
  // server: { port: 3000, open: true },
  // build: { outDir: 'dist' },
  // resolve: { alias: { '@': '/src' } },
});
