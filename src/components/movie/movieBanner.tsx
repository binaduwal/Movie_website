import type { Movie } from "../../types/movie";

interface movieBannerProps {
  movie?: Movie;
}

const MovieBanner = ({ movie }: movieBannerProps) => {
  const backdrop = movie?.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  return (
    <div className="w-full h-[70vh] overflow-hidden">
      <img src={backdrop} alt={movie?.original_title} className="object-cover object-center w-full h-full" />
    </div>
  );
};

export default MovieBanner;
