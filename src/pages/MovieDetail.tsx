import { useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";
import { Button } from "../components/ui/button";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_URL;
const FALLBACK_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

const MovieDetail = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const type = location.pathname.startsWith("/tv") ? "tv" : "movie";

  const { data: movie, isError } = useMovieDetail(movieId, type);
  console.log(movie, "movie detail");
  const posterpath = movie?.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : FALLBACK_IMAGE;
  const backdrop = movie?.backdrop_path
    ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
    : FALLBACK_IMAGE;

  console.log(backdrop, "backdrop");
  if (isError) {
    return (
      <div className="text-red-500 font-semibold">
        Failed to load movie details.
        <br />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mb-12 ">
      <div className="w-full h-[400px]">
        <img
          src={backdrop}
          alt={movie?.title}
          className="
          w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 bg-gray-800 p-5">
        <div className="w-full lg:w-1/4 space-y-2">
          <img
            src={posterpath}
            alt={movie?.title}
            className="
          rounded-xl w-full object-cover"
          />
          <Button className="w-full" variant="cyan">
            Trailer
          </Button>
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold">{movie?.title}</h2>
          <p className="text-base  line-clamp-2">
            {movie?.overview}
          </p>
          <div className="grid grid-cols-2 gap-y-2 text-lg">
            <div>
              <span className="font-semibold">Genre: </span>
              <span>
                {movie?.genres?.map((genre) => genre.name).join(", ")}
              </span>
            </div>
            <div>
              <span className="font-semibold">Duration: </span>
              <span>{movie?.runtime ? `${movie.runtime} min` : "N/A"}</span>
            </div>
            <div>
              <span className="font-semibold">Production Company: </span>
              <span>
                {movie?.production_companies
                  ? `${movie.production_companies[0].name}`
                  : "N/A"}
              </span>
            </div>
            <div>
              <span className="font-semibold">Release Date: </span>
              <span>
                {movie?.release_date
                  ? `${movie.release_date}`
                  : "N/A"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/4 space-y-2 justify-start">
          <Button className="z-10" variant="cyan">
            Stream in HD
          </Button>
          <Button className="z-10" variant="cyan">
            Download in HD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
