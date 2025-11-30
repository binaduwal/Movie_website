import type {movieProps } from "../../types/movie";
import { Button } from "../ui/button";


const MovieBanner = ({ movie }: movieProps) => {
  const backdrop = movie?.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  return (
    <div className="relative h-[70vh] overflow-hidden ">
      <img
        src={backdrop}
        alt={movie?.title}
        className="object-cover inset-0 w-full h-full bg-black/50"
      />
      <div className="absolute bottom-10 left-50 z-10 max-w-3xl space-y-2 p-6   ">
        <h2 className="text-white text-5xl font-bold">{movie?.title}</h2>
        <p className="text-white text-2xl line-clamp-2">{movie?.overview}</p>
        <Button className="z-10" variant="cyan">Watch Now</Button>
      </div>
    </div>
  );
};

export default MovieBanner;
