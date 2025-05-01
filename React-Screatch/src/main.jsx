// This file is the entry point 

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";


// createRoot is a function provided by React 18.
// It’s used to create a place (a React root) where your React app can be rendered into the actual DOM.

// 🧱 What is "root"?
// In React, the "root" is a div in your HTML like this:


// That’s just plain HTML. Nothing dynamic yet.
// We need to tell React:

// "Hey! Take over this div and manage everything inside it."

// That’s where createRoot() comes in.

// const root = createRoot(document.getElementById("root"));
// This line tells React:

// “This is your entry zone. From now on, you control everything inside this #root div.”

const root = createRoot(document.getElementById("root"));

// React evaluates the JSX, renders it into HTML, and inserts it inside the div#root.

// That’s why we use the word "render".
// We're rendering a component into the real DOM.

root.render(<App />);

