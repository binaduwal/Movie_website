import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import { useDebounce } from "../../hooks/useDebounceHook";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const debounceSearchTerm = useDebounce(searchTerm, 300);

  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

  const FALLBACK_IMAGE =
    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  const { movies: data = [] } = useMovies(
    debounceSearchTerm ? `/search/multi?query=${debounceSearchTerm}` : "",
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Search Container */}
      <div
        className={`
        flex items-center overflow-hidden
        transition-all duration-300 ease-in-out
        h-11 rounded-full border
        ${
          isOpen
            ? "w-[300px] px-4 bg-white/10 backdrop-blur-md border-white/10"
            : "w-11 px-0 justify-center bg-transparent border-transparent"
        }
`}
      >
        <Search
          className="text-gray-300 cursor-pointer shrink-0"
          size={20}
          onClick={() => setIsOpen(true)}
        />

        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          placeholder="Search movies..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`
            bg-transparent outline-none text-white placeholder:text-gray-400
            transition-all duration-300
            ml-3 w-full
          ${isOpen ? "opacity-100 ml-3" : "opacity-0 w-0 ml-0"}          `}
        />

        {isOpen && (
          <X
            onClick={handleClose}
            className="text-gray-400 cursor-pointer hover:text-white transition"
            size={18}
          />
        )}
      </div>

      {/* Search Results */}
      {debounceSearchTerm && data.length > 0 && (
        <div className="absolute top-14 right-0 w-[320px] max-h-[400px] overflow-y-auto rounded-2xl bg-gray-900/95 backdrop-blur-lg border border-white/10 shadow-2xl p-2 z-50">
          {data.map((movie) => {
            const image = movie?.poster_path
              ? `${IMAGE_BASE_URL}${movie.poster_path}`
              : movie?.backdrop_path
                ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
                : FALLBACK_IMAGE;

            return (
              <Link
                key={movie.id}
                to={`/${movie.media_type}/${movie.id}`}
                onClick={() => setSearchTerm("")}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition-all"
              >
                <img
                  src={image}
                  alt={movie?.title || movie?.name}
                  className="w-14 h-16 rounded-lg object-cover"
                />

                <div className="flex flex-col">
                  <span className="text-white font-medium line-clamp-1">
                    {movie.title || movie.name}
                  </span>

                  <span className="text-sm text-gray-400 capitalize">
                    {movie.media_type}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
