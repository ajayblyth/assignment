import { useState } from "react";

const items = Array.from({ length: 5000 }, (_, index) => `Item ${index + 1}`);
function FilterList() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // No useMemo here
  const filteredItems = items.filter((item) => {
    console.log("Filtering List...");
    return item.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div
      style={{
        padding: "20px",
        background: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h2>Filter Large List (Without useMemo)</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>

      <p>Total Results: {filteredItems.length}</p>

      <ul>
        {filteredItems.slice(0, 20).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterList;