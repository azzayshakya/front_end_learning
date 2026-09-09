export function ItemList({ items, onSelect }) {
  console.log(
    "%c[ItemList Child] Re-rendered!",
    "color: orange; font-weight: bold;",
  );

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => onSelect(item.name)}
          style={{
            padding: "8px 12px",
            margin: "4px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
