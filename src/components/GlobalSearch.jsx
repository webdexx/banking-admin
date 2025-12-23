import { useState } from "react";
import { useStore } from "../stores/store";
import { useNavigate } from "react-router-dom";
import { LuUser, LuBuilding2, LuSearch } from "react-icons/lu";

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const search = useStore((s) => s.search);
  const navigate = useNavigate();

  const results = search(query);

  const handleSelect = (item) => {
    navigate(item.route);
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && results.length) {
            handleSelect(results[0]);
          }
        }}
        placeholder="Search users or accounts..."
        className="w-full px-4 py-2 border rounded-lg pl-10 pr-4 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <LuSearch className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />

      {query && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-100 rounded-lg shadow-lg">
          {results.map((item) => (
            <div
              key={`${item.type}-${item.id}`}
              onClick={() => handleSelect(item)}
              className="flex items-center gap-3 px-4 py-2 hover:bg-slate-100 cursor-pointer"
            >
              {item.type === "user" ? (
                <LuUser className="text-sky-600" />
              ) : (
                <LuBuilding2 className="text-emerald-600" />
              )}

              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-slate-500">
                  {item.subtitle} • {item.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
