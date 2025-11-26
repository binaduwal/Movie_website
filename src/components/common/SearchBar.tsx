import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleDelete = () => {
    setSearchTerm("");
  };
  return (
    <div>
      <form>
        <div className="relative">
          <Search className="absolute left-3 top-2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-200 rounded-full pl-10 py-2"
          />
          {searchTerm && (
            <X
              onClick={handleDelete}
              className="absolute right-3 top-2 text-gray-400 cursor-pointer"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
