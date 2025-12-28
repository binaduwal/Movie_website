import { Search, X } from "lucide-react";
import { useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import { useDebounce } from "../../hooks/useDebounceHook";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debounceSearchTerm = useDebounce(searchTerm, 300);
  const handleDelete = () => {
    setSearchTerm("");
  };
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_URL;
  const FALLBACK_IMAGE =
    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  const { movies: data = [] } = useMovies(
    debounceSearchTerm ? `/search/multi?query=${debounceSearchTerm}` : ""
  );

  return (
    <div className="relative">
      <form>
        <div className="relative  ">
          <Search className="absolute left-3 top-2 text-gray-400 " />
          <input
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white  sm:block sm:w-[300px] focus:outline-none text-black rounded-full pl-10 py-2"
          />
          {searchTerm && (
            <X
              onClick={handleDelete}
              className="absolute right-3 top-2 text-gray-400 cursor-pointer"
            />
          )}
        </div>
      </form>
      {debounceSearchTerm && data.length > 0 && (
        <div className="absolute top-full right-0 w-[300px] max-h-80 bg-white text-gray-800 overflow-y-auto z-50 border rounded-lg shadow-lg mt-2">
          {data.map((movie) => {
            const image = movie?.poster_path
              ? `${IMAGE_BASE_URL}${movie.poster_path}`
              : movie?.backdrop_path
              ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
              : FALLBACK_IMAGE;

            return (
              <Link to={`/${movie.media_type}/${movie.id}`} key={movie.id} className="flex gap-2 p-2">
                <img
                  src={image}
                  alt={movie?.title || movie?.name}
                  className="rounded-xl w-20 h-20 object-cover"
                />
                <p>{movie.title || movie.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
