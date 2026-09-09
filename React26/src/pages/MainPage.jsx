import { useState } from "react";
import { ALL_ITEMS } from "./constants/data";
import { ItemList } from "./components/ItemList";

export default function MainPage() {
  const [query, setQuery] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  // BUG 1: Expensive calculation runs on EVERY App render (e.g., clicking Toggle Theme)
  console.log(
    "%c[Heavy Filter] Recalculating list...",
    "color: red; font-weight: bold;",
  );
  let delay = 0;
  while (delay < 250000000) delay++; // Simulated lag/freeze

  const filteredItems = ALL_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  // BUG 2: Creates a new function instance in memory on every render
  const handleSelect = (name) => {
    setSelectedItem(name);
  };

  const containerStyle = {
    padding: "24px",
    fontFamily: "sans-serif",
    minHeight: "100vh",
    backgroundColor: darkTheme ? "#1e293b" : "#f8fafc",
    color: darkTheme ? "#f8fafc" : "#0f172a",
  };

  return (
    <div style={containerStyle}>
      <h2>Unoptimized Sandbox (Feel the Lag)</h2>

      {/* Clicking this has nothing to do with items, but freezes the UI */}
      <button
        onClick={() => setDarkTheme((prev) => !prev)}
        style={{ padding: "8px 14px", marginBottom: "16px", cursor: "pointer" }}
      >
        Toggle Theme: {darkTheme ? "🌙 Dark" : "☀️ Light"}
      </button>

      <div style={{ marginBottom: "12px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter items..."
          style={{ padding: "8px 12px", width: "280px" }}
        />
      </div>

      {selectedItem && (
        <p style={{ color: "#0ea5e9" }}>
          <strong>Selected:</strong> {selectedItem}
        </p>
      )}

      <ItemList items={filteredItems} onSelect={handleSelect} />
    </div>
  );
}
