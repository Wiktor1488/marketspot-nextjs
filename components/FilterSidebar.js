export default function FilterSidebar({ filters, setFilters }) {
  const updateFilter = (category, value, checked) => {
    setFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-6">Filtry</h2>

      {/* Kategoria */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-800">Kategoria</h3>
        {["Smartfony", "Tablety", "Akcesoria GSM"].map((category) => (
          <label key={category} className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              onChange={(e) =>
                updateFilter("categories", category, e.target.checked)
              }
              className="rounded"
            />
            <span className="text-gray-700">{category}</span>
          </label>
        ))}
      </div>

      {/* Cena */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-800">Cena</h3>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="Od"
            value={filters.priceMin}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, priceMin: e.target.value }))
            }
            className="w-20 px-2 py-1 border border-gray-300 rounded"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            placeholder="Do"
            value={filters.priceMax}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, priceMax: e.target.value }))
            }
            className="w-20 px-2 py-1 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Stan */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-800">Stan</h3>
        {["Nowy", "Używany"].map((condition) => (
          <label key={condition} className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              onChange={(e) =>
                updateFilter("condition", condition, e.target.checked)
              }
              className="rounded"
            />
            <span className="text-gray-700">{condition}</span>
          </label>
        ))}
      </div>

      {/* Lokalizacja */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-800">Lokalizacja</h3>
        {["Warszawa", "Kielce", "Kraków", "Poznań"].map((location) => (
          <label key={location} className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              onChange={(e) =>
                updateFilter("locations", location, e.target.checked)
              }
              className="rounded"
            />
            <span className="text-gray-700">{location}</span>
          </label>
        ))}
      </div>

      <button className="w-full bg-gray-600 text-white py-3 rounded font-bold hover:bg-gray-700 transition-colors">
        Zastosuj filtry
      </button>
    </div>
  );
}
